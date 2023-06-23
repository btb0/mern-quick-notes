import { useState } from "react";
import * as notesAPI from "../../utilities/notes-api";
import './AddNoteForm.css';

export default function AddNoteForm({ notes, setNotes }) {
  const [newNote, setNewNote] = useState('');

  const [error, setError] = useState('');

  function handleChange(evt) {
    setNewNote(evt.target.value);
    setError('');
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      const note = await notesAPI.create(newNote);
      setNotes([...notes, note]);
      setNewNote('');
    } catch {
      setError('Failed to Add Note - Please Try Again');
    }
  }

  return (
    <div>
      <div className="form-container">
        <form onSubmit={handleSubmit} >
          <label>Note</label>
          <input type="text" name="text" value={newNote} onChange={handleChange} required/>
          <button type="submit">Add Note</button>
        </form>
      </div>
      <p className="error-message">{error}</p>
    </div>
  );
}