import React from "react";
import { useEffect, useState } from "react";
import Button from '@mui/material/Button';

export default function AcceptUser({id}) {
const [token, setToken] = useState(localStorage.getItem("token"));

    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
    };
    useEffect(() => {
        fetch(`https://twojsomsiad-backend.onrender.com/adverts/${id}/applications`, options)
            .then(response => response.json())
            .then(response => {
                console.log(response)
                setData(response);
            });
        // .catch(err => console.error(err));

    }, []);

    return (
        <Button variant="outlined" sx={{ float: "right", margin: "1%", color: 'green', border: 'solid green', '&:hover': { border: 'solid green' }, }}>Akceptuję</Button>
    )
}