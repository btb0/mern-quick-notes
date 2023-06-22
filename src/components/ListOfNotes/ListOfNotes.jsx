import Note from "../Note/Note";

export default function ListOfNotes({ notes }) {
  const note = notes.map(n => 
    <Note note={n} key={n._id} />
  );

  return (
    <>
      {note}
    </>
  );
}