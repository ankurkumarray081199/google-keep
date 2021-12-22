import React, { useState } from "react";
import "../Components/createNote.css";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";

export const CreateNote = React.forwardRef((props, ref) => {
  const [toggleBtn, setToggleBtn] = useState(true);
  // console.log("CreateNotePage message" + props.passEditData);

  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;

    setNote((oldData) => {
      return { ...oldData, [name]: value };
    });
  };

  const addEvent = () => {
    props.passNote(note);

    setNote(() => {
      return {
        title: "",
        content: "",
      };
    });
  };
  const editEvent = () => {
    props.passNote(note);

    setNote(() => {
      return {
        title: "",
        content: "",
      };
    });
    setToggleBtn(true);
  };

  React.useImperativeHandle(ref, () => ({
    foo() {
      const { title, content } = props.passEditData;
      setNote(() => {
        return {
          title: title,
          content: content,
        };
      });
      setToggleBtn(props.toggleStatus);
    },
  }));

  return (
    <>
      <div className="create__note">
        <form>
          <input
            className=" text-capitalize "
            type="text"
            name="title"
            value={note.title}
            onChange={InputEvent}
            placeholder="Title"
          />
          <textarea
            rows=""
            column=""
            name="content"
            value={note.content}
            onChange={InputEvent}
            placeholder="Write a note..."
          />
          {toggleBtn ? (
            <AddIcon className="add__icon" onClick={addEvent} />
          ) : (
            <EditIcon
              className="add__icon  border rounded-circle"
              onClick={editEvent}
            />
          )}
        </form>
      </div>
    </>
  );
});
