import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { getUser, removeUserSession } from '../utils/common';

export default function Dashboard() {

  const [user, setUser] = useState();
  let navigae = useNavigate();


  useEffect(() => {
    const loggedInUser = getUser();
    setUser(loggedInUser);
    if (!loggedInUser) {
      logout();
    }
  }, []);

  const logout = () => {
    removeUserSession();
    navigae('/');
  };


  return (
    <div>
      <h4>Welcome : {user?.userName}</h4>
      <h4>Role : {user?.role}</h4>
      <h5>Email : {user?.email}</h5>
      <br/><br/>
      <button type="submit" className="btn btn-dark btn-block col-12" onClick={logout}>Sign Out</button>

    </div>

  );
}