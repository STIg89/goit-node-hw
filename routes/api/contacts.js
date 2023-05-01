const express = require("express");
const controllers = require("../../controllers/contacts");
const schemas = require("../../schemas/contacts");
const { validateBody, isValidId } = require("../../middlewares");

const router = express.Router();

router.get("/", controllers.listContacts);

router.get("/:contactId", isValidId, controllers.getContactById);

router.post("/", validateBody(schemas.addSchema), controllers.addContact);

router.put(
  "/:contactId",
  isValidId,
  validateBody(schemas.updateSchema),
  controllers.updateContact
);

router.patch(
  "/:contactId/favorite",
  isValidId,
  validateBody(schemas.updateFavoriteSchema),
  controllers.updateStatusContact
);

router.delete("/:contactId", isValidId, controllers.removeContact);

module.exports = router;
