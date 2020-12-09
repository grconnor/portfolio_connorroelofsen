import React from "react";
import { UndrawAddUser } from "react-undraw-illustrations";
import classes from './BackgroundVideo.module.css';

const ComingSoon = () => {
  return (
    <div className={classes.Container}>
      <video autoPlay="autoplay" loop="loop" muted className={classes.Video}>
        <source src="https://static.videezy.com/system/resources/previews/000/005/096/original/Silky_Blue_4K_Motion_Background_Loop.mp4" type="video/mp4" />
        Your browser does not support the video's file type.
      </video>

      <div className={classes.Content}>
        <div className={classes.SubContent}>
          <h1>Coming soon ...</h1>
          <p>A downloadable version of my cv will be here soon!</p>
          <button type="button" className="btn btn-outline-dark">
            View the source code.
          </button>
          <img src="../src/img/comingdisplay.jpg" alt="profile"></img>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
