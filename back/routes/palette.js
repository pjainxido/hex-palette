const express = require("express");

const Palette = require("../models/palette.model");
const router = express.Router();

router.get("/", (_, res) => {
  // // mongoose.Collection('palette')
  // Palette.find({}, (err, palettes)=>{
  //   if(err) throw err;
  //   console.log(palettes)

  // })
  Palette.findAll()
    .then((palette) => {
      if (!palette.length) return res.status(404).send({ err: "Palette not found" });
      res.send(palette);
    })
    .catch((err) => res.status(500).send(err));
});

router.get("/id/:paletteid", (req, res) => {
  Palette.findOneByPaletteId(req.params.paletteid)
    .then((palette) => {
      if (!palette) return res.status(404).send({ err: "Palette Not found" });
      res.send(palette);
    })
    .catch((err) => {
      res.status(500).send(err);
      console.log(err);
    });
});

router.post("/", (req, res) => {
  console.log(req.body);
  Palette.create(req.body)
    .then((palette) => res.send(palette))
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
});

module.exports = router;
