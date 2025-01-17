import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUserProfile } from "../services/api";
import { reloadUser } from "../redux/userSlice";
import { mockAccounts } from "../services/mockData";
import Account from "../components/Accounts/Account";
import EditUserName from "../components/EditUserName/EditUserName";
import Operation from "../components/Operations/Operations";
import WelcomeUser from "../components/WelcomeUser/WelcomeUser"; 
import "./styles/profile.css";

function Profile() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token);
  const [showOperations, setShowOperations] = useState(null); // gère les opérations PAR COMPTES
  const [editing, setEditing] = useState(false); // bascule entre affichage et édition
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login");
      return;
    }

    const fetchUserProfile = async () => {
      try {
        const profileData = await getUserProfile(token);
        dispatch(reloadUser(profileData)); // mets à jour redux
      } catch (err) {
        console.error("Failed to fetch user profile:", err);
      }
    };

    fetchUserProfile();
  }, [token, navigate, dispatch]);

  const toggleOperations = (accountId) => {
    setShowOperations((prev) => (prev === accountId ? null : accountId));
  };

  return (
    <main>
      <WelcomeUser onEditToggle={() => setEditing(!editing)} />
      {editing && <EditUserName onCancel={() => setEditing(false)} />}

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
  );
}

export default Profile;
