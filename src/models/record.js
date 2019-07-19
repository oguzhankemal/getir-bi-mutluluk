var mongoose = require('mongoose');
var schema = mongoose.Schema;

const recordsSchema = new schema({
    key: String,
    createdAt: Date,
    counts: [Number],
  });

  module.exports = mongoose.model('records', recordsSchema);
