import { useRouter } from "next/router";
import Link from "next/link";
import React from "react";
import classes from "./Layout.module.css";

function Layout(props) {
  const router = useRouter();

  function handleNewMeetup() {
    router.push("/new-meetup");
  }
  return (
    <>
      <nav className={classes.navbar}>
        <div className={classes.home}>
          <Link href="/">Meetups</Link>
        </div>
        <div className={classes.options}>
          <Link href="/new-meetup">New Meetup</Link>
        </div>
      </nav>
      <div className={classes.container}>{props.children}</div>
    </>
  );
}

export default Layout;
