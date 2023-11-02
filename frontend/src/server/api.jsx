export async function login(email, password) {
    return fetch("http://localhost:3001/api/v1/user/login", {
        method: "POST",
        headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        },
        body: JSON.stringify ({
            email: email,
            password: password,
        }),
    })
    .then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error ("Erreur de connexion")
        }
    })
    .then((data) => {
        console.log(data);
        return data.token;
    })
    .catch ((error) => {
        throw new Error (error.message)
    })
}
