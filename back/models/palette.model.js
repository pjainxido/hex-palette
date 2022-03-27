const mongoose = require("mongoose");

const paletteSchema = mongoose.Schema({
  hexCodes: {
    type: String,
    required: true,
    trim: true,
  },
  like: {
    type: Number,
    default: 0,
  },
  title: {
    type: String,
    required: true,
  },
  tags: [
    {
      type: String,
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

paletteSchema.statics.create = function (payload) {
  const palette = new this(payload);

  return palette.save();
};

paletteSchema.statics.findAll = function () {
  return this.find({});
};

paletteSchema.statics.findOneByPaletteId = function (paletteId) {
  return this.findOne({ paletteId });
};

module.exports = mongoose.model("Palette", paletteSchema);
