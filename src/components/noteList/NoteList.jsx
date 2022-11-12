import "./NoteList.scss";
import {
  useNotesContext,
  useNotesDispatchContext,
} from "../../context/NoteContext.jsx";
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit2 } from "react-icons/fi";
import { Link } from "react-router-dom";

const EmptyPage = () => {
  return (
    <div className="emptyData">
      <h3>NO NOTES ARE AVAILABLE AT THE MOMENT 📚</h3>
      <p>
        you can add notes by clicking on any of the colored buttons in the
        sidebar..
      </p>
    </div>
  );
};

const NoteList = ({ query }) => {
  const NOTES = useNotesContext();
  const reversedNotes = [...NOTES].reverse();

  const dispatch = useNotesDispatchContext();
  const HandleDeleteNote = (noteID) => {
    dispatch({
      type: "deleteNote",
      id: noteID,
    });
  };

  return (
    <div className="noteList">
      <div className="noteTitle">Notes</div>
      {NOTES.length ? (
        <ul className="notes">
          {reversedNotes
            .filter((note) => note.notes.toLowerCase().includes(query))
            .map((note) => {
              return (
                <li key={note.id} style={{ backgroundColor: note.color }}>
                  <div className="noteText">{note.notes}</div>
                  <div className="utils">
                    <div className="date">{note.date}</div>
                    <div className="editDeleteContainer">
                      <Link
                        to={`/EditNote/${note.id}`}
                        className="edit_container"
                      >
                        <FiEdit2 className="editIcon" />
                      </Link>
                      <div
                        className="deleteContainer"
                        onClick={() => HandleDeleteNote(note.id)}
                      >
                        <AiOutlineDelete className="deleteIcon" />
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
        </ul>
      ) : (
        <EmptyPage />
      )}
    </div>
  );
};

export default NoteList;
