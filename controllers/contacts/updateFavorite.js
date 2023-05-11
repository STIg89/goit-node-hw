const Contact = require("../../models/contact");
const { HttpError, ctrlWrap } = require("../../helpers");

const updateFavorite = async (req, res) => {
  const { contactId } = req.params;
  const { _id: owner } = req.user;
  const result = await Contact.findOneAndUpdate(
    { _id: contactId, owner },
    req.body,
    {
      new: true,
    }
  );
  if (!result) {
    throw HttpError(404);
  }
  res.json(result);
};

module.exports = { updateFavorite: ctrlWrap(updateFavorite) };
