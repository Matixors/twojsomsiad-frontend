import React from 'react';
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

export default function Lista(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const { data, svg, token } = props;
  const handleVolounteer = () => {
    if (!(token != "")) {
      window.location = '/login/';
    }

    fetch(`http://localhost:3000/advert/${data.ID}/apply`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    }).then(res => {
      if (res.status == 200) {
        console.log("Zgłoszono się na wolontariat");
      }
      else {
        console.log("Nie udało się zgłosić na wolontariat");
      }
    })
  }

  data.date = data.date.replace('T', ' ');
  data.date = data.date.slice(0, 16);

  data.CreatedAt = data.CreatedAt.replace('T', ' ');
  data.CreatedAt = data.CreatedAt.slice(0, 16);

  return (
    <div>
      <Card sx={{ width: "80%", height: "auto", marginBottom: "1%", marginLeft: "10%", marginRight: "10%" }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: lightBlue[500] }} aria-label="recipe">
              <span dangerouslySetInnerHTML={{ __html: svg }}>
              </span>

            </Avatar>
          }
          action={
            <span style={{ marginRight: "3vw", color: "grey", fontSize: "1.2em" }}>
              {data.date
              }
            </span>
          }
          title={
            <>
              <span>
                {data.user.name}
              </span>
            </>
          }
          subheader={data.CreatedAt}
        />
        <CardContent>
          {data.title}
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites" sx={{ color: "red", cursor: "context-menu", fontSize: "1em", marginLeft: "2vh" }}>
            <FavoriteIcon />  200 punków pomocy
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            {data.description}
            <Button variant="outlined" sx={{ float: "right", margin: "1%" }} onClick={handleVolounteer}>Zgłoś się</Button>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
}
