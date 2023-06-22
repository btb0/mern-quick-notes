import { useState } from "react";
import { getUser } from '../../utilities/users-service';
import * as notesAPI from "../../utilities/notes-api";

export default function AddNoteForm({ setNotes }) {
  const [newNote, setNewNote] = useState({
    text: '',
    user: getUser()
  });

  const [error, setError] = useState('');

  function handleChange(evt) {
    setNewNote({ ...newNote, [evt.target.name]: evt.target.value });
    setError('');
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      const note = await notesAPI.create(newNote)
    } catch {
      setError('Failed to Add Note - Please Try Again');
    }
  }

  return (
    <div>
      <div className="form-container">
        <form onSubmit={handleSubmit} >
          <label>Note</label>
          <input type="text" name="text" value={newNote.value} onChange={handleChange} required/>
          <button type="submit">Add Note</button>
        </form>
      </div>
      <p className="error-message">{error}</p>
    </div>
  );
}