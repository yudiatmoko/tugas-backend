import express from "express";
import {
    handelDeleteNoteById,
  handleAddNotes,
  handleGetAllNotes,
  handleGetNoteById,
  handleUpdateNote,
} from "../controllers/noteController.js";

const router = express.Router();

router.get("/", handleGetAllNotes);
router.post("/", handleAddNotes);
router.get("/(:id)", handleGetNoteById);
router.delete("/(:id)", handelDeleteNoteById);
router.put("/(:id)", handleUpdateNote);

export default router;
