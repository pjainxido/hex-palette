const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");

autoIncrement.initialize(mongoose.connection);

const paletteSchema = mongoose.Schema({
  id: {
    type: Number,
    default: 0,
    unique: true,
  },
  hexCodes: {
    type: String,
    required: true,
    trim: true,
  },
  view: {
    type: Number,
    default: 0,
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
  return this.findOne({ id: paletteId });
};

paletteSchema.statics.findByFilterOptions = function (sort, tags, startDate, page, limit, title) {
  console.log(sort, tags, startDate, title);
  // /.*m.*/
  const titleQuery = title
    ? {
        title: { $regex: `.*${title}.*` },
      }
    : {};
 
  const dateQuery = startDate ? { createdAt: { $gte: new Date(startDate) } } : {};
  const findQuery = { ...titleQuery, ...dateQuery };

  let sortOption;
  switch (sort) {
    case "hot":
      sortOption = { like: -1 };
      break;
    case "old":
      sortOption = { createdAt: 1 };
      break;
    default:
      sortOption = { createdAt: -1 };
  }
  if (tags.length) {
    const parsedTags = tags.split(",");
    return this.find(findQuery)
      .where("tags")
      .all([...parsedTags])
      .skip(page * limit)
      .limit(18)
      .sort(sortOption);
  }
  return this.find(findQuery)
    .skip(page * limit)
    .limit(18)
    .sort(sortOption);
};

paletteSchema.plugin(autoIncrement.plugin, {
  model: "palette",
  field: "id",
  startAt: 1,
  increment: 1,
});

module.exports = mongoose.model("Palette", paletteSchema);
