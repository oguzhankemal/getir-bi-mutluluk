const recordsModel = require('../models/record');
const { validationResult } = require('express-validator');
// Display list of all records.
exports.recordList = async (req, res, next) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try
    {        
      const endDate = new Date(req.body.endDate)
      const startDate = new Date(req.body.startDate)
      const minCount = parseInt(req.body.minCount)
      const maxCount = parseInt(req.body.maxCount)

      const filteredRecords = await recordsModel
      .aggregate([
        { $match: {createdAt: { $lte: endDate, $gte: startDate }}},
        { $unwind: '$counts' },
        { $group: { _id: '$_id', key: { $first: '$key' }, createdAt: { $first: '$createdAt' }, totalCount: { $sum: '$counts'}}},
        { $match:  { totalCount: { $gte: minCount, $lte: maxCount }}},
      ])

      const mappedRecords = filteredRecords.map(m => ({
        key: m.key,
        createdAt: m.createdAt,
        totalCount: m.totalCount,
      }))

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