const {
  createUser,
  getUser,
  getUserByEmail,
  getUserById,
  getUserByType,
  updateUser,
  deleteUser,
} = require("../models/user");

const { hashGenerator } = require("../utils/hashGenerator");

const { isHash } = require("../utils/compareHash");

const getUsersController = (req, res) => {
  getUser((err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json({ success: 1, users: result });
    }
  });
};

const createUserController = async (req, res) => {
  try {
    const body = req.body;
    const password = await hashGenerator(body.password);

    console.log(req.body);
    const files = req.file;
    if (files) {
      license = "/uploads/" + files.filename;
    } else {
      license = null;
    }
    const data = { ...body, license, password };
    // const data = body;
    console.log(data);
    createUser(data, (err, result) => {
      if (err) {
        console.log(err);
        res.status(404).json({
          success: 0,
          message: "USER_EXIST",
        });
      } else {
        res.json({ success: 1, user: result });
      }
    });
  } catch (err) {
    console.log(err);
  }
};

const getUserByIdController = (req, res) => {
  const id = req.params.id;
  getUserById(id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json({ success: 1, user: result });
    }
  });
};

const getUserByTypeController = (req, res) => {
  const type = req.body.type;
  getUserByType(type, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json({ success: 1, user: result });
    }
  });
};

const deleteUserController = (req, res) => {
  const id = req.params.id;
  deleteUser(id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json({ success: 1, message: "DELETED" });
    }
  });
};

const LoginUserController = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  getUserByEmail(email, async (err, result) => {
    if (err) {
      console.log(err);
    } else {
      const isMatch = await isHash(password, result.password);
      console.log(result.password);
      if (isMatch) {
        res.json({ success: 1, user: result });
      } else {
        res.json({ success: 0, message: "Unauthorized" });
      }
    }
  });
};

const patchUserController = (req, res) => {
  const data = req.body;
  updateUser(data, (err, result) => {
    if (err) {
      console.log(err);
      res.json({ success: 0 });
    } else {
      res.json({ success: 1, result });
    }
  });
};

module.exports = {
  createUserController,
  getUserByIdController,
  deleteUserController,
  LoginUserController,
  patchUserController,
  getUsersController,
  getUserByTypeController,
};
