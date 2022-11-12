import { useState } from "react";
import { useNotesDispatchContext } from "../../context/NoteContext.jsx";
import { useParams, useNavigate } from "react-router-dom";
let currentID = 5;

const AddNote = () => {
  const [newNote, setNewNote] = useState("");

  const dispatch = useNotesDispatchContext();
  const params = useParams();
  const noteColor = "#" + params.noteColor;

  const navigate = useNavigate();

  const AddNewNote = () => {
    setNewNote("");
    if (newNote.length !== 0) {
      dispatch({
        type: "addNewNote",
        id: currentID++,
        notes: newNote,
        date: "september 9, 2022",
        status: false,
        color: noteColor,
      });
      navigate("/AddNote/facc15");
    }
  };

  return (
    <div className="editNoteContainer addNoteContainer">
      <div className="up">
        <div className="editeNoteTitle AddNoteTitle">New Note</div>
        <div className="saveBtn addBtn">
          <button onClick={AddNewNote}>Add</button>
        </div>
      </div>
      <textarea
        style={{ backgroundColor: noteColor }}
        className=""
        placeholder="Add New Note"
        value={newNote}
        onChange={(e) => setNewNote(e.target.value)}
      />
    </div>
  );
};

export default AddNote;
