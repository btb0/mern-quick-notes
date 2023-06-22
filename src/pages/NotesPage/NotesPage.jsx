import { useState } from "react";
import { getUser } from '../../utilities/users-service';
import AddNoteForm from "../../components/AddNoteForm/AddNoteForm";

export default function NotesPage() {
  const [notes, setNotes] = useState({
    note: '',
    user: getUser()
  });

  return (
    <>
      <h2>No Notes Yet!</h2>
      <AddNoteForm setNotes={setNotes} />
    </>
  );
}