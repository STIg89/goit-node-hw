const express = require("express");
const controllers = require("../../controllers/contacts");
const schemas = require("../../schemas/contacts");
const { validateBody } = require("../../middlewares");

const router = express.Router();

router.get("/", controllers.listContacts);

router.get("/:contactId", controllers.getContactById);

router.delete("/:contactId", controllers.removeContact);

router.post("/", validateBody(schemas.addSchema), controllers.addContact);

router.put(
  "/:contactId",
  validateBody(schemas.addSchema),
  controllers.updateContact
);

module.exports = router;
