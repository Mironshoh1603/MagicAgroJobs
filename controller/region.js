const Region = require("./../model/region");
const District = require("./../model/district");
const regionData = require("./../data/region");
const districtData = require("./../data/district");
const add = async (req, res, next) => {
  try {
    console.log("hello");
    const regions = await District.create(districtData);
    res.status(200).json(regions);
  } catch (error) {
    console.log(error);
  }
};

const get = async (req, res, next) => {
  try {
    const regions = await Region.find().populate({
      path: "districts",
    });
    res.status(200).json(regions);
  } catch (error) {
    console.log(error);
  }
};

const getOne = async (req, res, next) => {
  try {
    const regions = await Region.findById(req.params.id).populate({
      path: "districts",
      select: "name_uz _id -region_id",
    });
    res.status(200).json(regions);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { get, getOne, add };
