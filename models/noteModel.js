import { query } from "../database/db.js";

const getAllNotes = async () => {
  return query("SELECT * FROM notes");
};

const getNoteById = async (id) => {
  return query("SELECT * FROM notes WHERE id = ?", id);
};

const addNote = async (params) => {
  return query("INSERT INTO notes (title, note) VALUES (?, ?)", params);
};

const updateNote = async (id, params) => {
  return query("UPDATE notes SET title = ?, note = ? WHERE id = ?", [
      ...params,
      id,
  ]);
};

const deleteNote = async (id) => {
  return query("DELETE FROM notes WHERE id = ?", id);
};

export { getAllNotes, getNoteById, addNote, updateNote, deleteNote };
