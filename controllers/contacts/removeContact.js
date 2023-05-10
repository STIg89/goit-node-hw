const Contact = require("../../models/contact");
const { HttpError, ctrlWrap } = require("../../helpers");

const removeContact = async (req, res) => {
  const { contactId } = req.params;
  const { _id: owner } = req.user;
  const result = await Contact.findOneAndDelete({ _id: contactId, owner });
  if (!result) {
    throw HttpError(404);
  }
  res.json({ message: "Delate success" });
};

module.exports = { removeContact: ctrlWrap(removeContact) };
