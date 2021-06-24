import React, { useRef } from "react";
import classes from "./NewMeetupForm.module.css";

function NewMeetupForm(props) {
  const titleInputRef = useRef();
  const descriptionInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const titleValue = titleInputRef.current.value;
    const descriptionValue = descriptionInputRef.current.value;

    const values = {
      title: titleValue,
      description: descriptionValue,
    };

    props.onAddMeetup(values);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="title">Title</label>
        <input type="text" required id="title" ref={titleInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="description">Description</label>
        <input
          type="text"
          required
          id="description"
          ref={descriptionInputRef}
        />
      </div>
      <div className={classes.control}>
        <button type="submit">Enviar</button>
      </div>
    </form>
  );
}

export default NewMeetupForm;
