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
        return data.body.token;
    })
    .catch(() => {
        throw new Error ("Erreur lors de la récupération des données")
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
            throw new Error ("Erreur lors de la récupération des données");
        }
        return response.json();
    })
    .catch(() => {
        throw new Error ("Erreur lors de la récupération du profil")
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
            throw new Error("La modification n'a pas pu être effectuée");
        }
        return response.json();
    })
    .then((data) => 
        data.body.userName
    )
    .catch(() => {
        throw new Error("Une erreur a été rencontrée")
    });
}
