import React from "react";

import "../Components/createNote.css";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";

export const NoteView = (props) => {
  const deleteNote = () => {
    props.deleteItem(props.id);
  };
  const editNote = () => {
    props.editItem(props.id, props.title, props.content);
  };
  return (
    <>
      <div
        className="col-md-4 col-10 mx-auto
      "
      >
        <div className="note__view card">
          <h1 className=" text-capitalize ">{props.title}</h1>
          <div className="mt-2 w-100">
            <p>{props.content}</p>
          </div>
          <EditIcon
            className="border rounded-circle editIcon"
            onClick={editNote}
          />
          <DeleteOutlineIcon
            className="deleteIcon rounded-circle "
            onClick={deleteNote}
          />
        </div>
      </div>
    </>
  );
};
