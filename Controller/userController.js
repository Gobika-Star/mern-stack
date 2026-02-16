const User = require("../Model/userModel");

exports.getAllData = async (req, res) => {
  try {
    const user = await User.find();
    res.status(200).json({
      status: user.length,
      data: user,
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.createData = async (req, res) => {
  try {
    const newData = await User.create(req.body);
    res.status(201).json({
      status: "success",
      data: newData,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.getData = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: user,
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: err.message,
    });
  }
};
exports.updateData = async (req, res) => {
  try {
    const updatedData = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: "success",
      data: updatedData,
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.deleteData = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "deleted",
      data: null,
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      err,
    });
  }
};
