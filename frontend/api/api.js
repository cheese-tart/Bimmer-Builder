const API_URL = 'http://localhost:5000/api';

// User related
export async function createUser(name, email) {
    try {
        const res = await fetch(`${API_URL}/user`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                { 
                    name: name,
                    email: email,
                }
            ),
        });
        const data = await res.json();
        console.log(data);
        console.log(data._id);
        return data;
    } catch (error) {
        console.log(error);
    }
};

export async function getUserParts(userId) {
    try {
        const res = await fetch(`${API_URL}/user/${userId}/part`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                { 
                    userId: userId,
                }
            ),
        });
        const data = await res.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
    }
};

export async function addPartToUser(userId, partId) {
    try {
        const res = await fetch(`${API_URL}/user/${userId}/part`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                { 
                    userId: userId,
                    partId: partId,
                }
            ),
        });
        const data = await res.json();
        console.log(data);
        return data;
    } catch (error){
        console.log(error);
    }
};

export async function removePartFromUser(userId, partId) {
    try {
        const res = await fetch(`${API_URL}/user/${userId}/part/${partId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                { 
                    userId: userId,
                    partId: partId,
                }
            ),
        });
        const data = await res.json();
        console.log(data);
        return data;
    } catch (error){
        console.log(error);
    }
};

// Parts related
export async function getCompatibleParts(model, gen) {
    try {
        const res = await fetch(`${API_URL}/part?model=${model}&gen=${gen}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                { 
                    model: model,
                    gen: gen,
                }
            ),
        });
        const data = await res.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
    }
};
