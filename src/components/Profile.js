import React, { useEffect, useState } from "react";
import langdonAvatar from "../assets/langdon-avatar.png";

const Profile = () => {
  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };

    fetch("/mypost", requestOptions)
      .then((response) => response.json())
      .then((result) => setUserPosts(result.posts))
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <div className="profile__wrapper container">
      <div class="card horizontal" style={{ maxWidth: "600px" }}>
        <div class="card-image center" style={{ marginTop: "5%" }}>
          <img
            class="circle"
            style={{ maxWidth: "150px" }}
            src={langdonAvatar}
            alt=""
          />
        </div>
        <div class="card-stacked">
          <div class="card-content">
            <div
              className="profile__title"
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
              }}
            >
              <div
                className=""
                style={{
                  marginRight: "20px",
                }}
              >
                <h5>langdon</h5>
              </div>
              <button
                className="btn white black-text"
                style={{
                  marginRight: "20px",
                }}
              >
                Edit profile
              </button>
              <i class="material-icons">settings</i>
            </div>
            <div
              className="profile__status"
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h5>0 posts</h5>
              <h5>0 followers</h5>
              <h5>0 following</h5>
            </div>
            <div className="line3">
              <h5>Mr. Robert Langdon</h5>
            </div>
          </div>
        </div>
      </div>
      <div class="row profile__galleries center" style={{ maxWidth: "600px" }}>
        {userPosts.map((item, index) => {
          const { photoURL } = item;
          return (
            <div class=" col s4">
              <img src={photoURL} style={{ maxWidth: "150px" }} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Profile;
