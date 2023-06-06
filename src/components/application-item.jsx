import React, { useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { lightBlue, red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function ApplicationItem(props) {
    const [expanded, setExpanded] = React.useState(false);
    const [user, setUser] = React.useState([]);
    const [advert, setAdvert] = React.useState([]);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    const { data, svg, token, advertNum } = props;
    const handleVolounteer = () => {
        if (!(token != "")) {
            window.location = '/login/';
        }

        fetch(`http://localhost:3000/advert/${advertNum}/application/${data.ID}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        }).then(res => {
            if (res.status == 200) {
                // Todo inform about success
                window.location = '/dashboard';
            }
            else {
                // Todo inform about success
            }
        })
    }
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
    };

    React.useEffect(() => {
        fetch(import.meta.env.VITE_BACKEND_URL + '/user/', options)
            .then(response => response.json())
            .then(response => setUser(response))
            .catch(err => console.error(err));
    }, []);


    return (
        <div>
            <Card sx={{ width: "100%", height: "auto", marginBottom: "1%", }}>
                <CardContent>
                    Uzytkownik {user.name} {user.surname} zgłosił się na wolontariat
                    <Button variant="outlined" sx={{ float: "right", margin: "1%" }} onClick={handleVolounteer}>Akceptuj</Button>
                </CardContent>
            </Card>
        </div>
    );
}
