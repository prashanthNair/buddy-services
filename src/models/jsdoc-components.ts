/**
 * @swagger
 *  components:
 *    schemas:
 *      User:
 *        type: object
 *        properties:
 *          userName:
 *            type: string
 *            description: User name for the buddy user, needs to be unique
 *          firstName:
 *            type: string
 *            description: First name of the buddy user
 *          lastName:
 *            type: string
 *            description: Last name of the buddy user
 *          password:
 *            type: string
 *            description: Password for the buddy user account
 *          location:
 *            type: string
 *            description: Current location of the buddy user
 *          state:
 *            type: string
 *            description: Residing state of the buddy user
 *          country:
 *            type: string
 *            description: Residing country of the buddy user
 *          email:
 *            type: string
 *            description: Email ID of the buddy user
 *            format: email
 *          mobileNum:
 *            type: integer
 *            description: Mobile number of the buddy user
 */

/**
 * @swagger
 *  components:
 *    schemas:
 *      SuccessResponse:
 *        type: object
 *        properties:
 *          success:
 *            type: boolean
 *            description: Tells the state of the API is success/failure
 *            example: true
 *          status:
 *            type: integer
 *            description: Indicates the status of the API transaction
 *            example: 1
 *          message:
 *            type: string
 *            description: Message about the API transaction
 *            example: Transaction successfull
 *
 */
/**
 * @swagger
 *  components:
 *    schemas:
 *      FailureResponse:
 *        type: object
 *        properties:
 *          success:
 *            type: boolean
 *            description: Tells the state of the API is success/failure
 *            example: false
 *          status:
 *            type: integer
 *            description: Indicates the status of the API transaction
 *            example: 0
 *          message:
 *            type: string
 *            description: Message about the API transaction
 *            example : Transaction Failure
 */

/**
 * @swagger
 *  components:
 *    responses:
 *      FailureError:
 *        description: The specified operation failed due to internal server error
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/FailureResponse'
 *      BadRequest:
 *        description: Parameters are not appropriate for this API transaction. Please validate the input.
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/FailureResponse'
 *      
 */