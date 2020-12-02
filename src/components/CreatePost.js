import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import M from "materialize-css";

const CreatePost = () => {
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [file, setFile] = useState("");
  const [photoURL, setPhotoURL] = useState(null);

  const handleCreatePost = () => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "codersx-instagram-clone");
    data.append("cloud_name", "longpos");
    fetch("https://api.cloudinary.com/v1_1/longpos/image/upload", {
      method: "POST",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        setPhotoURL(data.url);
      });
  };
  useEffect(() => {
    if (photoURL !== null) {
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ title, body, photoURL }),
      };
      console.log("requestOptions.body", requestOptions.body);
      fetch("/createpost", requestOptions)
        .then((res) => res.json())
        .then((result) => {
          console.log("result:=>", result);

          if (result.error) {
            M.toast({
              html: result.error,
              classes: "red yellow-text",
            });
          } else {
            M.toast({
              html: "Upload successed!",
              classes: "green lighten-1 white-text",
            });
            setPhotoURL(null);
            history.push("/");
          }
        })
        .catch((err) => console.log("err", err));
    }
  }, [photoURL]);

  return (
    <div class="card ">
      <image src={photoURL} alt="" />

      <h4>Create new post</h4>
      <div class="input-field">
        <input
          id="title"
          type="text"
          class="validate"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label for="title">title</label>
      </div>
      <div class="input-field">
        <input
          id="body"
          type="text"
          class="validate"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <label for="body">body</label>
      </div>

      <div class="file-field input-field">
        <div class="btn btn-small">
          <span>File</span>
          <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        </div>
        <div class="file-path-wrapper">
          <input class="file-path validate" type="text" />
        </div>
      </div>
      <button class="white-text blue lighten-2 btn" onClick={handleCreatePost}>
        Submit
      </button>
    </div>
  );
};

export default CreatePost;
