import React from "react";
import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";

function MeetupList({ meetups }) {
  return (
    <ul className={classes.list}>
      {meetups.map((meetup, index) => (
        <MeetupItem key={index} {...meetup} />
      ))}
    </ul>
  );
}

export default MeetupList;
