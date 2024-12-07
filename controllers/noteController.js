import {
  addNote,
  deleteNote,
  getAllNotes,
  getNoteById,
  updateNote,
} from "../models/noteModel.js";

export const handleGetAllNotes = async (req, res) => {
  try {
    const result = await getAllNotes();
    return res.status(200).json({
      status: true,
      message: "List of notes",
      data: result,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};

export const handleAddNotes = async (req, res) => {
  const { title, note } = req.body;
  try {
    const params = [title, note];
    await addNote(params);
    return res.status(200).json({
      status: true,
      message: "Note added successfully",
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};

export const handleGetNoteById = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await getNoteById(id);
    return res.status(200).json({
      status: true,
      message: "Note details",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};

export const handelDeleteNoteById = async (req, res) => {
  const id = req.params.id;
  try {
    await deleteNote(id);
    return res.status(200).json({
      status: true,
      message: "Note deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};

export const handleUpdateNote = async (req, res) => {
  const id = req.params.id;
  const { title, note } = req.body;
  try {
    const params = [title, note];
    await updateNote(id, params);
    return res.status(200).json({
      status: true,
      message: "Note updated successfully",
      data: [...params],
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};