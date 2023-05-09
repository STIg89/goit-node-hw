const express = require("express");
const controllers = require("../../controllers/contacts");
const schemas = require("../../schemas/contacts");
const { validateBody, isValidId, authenticate } = require("../../middlewares");

const router = express.Router();

router.get("/", authenticate, controllers.listContacts);

router.get("/:contactId", authenticate, isValidId, controllers.getContactById);

router.post(
  "/",
  authenticate,
  validateBody(schemas.addSchema),
  controllers.addContact
);

router.put(
  "/:contactId",
  authenticate,
  isValidId,
  validateBody(schemas.updateSchema),
  controllers.updateContact
);

router.patch(
  "/:contactId/favorite",
  authenticate,
  isValidId,
  validateBody(schemas.updateFavoriteSchema),
  controllers.updateFavorite
);

router.delete(
  "/:contactId",
  authenticate,
  isValidId,
  controllers.removeContact
);

module.exports = router;
