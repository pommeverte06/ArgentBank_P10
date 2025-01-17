import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUserProfile } from "../../services/api";
import { updateUser } from "../../redux/userSlice";
import "./editusername.css";

function EditUserName({ onCancel }) {
  const dispatch = useDispatch();
  const { userData, token } = useSelector((state) => state.user);
  const [userName, setUserName] = useState(userData?.userName || "");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSave = async () => {
    if (!userName.trim()) {
      setError("Username cannot be empty.");
      setSuccess(false);
      return;
    }

    try {
      const updatedUser = await updateUserProfile(token, { userName });
      dispatch(updateUser(updatedUser)); // mise à jour du store Redux
      setSuccess(true);
      setError(null);
      if (onCancel) onCancel(); // Ferme la fenêtre d'édition si nécessaire
    } catch (err) {
      console.error("Failed to update username:", err);
      setError("Failed to update username. Please try again.");
      setSuccess(false);
    }
  };

  return (
    <div className="edit-user-name">
      <h2>Edit User Info</h2>
      <div className="form-group">
        <label htmlFor="userName">User name:</label>
        <input
          type="text"
          id="userName"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="firstName">First name:</label>
        <input
          type="text"
          id="firstName"
          value={userData?.firstName || ""}
          disabled
        />
      </div>
      <div className="form-group">
        <label htmlFor="lastName">Last name:</label>
        <input
          type="text"
          id="lastName"
          value={userData?.lastName || ""}
          disabled
        />
      </div>
      {error && <p className="error-message">{error}</p>}
      {success && (
        <p className="success-message">Username updated successfully!</p>
      )}
      <div className="button-group">
        <button className="save-button" onClick={handleSave}>
          Save
        </button>
        <button className="cancel-button" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </div>
  );
}

export default EditUserName;
