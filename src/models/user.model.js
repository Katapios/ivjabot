const mongoose = require('mongoose')
const Schema = mongoose.Schema


const UserSchema = new Schema({
  telegramId: {
    type: Number,
    required: true
  },

  films: {
    type: [String],
    default: []
  },
    arr: [String] }, { usePushEach: true
})

mongoose.model('users', UserSchema)