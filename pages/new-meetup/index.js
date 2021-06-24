import React from "react";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetup() {
  const addMeetupHandler = (values) => {
    console.log(values);
  };

  return (
    <div>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </div>
  );
}

export default NewMeetup;
