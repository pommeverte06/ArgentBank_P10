import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUserProfile } from "../services/api";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Account from "../components/Accounts/Account";
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
        console.error("Failed to fetch user profile:", err);
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
      <main>
        <div className="welcome">
          <h1>
            Welcome back
            <br /> {userProfile.firstName} {userProfile.lastName}!
          </h1>
          <Link to="/settings" className="edit-button">
            Edit Name
          </Link>
        </div>
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
