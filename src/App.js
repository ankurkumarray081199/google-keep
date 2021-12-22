import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import { Header } from "../src/Components/Header";
import { CreateNote } from "../src/Components/CreateNote";
import { NoteView } from "./Components/NoteView";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

function App() {
  const [addItem, setAddItem] = useState([]);
  const [isEditItem, setIsEditItem] = useState([]);
  const [toggleBtn, setToggleBtn] = useState(true);

  useEffect(() => {
    // Update the document title using the browser API
    document.title = `Google-Keep | Ankur`;
  }, []);

  const addNote = (note) => {
    const { title, content } = note;
    if (!content && !title) {
      alert("Each field must be filled");
    } else if (!title) {
      alert(" Title is required");
    } else if (!content) {
      alert("Note can't be empty ");
    } else if (toggleBtn === false) {
      console.log("in 1 loop");

      setAddItem(
        addItem.map((elem) => {
          const allData = {
            id: isEditItem.id,
            title: "isEditItem.title",
            content: "isEditItem".content,
          };
          if (elem.id === isEditItem.id) {
            return { ...elem, allData };
          }
          return elem;
        })
      );
      setIsEditItem([]);
      setToggleBtn(true);
    } else {
      console.log("in 2 loop");
      setAddItem((preData) => {
        const allData = {
          id: new Date().getTime().toString(),
          title: title,
          content: content,
        };

        return [...preData, allData];
      });
    }
  };
  const onDelete = (index) => {
    // console.log("deleted" + id);

    setAddItem((oldData) => {
      return oldData.filter((currData) => {
        return index !== currData.id;
      });
    });
  };
  const child = useRef();

  const onEdit = (index, title, content) => {
    child.current.foo();
    setIsEditItem(() => {
      return addItem.find((currData) => {
        return index === currData.id;
      });
    });
    setToggleBtn(false);
  };

  // Create the child instance with useRef hook

  // const handleOnClick = () => {
  //   if (child.current) {

  //   }
  // };

  return (
    <>
      <Header />
      <CreateNote
        ref={child}
        passNote={addNote}
        passEditData={isEditItem}
        toogleStatus={toggleBtn}
      />
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 col-lg-10 col-md-10 mx-auto">
            <div className="row ">
              {addItem.map((val) => {
                return (
                  <NoteView
                    key={val.id}
                    id={val.id}
                    title={val.title}
                    content={val.content}
                    deleteItem={onDelete}
                    editItem={onEdit}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
