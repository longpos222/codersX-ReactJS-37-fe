import React from "react";
import samplePicture from "../assets/sample-picture.jpg";

const Post = ({ _id, title, body, photoURL, postedBy, ...props }) => {
  return (
    <>
      <div
        class="card"
        style={{
          maxWidth: "550px",
          paddingTop: "5px",
          paddingLeft: "0px",
          paddingRight: "0px",
        }}
      >
        <h5
          className="left"
          style={{
            marginLeft: "10px",
          }}
        >
          {postedBy.name}
        </h5>
        <div
          class="card-image"
          style={{
            maxWidth: "100%",
          }}
        >
          <img
            src={photoURL}
            style={{
              borderTop: "solid 1px grey",
              borderBottom: "solid 1px grey",
            }}
            alt=""
          />
        </div>
        <div
          class="card__content"
          style={{
            minHeigh: "100px",
            textAlign: "left",
            marginTop: "15px",
            marginLeft: "15px",
          }}
        >
          <i class="material-icons red-text">favorite</i>
          <i class="material-icons">favorite_border</i>
          <i class="material-icons">thumb_down</i>
          <i class="material-icons red-text">thumb_up</i>
          <p>
            <b>{postedBy.name} </b> {title}
          </p>
          <p>
            <b>someone </b> yep
          </p>
          <form>
            <div class="input-field">
              <textarea id="comment" class="materialize-textarea"></textarea>
              <label for="comment">add your comment here ...</label>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Post;
