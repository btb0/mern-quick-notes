import { useState, useEffect } from "react";
import * as notesAPI from '../../utilities/notes-api';
import AddNoteForm from "../../components/AddNoteForm/AddNoteForm";
import ListOfNotes from "../../components/ListOfNotes/ListOfNotes";

export default function NotesPage() {
  const [notes, setNotes] = useState([]);
  console.log(notes)
  useEffect(function() {
    async function getNotes() {
      const notes = await notesAPI.index();
      setNotes(notes);
    }
    getNotes()
  }, []);

  return (
    <>
      <AddNoteForm notes={notes} setNotes={setNotes} />
      {
        notes.length !== 0 ? 
        <div>
          <h2>My Notes</h2>
          <ListOfNotes notes={notes} />
        </div>
        :
        <h2>No Notes Yet!</h2>
      }
    </>
  );
}