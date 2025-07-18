const { Router } = require("express");
const controller = require("../controllers/subsidiary/subsidiary.controllers");

const router = Router();

router.get("/", controller.getAllSubsidiary);
router.get("/:id", controller.getSubsidiaryById);
router.post("/", controller.createSubsidiary);
router.put("/:id", controller.updateSubsidiary);
router.delete("/:id", controller.deleteSubsidiary);

module.exports = router;