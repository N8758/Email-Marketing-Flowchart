const mongoose = require('mongoose');

const emailFlowSchema = new mongoose.Schema({
  nodes: { type: Array, required: true },
  edges: { type: Array, required: true },
});

module.exports = mongoose.model('EmailFlow', emailFlowSchema);
