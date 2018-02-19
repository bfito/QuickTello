'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listSchema = new mongoose.Schema({
  title: {
      type: String,
    require: true
  },
  postion: {
    type: Number,
    default: 0;
  },
  cards: [],
  {
    timestamps: {
    createdAt: "created_at",
    updated: "updated_at"
  }
});

module.exports = mongoose.model('List', listSchema);
