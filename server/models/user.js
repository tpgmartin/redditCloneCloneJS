var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
      type: String,
      required: true
    },
    created: {
      type: Number,
      required: true
    }
});

module.exports = mongoose.model('User', schema);
