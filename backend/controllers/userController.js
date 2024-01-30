User = require("../models/user");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json({ 
      status: "Success",
      message: {
        users: users,
      }
    });
  } 
  catch (error) {
    res.send({ 
      status: "Error",
      message: error.message
    });
  }
};

const getUserById = async (req, res) => {
  try {
      const user = await User.findById(req.params.id);
      res.json({ 
        status: "Success",
        message: {
          user: user,
        }
      });
  } 
  catch (error) {
    res.send({ 
      status: "Error",
      message: error.message
    });
  }
};

const addUser = (req, res) => {
  User.register(
    new User({ name: req.body.name, username: req.body.username, email: req.body.email, isAdmin: req.body.isAdmin }),
    req.body.password,
    function (err, msg) {
      if (err) {
        res.json({ 
          status: "Error",
          message: "Error register" 
        });
      } 
      else {
        res.json({
          status: "Success",
          message: "Successful register user" 
        });
      }
    }
  );
}

const updateUser = async (req, res) => {
  try {
      const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json({ 
        status: "Success",
        message: {
          user: user,
        }
      });
  } 
  catch (error) {
    res.send({ 
      status: "Error",
      message: error.message
    });
  }
}

const deleteUser = async (req, res) => {
  try {
      const user = await user.findByIdAndDelete(req.params.id);
      res.json({ 
        status: "Success",
        message: "Successful delete user"
      });
  } 
  catch (error) {
    res.send({ 
      status: "Error",
      message: error.message
    });
  }
}

const countUsers = async (req, res) => {
  try {
      const visiteurCount = await User.countDocuments({ isAdmin: false });
      const adminCount = await User.countDocuments({ isAdmin: true });
      res.json({ 
        status: "Success",
        message: {
          visiteurCount: visiteurCount,
          adminCount: adminCount,
        }
      });
  } 
  catch (error) {
    res.send({ 
      status: "Error",
      message: error.message
    });
  }
}

module.exports = {
  getAllUsers,
  getUserById,
  addUser,
  updateUser,
  deleteUser,
  countUsers
};