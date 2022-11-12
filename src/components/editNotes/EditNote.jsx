import React from "react";
import "./EditNotes.scss";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  useNotesContext,
  useNotesDispatchContext,
} from "../../context/NoteContext.jsx";

const EditNote = () => {
  const [editedNotes, setEditedNotes] = useState({
    notes: "",
    color: "",
  });
  const NOTES = useNotesContext();
  const dispatch = useNotesDispatchContext();

  const params = useParams();
  const editedNoteID = Number(params.noteID);
  const navigate = useNavigate();

  useEffect(() => {
    const noteId = editedNoteID;
    const editedNotes = NOTES.find((note) => note.id === noteId);
    setEditedNotes(editedNotes);
  }, [editedNoteID, NOTES]);

  const HandleNotesChange = (e) => {
    setEditedNotes({ ...editedNotes, notes: e.target.value });
  };

  const HandleSaveEditeNote = () => {
    dispatch({
      type: "saveEditedNote",
      id: editedNoteID,
      notes: editedNotes.notes,
    });
    navigate("/AddNote/facc15");
  };

  return (
    <div className="editNoteContainer">
      <div className="up">
        <div className="editeNoteTitle">Note {editedNoteID + 1}</div>
        <div className="saveBtn">
          <button onClick={HandleSaveEditeNote}> save</button>
        </div>
      </div>
      <textarea
        className=""
        placeholder="Edit Note"
        value={editedNotes.notes}
        onChange={HandleNotesChange}
        style={{ backgroundColor: editedNotes.color, opacity: 0.7 }}
      />
    </div>
  );
};

export default EditNote;
