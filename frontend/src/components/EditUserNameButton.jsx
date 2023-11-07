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
        }).catch((error) => {
            throw new Error("La mise à jour du nom d'utilisateur n'a pas pu être effectuée")
        });
    };

    return (
        <div>
            {editForm ? (
                <section className="edit-container">
                    <h2>USERNAME EDITION</h2>
                    <form className="edit-form" onSubmit={callEditUserName}>
                        <div className="input-edit">
                        <label htmlFor="username">User name :</label>
                        <input type="text" id="username" value={newUserName} onChange={(e) => setNewUserName(e.target.value)} />
                        </div>
                        <div className="button-edit">
                            <button type="submit">Save edition</button>
                            <button onClick={closeForm}>Stop editing</button>
                        </div>
                    </form>
                </section>
            ) :
            (
                <button className="edit-button" onClick={displayForm}>Edit Name</button>
            )}
        </div>
    )

}