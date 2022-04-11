const express = require("express");

const Palette = require("../models/palette.model");
const router = express.Router();

// router.get("/", (_, res) => {
//   // // mongoose.Collection('palette')
//   // Palette.find({}, (err, palettes)=>{
//   //   if(err) throw err;
//   //   console.log(palettes)

//   // })
//   Palette.findAll()
//     .then((palette) => {
//       if (!palette.length) return res.status(404).send({ err: "Palette not found" });
//       res.send(palette);
//     })
//     .catch((err) => res.status(500).send(err));
// });

// router.get("/list", (req, res) => {
//   const { tags = '', sort, startDate, page = 0, limit = 50 } = req.query;
//   Palette.findByFilterOptions(sort, tags, startDate, page, limit)
//     .then((palette) => {
//       if (!palette.length) return res.status(204).send({ err: "Palette not found" });
//       res.send(palette);
//     })
//     .catch((err) => res.status(500).send(err));
// });

router.get("/", (req, res) => {
  const { tags='', sort, startDate, page, limit = 50, title } = req.query;
  // const parsedTags = tags.split(",");
  Palette.findByFilterOptions(sort, tags, startDate, page, limit, title)
    .then((palette) => {
      if (!palette.length) return res.status(204).send({ err: "Palette not found" });
      res.send(palette);
    })
    .catch((err) => res.status(500).send(err));
});

router.get("/id/:id", (req, res) => {
  console.log(req.params);
  Palette.findOneByPaletteId(req.params.id)
    .then((palette) => {
      if (!palette) return res.status(404).send({ err: "Palette Not found" });
      res.send(palette);
    })
    .catch((err) => {
      res.status(500).send(err);
      console.log(err);
    });
});

router.post("/create", (req, res) => {
  console.log(req.body);
  Palette.create(req.body)
    .then((palette) => res.send(palette))
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
});

module.exports = router;
