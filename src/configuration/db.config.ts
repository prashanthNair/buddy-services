import { createPool, Pool, Promise } from 'mysql2'
const lightSailInstance={
    host: 'ls-4eec577f99943f4d88c82bd50ed1a273cfd8bb3a.ccp1qb7oyot1.ap-south-1.rds.amazonaws.com',
    user: 'dbmasteruser',
    password: 'MigoBucksDevDb$1',
    database: 'DevDB_V.0.0.1',
    connectionLimit: 10,
    multipleStatements: true
}

const ec2Instance={
    host: 'migobucksbuddydb.chxvcdv9iena.ap-south-1.rds.amazonaws.com',
    user: 'mibmasteruser',
    password: 'MigobucksBuddy#1',
    database: 'MIBBuddyDB',
    connectionLimit: 10,
    multipleStatements: true
}


const connection= createPool(lightSailInstance)
const db = connection.promise();
export { db }
 
