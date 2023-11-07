import React from 'react';
import "../style/pages/user.css";
import { useDispatch, useSelector } from "react-redux";
import userSlice, { setUser } from '../server/userSlice';
import { userProfile } from '../server/api';
import { useEffect } from 'react';

const User = () => {

  const dispatch = useDispatch();
  const token = useSelector ((state) => state.authentication.token);
  const firstName = useSelector ((state) => state.user.userData.firstName);


  useEffect(() => {
    const callUserProfile = async () => {
      userProfile(token)
      .then((data) => {
        dispatch(setUser(data));
      })
      .catch((error) => {
        throw new Error (error.message)
      });
    };
    callUserProfile();
  }, [dispatch, token]);

    return (
        <main className="main bg-dark">
      <div className="header">
        <h1>Welcome back<br />{firstName}</h1>

        <button className="edit-button">Edit Name</button>
      </div>
      <h2 className="sr-only">Accounts</h2>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Checking (x8349)</h3>
          <p className="account-amount">$2,082.79</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Savings (x6712)</h3>
          <p className="account-amount">$10,928.42</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
          <p className="account-amount">$184.30</p>
          <p className="account-amount-description">Current Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
    </main>
    );
};

export default User;