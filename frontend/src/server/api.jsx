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
        console.log(response);
        if (response.ok) {
            return response.json();
        } else {
            throw new Error ("Erreur de connexion")
        }
    })
    .then((data) => {
        
        return data.body.token;
    })
    .catch((error) => {
        throw new Error (error.message)
    })
}

export async function userProfile(token) {
    return fetch ("http://localhost:3001/api/v1/user/profile", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
    .then((response) => {
        if(!response.ok) {
            throw new Error ("Erreur de récupération des données");
        }
        return response.json();
    })
    .catch((error) => {
        throw new Error (error.message)
    });
}

export async function editUserName(token, newUserName) {
    return fetch("http://localhost:3001/api/v1/user/profile", {
        method: "PUT",
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            userName: newUserName,
        }),
    })
    .then((response)=> {

        if(!response.ok) {

            throw new Error("La modification n'a pu être effectuée");

        }

        return response.json();
    })
    .then((data) => 
        data.body.userName
    )
    .catch((error) => {
        throw new Error(error.message)
    });
}
