import React from "react";
import style from "./Layout.css";
const Layout = props => {
  return (
    <React.Fragment>
      <div>Toolbar, Sidedrawer, Backdrop</div>
      <main className={style.content}> {props.children} </main>
    </React.Fragment>
  );
};

export default Layout;
