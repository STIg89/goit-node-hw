const { addContact } = require("./addContact");
const { getContactById } = require("./getContactById");
const { listContacts } = require("./listContacts");
const { removeContact } = require("./removeContact");
const { updateContact } = require("./updateContact");
const { updateFavorite } = require("./updateFavorite");

module.exports = {
  listContacts,
  addContact,
  getContactById,
  updateContact,
  updateFavorite,
  removeContact,
};
