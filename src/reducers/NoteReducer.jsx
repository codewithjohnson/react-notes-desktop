const NoteReducer = (NOTES, action) => {
  switch (action.type) {
    case "addNewNote": {
      return [
        ...NOTES,
        {
          id: action.id,
          date: action.date,
          notes: action.notes,
          status: action.status,
          color: action.color,
        },
      ];
    }
    case "saveEditedNote": {
      return [...NOTES].map((note) => {
        if (note.id === action.id && note.notes !== action.notes) {
          return { ...note, notes: action.notes };
        } else {
          return note;
        }
      });
    }
    case "deleteNote": {
      return [...NOTES].filter((note) => note.id !== action.id);
    }
  }
};

export default NoteReducer;
