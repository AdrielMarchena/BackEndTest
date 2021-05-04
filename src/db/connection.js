const knex = require('knex');
const configuration = require('../../knexfile');

switch(process.env.NODE_ENV) // Change the NODE_ENV on the console, before reach this piece of code
{
    case "test":
        config = configuration.test;
    break;
    case "development":
        config = configuration.development;
    break;
    case "staging":
        config = configuration.staging;
    break;
    default:
        config = configuration.development;
        break;
}
const connection = knex(config);

module.exports = connection;