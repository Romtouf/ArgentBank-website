import React from 'react';
import "../style/pages/user.css";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from '../server/userSlice';
import { userProfile } from '../server/api';
import { useEffect } from 'react';
import EditUserNameButton from '../components/EditUserNameButton';
import dataTransaction from '../data/transaction.json';
import Transactions from '../components/Transactions';

const User = () => {
  const dispatch = useDispatch();
  const token = useSelector ((state) => state.authentication.token);

  useEffect(() => {
    const callUserProfile = async () => {
      userProfile(token)
      .then((data) => {
        dispatch(setUser(data));
      })
      .catch(() => {
        throw new Error ("Erreur lors de la récupération du profil")
      });
    };
    callUserProfile();
  }, [dispatch, token]);

    return (
      <main className="main bg-dark">
        <div className="header">
          <EditUserNameButton />
        </div>
        <h2 className="sr-only">Accounts</h2>
        {dataTransaction.map(({ id, title, amount, description, view }) => (
            <Transactions key={id} title={title} amount={amount} description={description} view={view} />
        ))}
      </main>
    );
};

export default User;