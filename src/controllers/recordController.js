const recordsModel = require('../models/record');
const { validationResult } = require('express-validator');

// Return list of all records.
exports.recordList = async (req, res, next) => {

  //Express validator check if filter inputs are not null and in correct format
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try
  {     
    
    //Parameters
    const endDate = new Date(req.body.endDate)
    const startDate = new Date(req.body.startDate)
    const minCount = parseInt(req.body.minCount)
    const maxCount = parseInt(req.body.maxCount)

    const filteredRecords = await recordsModel
    .aggregate([
       //Start and End date filter
      { $match: {createdAt: { $lte: endDate, $gte: startDate }}},
      //Breakdown the count array
      { $unwind: '$counts' }, 
      //Make a group the result in desired format
      //Total Count is also sum of all counts
      { $group: { _id: '$_id', key: { $first: '$key' }, createdAt: { $first: '$createdAt' }, totalCount: { $sum: '$counts'}}}, 
      //Lastly Min and Max count filter
      { $match:  { totalCount: { $gte: minCount, $lte: maxCount }}}, 
    ])

    //We map the record result to output formar
    const mappedRecords = filteredRecords.map(m => ({
      key: m.key,
      createdAt: m.createdAt,
      totalCount: m.totalCount,
    }))

    //The last format of the output
    const result = {
      code: 0,
      msg: 'Success',
      records: mappedRecords,
    };

    res.send(result);
  }
  catch(err)
  {
      next(err)
  }
    
};