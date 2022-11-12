const Region = require("./../model/region");
const regionData = require("./../data/region");
const region = require("./../data/region");
const add = async (req, res, next) => {
  try {
    const regions = await Region.create(regionData);
    res.status(200).json(regions);
  } catch (error) {
    console.log(error);
  }
};

const get = async (req, res, next) => {
    try {
      
        
  } catch (error) {
    console.log(error);
  }
};

module.exports = { add, get };
