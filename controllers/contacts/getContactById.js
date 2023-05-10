const Contact = require("../../models/contact");
const { HttpError, ctrlWrap } = require("../../helpers");

const getContactById = async (req, res) => {
  const { contactId } = req.params;
  const { _id: owner } = req.user;
  const result = await Contact.findOne({ _id: contactId, owner });
  if (!result) {
    throw HttpError(404);
  }
  res.json(result);
};

module.exports = { getContactById: ctrlWrap(getContactById) };
