import './Note.css';

export default function Note({ note }) {
  const date = new Date(note.createdAt)
  
  return (
    <div className="note-container">
      <p className="note-date">{date.toLocaleString()} &nbsp;- </p>
      <p className="note-text">&nbsp;&nbsp;{note.text}</p>
    </div>
  );
}