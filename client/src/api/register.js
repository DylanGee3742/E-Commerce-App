
export const registeruser = async (first_name, last_name, email, password, confirm_password) => {
    const res = await fetch('http://localhost:5000/register', {
        method: "POST",
        body: JSON.stringify({
            first_name: first_name,
            last_name: last_name,
            email: email,
            password: password,
            confirm_password: confirm_password
        }),
        headers: {
            'Content-Type': "application/json",

        },
    });
    
        return res;
};
