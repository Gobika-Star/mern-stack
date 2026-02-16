const Menu = require("../Model/menuModel");

exports.getAllMenuItems = async (req, res) => {
  try {
    const items = await Menu.find();
    res.status(200).json({
      status: "success",
      data: items,
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: "Failed to fetch data",
    });
  }
};


exports.createMenuItem = async (req, res) => {
  try {
    const newItem = await Menu.create(req.body);
    res.status(201).json({
      status: "success",
      data: newItem,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: "failed to add data",
    });
  }
};
