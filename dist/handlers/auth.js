"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const AWS = require("aws-sdk");
exports.handler = (event) => __awaiter(void 0, void 0, void 0, function* () {
    event.response.autoConfirmUser = true;
    event.response.autoVerifyPhone = true;
    return event;
});
module.exports.defineAuthChalenge = (event, context, callback) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(event.request);
    // If user is not registered
    if (event.request.userNotFound) {
        event.response.issueToken = false;
        event.response.failAuthentication = true;
        throw new Error("User does not exist");
    }
    if (event.request.session.length >= 3 && event.request.session.slice(-1)[0].challengeResult === false) { // wrong OTP even After 3 sessions?
        event.response.issueToken = false;
        event.response.failAuthentication = true;
        throw new Error("Invalid OTP");
    }
    else if (event.request.session.length > 0 && event.request.session.slice(-1)[0].challengeResult === true) { // Correct OTP!
        event.response.issueTokens = true;
        event.response.failAuthentication = false;
    }
    else { // not yet received correct OTP
        event.response.issueTokens = false;
        event.response.failAuthentication = false;
        event.response.challengeName = 'CUSTOM_CHALLENGE';
    }
    return event;
});
function sendSMS(phone, code) {
    const params = {
        Message: code,
        PhoneNumber: phone,
    };
    return new AWS.SNS({ apiVersion: '2010-03-31' }).publish(params).promise();
}
module.exports.createAuthChallenge = (event) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("CUSTOM_CHALLENGE_LAMBDA", event.request);
    let secretLoginCode;
    if (!event.request.session || !event.request.session.length) {
        // Generate a new secret login code and send it to the user
        secretLoginCode = Date.now().toString().slice(-4);
        try {
            yield sendSMS(event.request.userAttributes.phone_number, secretLoginCode);
        }
        catch (_a) {
            // Handle SMS Failure   
        }
    }
    else {
        // re-use code generated in previous challenge
        const previousChallenge = event.request.session.slice(-1)[0];
        secretLoginCode = previousChallenge.challengeMetadata.match(/CODE-(\d*)/)[1];
    }
    console.log(event.request.userAttributes);
    // Add the secret login code to the private challenge parameters
    // so it can be verified by the "Verify Auth Challenge Response" trigger
    event.response.privateChallengeParameters = { secretLoginCode };
    // Add the secret login code to the session so it is available
    // in a next invocation of the "Create Auth Challenge" trigger
    event.response.challengeMetadata = `CODE-${secretLoginCode}`;
    return event;
});
module.exports.verifyAuthChallenge = (event) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(event.request);
    const expectedAnswer = event.request.privateChallengeParameters.secretLoginCode;
    if (event.request.challengeAnswer === expectedAnswer) {
        event.response.answerCorrect = true;
    }
    else {
        event.response.answerCorrect = false;
    }
    return event;
});
//# sourceMappingURL=auth.js.map