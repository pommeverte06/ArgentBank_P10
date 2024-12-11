import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUserProfile } from "../services/api";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Account from "../components/Accounts/Account";
import EditUserName from "../components/EditUserName/EditUserName";
import "./styles/profile.css";

const Profile = () => {
  const token = useSelector((state) => state.user.token);
  const [userProfile, setUserProfile] = useState(null);
  const [error, setError] = useState(null);
  const [editing, setEditing] = useState(false); // pour basculer entre affichage et le formulaire
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login");
      return;
    }

    const fetchUserProfile = async () => {
      try {
        const profileData = await getUserProfile(token);
        setUserProfile(profileData);
      } catch (err) {
        console.error("Failed to fetch user profile:", err);
        setError("Unable to load profile. Please try again.");
      }
    };

    fetchUserProfile();
  }, [token, navigate]);

  if (!userProfile && !error) {
    return <p>Loading...</p>;
  }

  const handleEditToggle = () => {
    setEditing(!editing); // bascule entre affichage et édition
  };

  return (
    <>
      <Header />
      <main>
        {!editing ? (
          <div className="welcome">
            <h1>
              Welcome back
              <br />
              {userProfile?.firstName || "First Name"}{" "}
              {userProfile?.lastName || "Last Name"}!
            </h1>
            <button className="edit-button" onClick={handleEditToggle}>
              Edit Name
            </button>
          </div>
        ) : (
          <EditUserName userProfile={userProfile} onCancel={handleEditToggle} />
        )}
        <div className="accounts">
          <Account
            title="Argent Bank Checking (x8349)"
            amount="$2,082.79"
            description="Available Balance"
          />
          <Account
            title="Argent Bank Savings (x6712)"
            amount="$10,928.42"
            description="Available Balance"
          />
          <Account
            title="Argent Bank Credit Card (x8349)"
            amount="$184.30"
            description="Current Balance"
          />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Profile;
