const brypt = require("bcrypt");
const gravatar = require("gravatar");

const User = require("../../models/user");
const { HttpError, ctrlWrap } = require("../../helpers");

const register = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user) {
    throw HttpError(409);
  }

  const hashPassword = await brypt.hash(password, 10);
  const avatarURL = gravatar.url(email);
  console.log("avatarURL:", avatarURL);

  const newUser = await User.create({
    ...req.body,
    password: hashPassword,
    avatarURL,
  });

  res.status(201).json({
    user: { email: newUser.email, subscription: newUser.subscription },
  });
};

module.exports = { register: ctrlWrap(register) };
