/**
 * @swagger
 *  components:
 *    schemas:
 *      User:
 *        type: object
 *        properties:
 *          userName:
 *            type: string
 *            description: User name for the user, needs to be unique
 *          firstName:
 *            type: string
 *            description: First name of the user
 *          lastName:
 *            type: string
 *            description: Last name of the user
 *          password:
 *            type: string
 *            description: Password for the user account
 *          location:
 *            type: string
 *            description: Current location of the user
 *          state:
 *            type: string
 *            description: Residing state of the user
 *          country:
 *            type: string
 *            description: Residing country of the user
 *          email:
 *            type: string
 *            description: Email ID of the user
 *            format: email
 *          mobileNum:
 *            type: integer
 *            description: Mobile number of the user
 */

/**
 * @swagger
 *  components:
 *    schemas:
 *      Initial_registration:
 *        type: object
 *        properties:
 *          mobileNum:
 *            type: string
 *            description: Mobile Number for the user.
 */

/**
 * @swagger
 *  components:
 *    schemas:
 *      User_email:
 *        type: object
 *        properties:
 *          id:
 *            type: int
 *            description: ID of the user.
 */

/**
 * @swagger
 *  components:
 *    schemas:
 *      BuddyUser:
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
 *          roleId:
 *            type: integer
 *            description: Role Id of the buddy user
 *          roleName:
 *            type: string
 *            description: Role Name of the buddy user
 *          status:
 *            type: string
 *            description: Status of the buddy user
 *          homeTown:
 *            type: string
 *            description: Hometown of the buddy user
 *          teamId:
 *            type: integer
 *            description: Team Id of the buddy user
 *          isActive:
 *            type: string
 *            description: Account activation of the buddy user
 *          parentId:
 *            type: integer
 *            description: Parent Id of the buddy user
 *          createdDate:
 *            type: integer
 *            description: Date of the buddy user creation
 *            format: date
 *          buddyRole:
 *            type: string
 *            description: Role of the buddy user
 */
/**
 * @swagger
 *  components:
 *    schemas:
 *      Buddy:
 *        type: object
 *        properties:
 *          homeTown:
 *            type: string
 *            description: Home Town of the user
 *          teamId:
 *            type: string
 *            description: Team ID of the user
 *          userId:
 *            type: string
 *            description: User ID of the user
 *          isActive:
 *            type: string
 *            description: Active/Inactive State of the user account
 *          state:
 *            type: string
 *            description: Residing State of the user
 *          country:
 *            type: string
 *            description: Residing Country of the user
 *          mobileNum:
 *            type: string
 *            description: Mobile Number of the user
 *          parentId:
 *            type: string
 *            description: Parent ID of the user
 *          createdDate:
 *            type: string
 *            description: Date of Creation.
 *            format: date
 *          buddyRole:
 *            type: string
 *            description: Role of the user
 */
/**
 * @swagger
 *  components:
 *    schemas:
 *      Buddy_Inventory:
 *        type: object
 *        properties:
 *          productId:
 *            type: string
 *            description: ID of the Product
 *          type:
 *            type: string
 *            description: Type of the Product
 *          productCategory:
 *            type: string
 *            description: Category of the Product
 *          createdDate:
 *            type: string
 *            description: Date of Product Registration
 *            format: date 
 *          isAvailable:
 *            type: string
 *            description: Product is available or not.
 *          buddyMargin:
 *            type: string
 *            description: Margin available to buddy
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