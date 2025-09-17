const API_URL = 'http://localhost:5000/api';

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
}
