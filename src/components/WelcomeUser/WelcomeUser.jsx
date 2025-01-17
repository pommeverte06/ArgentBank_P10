import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUserProfile } from "../../services/api";
import { updateUser } from "../../redux/userSlice";
import "./welcomeuser.css";

function WelcomeUser() {
  const dispatch = useDispatch();
  const { userData, token } = useSelector((state) => state.user);
  const [isEditing, setIsEditing] = useState(false);
  const [newUserName, setNewUserName] = useState(userData?.userName || "");

  const handleSave = async () => {
    try {
      const updatedData = await updateUserProfile(token, {
        userName: newUserName,
      });
      dispatch(updateUser(updatedData)); // mise à jour du store Redux
      setIsEditing(false);
    } catch (error) {
      console.error("Failed to update username:", error);
    }
  };

  return (
    <div className="welcome">
      {isEditing ? (
        <div className="edit-user">
          <h1>Edit User Info</h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSave();
            }}
          >
            <div className="form-group">
              <label htmlFor="username">User name:</label>
              <input
                id="username"
                type="text"
                value={newUserName}
                onChange={(e) => setNewUserName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="firstName">First name:</label>
              <input
                id="firstName"
                type="text"
                value={userData?.firstName || ""}
                disabled
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last name:</label>
              <input
                id="lastName"
                type="text"
                value={userData?.lastName || ""}
                disabled
              />
            </div>
            <div className="buttons">
              <button type="submit" className="save-button">
                Save
              </button>
              <button
                type="button"
                className="cancel-button"
                onClick={() => setIsEditing(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="welcome-message">
          <h1>
            Welcome back
            <br />
            {userData?.firstName} {userData?.lastName}!
          </h1>
          <button className="edit-button" onClick={() => setIsEditing(true)}>
            Edit Name
          </button>
        </div>
      )}
    </div>
  );
}

export default WelcomeUser;
