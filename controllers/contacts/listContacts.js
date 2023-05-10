const Contact = require("../../models/contact");
const { HttpError, ctrlWrap } = require("../../helpers");

const listContacts = async (req, res) => {
  const { _id: owner } = req.user;
  const { page = 1, limit = 20, favorite } = req.query;
  const skip = (page - 1) * limit;

  const reqParam = favorite === undefined ? { owner } : { owner, favorite };

  const result = await Contact.find(reqParam, "-createdAt -updatedAt", {
    skip,
    limit,
  });
  if (!result) {
    throw HttpError(404);
  }
  res.json(result);
};

module.exports = { listContacts: ctrlWrap(listContacts) };
