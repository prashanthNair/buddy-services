"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const mysql2_1 = require("mysql2");
const connection = mysql2_1.createPool({
    host: 'ls-4eec577f99943f4d88c82bd50ed1a273cfd8bb3a.ccp1qb7oyot1.ap-south-1.rds.amazonaws.com',
    user: 'dbmasteruser',
    password: 'MigoBucksDevDb$1',
    database: 'DevDB_V.0.0.1',
    connectionLimit: 10,
    multipleStatements: true
});
const db = connection.promise();
exports.db = db;
//# sourceMappingURL=db.config.js.map