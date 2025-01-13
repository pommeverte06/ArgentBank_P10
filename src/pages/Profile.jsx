import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUserProfile } from "../services/api";
import { mockAccounts } from "../services/mockData"; 
import Account from "../components/Accounts/Account";
import EditUserName from "../components/EditUserName/EditUserName";
import Operation from "../components/Operations/Operations";
import "./styles/profile.css";

function Profile() {
  const token = useSelector((state) => state.user.token);
  const [userProfile, setUserProfile] = useState(null);
  const [error, setError] = useState(null);
  const [editing, setEditing] = useState(false); // bascule entre affichage et édition
  const [showOperations, setShowOperations] = useState(null); // gère les opérations PAR COMPTES
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
    setEditing(!editing);
  };

  const toggleOperations = (accountId) => {
    setShowOperations((prev) => (prev === accountId ? null : accountId));
  };

  return (
    <>
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
          {mockAccounts.map((account) => (
            <React.Fragment key={account.id}>
              <Account
                title={account.title}
                amount={account.amount}
                description={account.description}
                onToggle={() => toggleOperations(account.id)}
                showOperations={showOperations === account.id}
              />
              {showOperations === account.id && (
                <Operation accountId={account.id} />
              )}
            </React.Fragment>
          ))}
        </div>
      </main>
    </>
  );
}

export default Profile;
