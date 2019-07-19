const { body  } = require('express-validator');

exports.validateGetRecords = () => {
    return [ 
        body ('startDate', 'Start date doesnt exists').exists().isISO8601(),
        body ('endDate', 'End date doesnt exists').exists().isISO8601(),
        body ('minCount').exists().isInt(),
        body ('maxCount').exists().isInt()
    ]   
}