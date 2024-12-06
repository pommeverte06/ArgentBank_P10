import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUserProfile } from "../services/api";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "./styles/profile.css";

const Profile = () => {
  const token = useSelector((state) => state.user.token);
  const [userProfile, setUserProfile] = useState(null);
  const [error, setError] = useState(null);
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
        console.error("Failled fetch the profile of user:", err);
        setError("Unable to load profile. Please try again.");
      }
    };

    fetchUserProfile();
  }, [token, navigate]);

  if (!userProfile && !error) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Header />
      <main className="main bg-dark">
        <div className="profile">
          {error ? (
            <p className="profile-error">{error}</p>
          ) : (
            <>
              <h1>Welcome back, {userProfile.firstName} {userProfile.lastName}!</h1>
              <div className="profile-details">
                <p>Email: {userProfile.email}</p>
                <p>Username: {userProfile.userName}</p>
              </div>
            </>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Profile;
