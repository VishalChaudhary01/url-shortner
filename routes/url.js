const express = require("express");
const router = express.Router();
const shortid = require("shortid");

const URL = require("../models/Url");

router.get("/", (req, res) => res.render("home"));

router.post("/", async (req, res) => {
     const { url } = req.body;
     if (!url) return res.status(400).json({msg: "Please enter a url"});
     const shortID = shortid();
     await URL.create({
          shortID: shortID,
          redirectURL: url,
          visitHistory: [],
     });
     return res.render("home", { id: shortID });
});

module.exports = router;