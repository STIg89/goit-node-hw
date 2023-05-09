const Contact = require("../models/contact");
const { HttpError, ctrlWrap } = require("../helpers");

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

const getContactById = async (req, res) => {
  const { contactId } = req.params;
  const { _id: owner } = req.user;
  const result = await Contact.findOne({ _id: contactId, owner });
  if (!result) {
    throw HttpError(404);
  }
  res.json(result);
};

const addContact = async (req, res) => {
  const { _id: owner } = req.user;
  const result = await Contact.create({ ...req.body, owner });
  res.status(201).json(result);
};

const updateContact = async (req, res) => {
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

const removeContact = async (req, res) => {
  const { contactId } = req.params;
  const { _id: owner } = req.user;
  const result = await Contact.findOneAndDelete({ _id: contactId, owner });
  if (!result) {
    throw HttpError(404);
  }
  res.json({ message: "Delate success" });
};

module.exports = {
  listContacts: ctrlWrap(listContacts),
  addContact: ctrlWrap(addContact),
  getContactById: ctrlWrap(getContactById),
  updateContact: ctrlWrap(updateContact),
  updateFavorite: ctrlWrap(updateFavorite),
  removeContact: ctrlWrap(removeContact),
};
