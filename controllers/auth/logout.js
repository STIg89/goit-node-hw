const User = require("../../models/user");
const { ctrlWrap } = require("../../helpers");

const logout = async (req, res) => {
  const { _id } = req.user;
  await User.findByIdAndUpdate(_id, { token: "" });

  res.json({ message: "Logout success" });
};

module.exports = { logout: ctrlWrap(logout) };
