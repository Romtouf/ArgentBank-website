import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editUserName } from "../server/api";
import { editUser } from "../server/userSlice";
import "../style/components/editUserNameButton.css";

export default function EditUserNameButton() {
    const token = useSelector((state) => state.authentication.token);
    const user = useSelector((state) => state.user.userData);
    const dispatch = useDispatch();
    const [newUserName, setNewUserName] = useState("");
    const [editForm, setEditForm] = useState(false);
    const displayForm = () => {
        setEditForm(true);
        setNewUserName(user.userName);
    }
    const closeForm = () => {
        setEditForm(false);
    }
    const callEditUserName = (e) => {
        e.preventDefault();
        editUserName(token, newUserName)
        .then((changeUserName) => {
            dispatch(editUser(changeUserName));
            setEditForm(false);
        })
        .catch(() => {
            throw new Error("La mise à jour du nom d'utilisateur n'a pas pu être effectuée")
        });
    };

    return (
        <div>
            {editForm ? (
                <section className="edit-container">
                    <h2>Edit user info</h2>
                    <form className="edit-form" onSubmit={callEditUserName}>
                        <div className="input-edit">
                            <label htmlFor="username">User name:</label>
                            <input type="text" id="username" value={newUserName} onChange={(e) => setNewUserName(e.target.value)} />
                        </div>
                        <div className="input-edit">
                            <label htmlFor="firstname">First name:</label>
                            <input type="text" id="firstname" defaultValue={user.firstName} readOnly disabled />
                        </div>
                        <div className="input-edit">
                            <label htmlFor="lastname">Last name:</label>
                            <input type="text" id="lastname" defaultValue={user.lastName} readOnly disabled />
                        </div>
                        <div className="button-edit">
                            <button type="submit">Save</button>
                            <button onClick={closeForm}>Cancel</button>
                        </div>
                    </form>
                </section>
            ) :
            (
                <div>
                    <h1>Welcome back<br />{user.firstName}</h1>
                    <button className="edit-button" onClick={displayForm}>Edit Name</button>
                </div>
            )}
        </div>
    )
}