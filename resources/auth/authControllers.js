/* eslint-disable no-underscore-dangle */
const bcrypt = require('bcrypt');
const uuid = require('uuid/v4');
const jwt = require('jsonwebtoken');
const generateToken = require('../../utils/generateToken');
const { GOOGLE_FRONTEND_REDIRCT } = require('../../config/index');
const {
  removeUser,
  insertUser,
  modifyUser,
  filter,
  findUserBy,
} = require('./authModel');

const registerUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const salt = bcrypt.genSaltSync(Math.floor(Math.random() * 10) + 1);
    const hashedPassword = bcrypt.hashSync(password, salt, 10);
    const userObject = {
      id: uuid.v4(),
      email,
      password: hashedPassword,
    };
    const user = await insertUser(userObject);
    const token = generateToken(user);
    res
      .status(201)
      .json({ message: 'Successfully registered user', user, token });
  } catch (error) {
    res
      .status(500)
      .json({ message: `Failure to register user, error: ${error.message}` });
  }
};

const loginUser = async (req, res) => {
  const {
    user,
    body: { password },
  } = req;

  try {
    const isPasswordValid = bcrypt.compareSync(password, user.password);
    if (isPasswordValid) {
      delete user.password;
      const token = generateToken(user);

      res.status(200).json({
        message: `Welcome user`,
        user,
        token,
      });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (error) {
    res.status(500).json({
      message: `Failure to login user, error: ${error.message}`,
    });
  }
};

const editUser = async (req, res) => {
  const { subject } = req.decodedToken;
  const { oldPassword, newPassword, email } = req.body;
  try {
    if (oldPassword && newPassword) {
      const user = await filter({ id: subject });
      const isOldPasswordValid = bcrypt.compareSync(oldPassword, user.password);
      if (!isOldPasswordValid) {
        res.status(400).json({ message: 'Old password is invalid' });
      } else {
        const hashedPassword = bcrypt.hashSync(newPassword, 10);
        await modifyUser({ password: hashedPassword }, subject);
      }
    }
    if (email) {
      await modifyUser({ email }, subject);
    }
    res.status(200).json({ message: 'User successfully edited' });
  } catch (error) {
    res.status(500).json({
      message: `Failure to edit user, error: ${error.message}`,
    });
  }
};

const deleteUser = async (req, res) => {
  const { subject } = req.decodedToken;
  const { password } = req.body;
  try {
    const user = await filter({ id: subject });
    const isPasswordValid = await bcrypt.compareSync(password, user.password);
    if (!isPasswordValid) {
      res.status(401).json({
        message: `Failure to delete user, password does not match`,
      });
    } else {
      await removeUser(subject);
      res
        .status(200)
        .json({ message: 'Successfully removed user from database' });
    }
  } catch (error) {
    res.status(500).json({
      message: `Failure to delete user, error: ${error.message}`,
    });
  }
};

const authGoogle = async (req, res) => {
  try {
    const { user } = req._passport.session;
    const token = await generateToken(user);
    res.status(200).redirect(`${GOOGLE_FRONTEND_REDIRCT}${token}`);
  } catch (error) {
    res.status(401).json({
      message: `Error authenticating via google ${error.message}`,
    });
  }
};

const completeGoogleAuth = async (req, res) => {
  try {
    const { token } = req.params;
    const decodedToken = jwt.decode(token);
    const { subject } = decodedToken;
    const foundUser = await findUserBy({ id: subject });
    res.status(200).json({
      message: `Welcome. You're logged in!`,
      user: foundUser,
      token,
    });
  } catch (error) {
    res.status(401).json({ message: `Failed to complete authorization` });
  }
};

module.exports = {
  registerUser,
  loginUser,
  editUser,
  deleteUser,
  authGoogle,
  completeGoogleAuth,
};
