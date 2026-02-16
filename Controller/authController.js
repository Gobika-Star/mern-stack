const jwt = require("jsonwebtoken");

const users = [
  {
    id: 1,
    name: "Gobika",
    email: "gobika@gmail.com",
    password: "gobika123",
    role: "user"
  },
  {
    id: 2,
    name: "jayanthi",
    email: "jaya@gmail.com",
    password: "jaya123",
    role: "admin"
  }
];
const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRETKEY, {
    expiresIn: process.env.JWT_EXPIRES,
  });
};

// GET ALL USERS
exports.allUsers = (req, res) => {
  res.status(200).json({
    status: "Success",
    users,
  });
};

// LOGIN
exports.login = (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      status: "Fail",
      msg: "Email and password are required",
    });
  }

  const usr = users.find(
    (u) => u.email === email && u.password === password
  );

  if (!usr) {
    return res.status(401).json({
      status: "Fail",
      msg: "Invalid email or password",
    });
  }

  const token = signToken(usr.id);

  res.status(200).json({
    status: "Success",
    token,
    data: usr,
  });
};

// SIGNUP
exports.signup = (req, res) => {
  const newUser = {
    id: users.length + 1,
    ...req.body,
  };

  users.push(newUser);

  const token = signToken(newUser.id);

  res.status(201).json({
    status: "Success",
    token,
    newUser,
  });
};
