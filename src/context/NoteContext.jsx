import { createContext, useContext, useReducer, useEffect } from "react";
import NoteReducer from "../reducers/NoteReducer";
import InitialNotes from "../state/InitialNotes";

const getStoredNotes = (initialNotes = InitialNotes) => {
  return JSON.parse(localStorage.getItem("storedNotes")) || initialNotes;
};

const NoteContext = createContext(null);
const NoteDispatchContext = createContext(null);

const NotesProvider = ({ children }) => {
  const [NOTES, dispatch] = useReducer(NoteReducer, getStoredNotes());

  useEffect(() => {
    localStorage.setItem("storedNotes", JSON.stringify(NOTES));
  }, [NOTES]);

  return (
    <NoteContext.Provider value={NOTES}>
      <NoteDispatchContext.Provider value={dispatch}>
        {children}
      </NoteDispatchContext.Provider>
    </NoteContext.Provider>
  );
};

export const useNotesContext = () => {
  return useContext(NoteContext);
};
export const useNotesDispatchContext = () => {
  return useContext(NoteDispatchContext);
};

export default NotesProvider;
