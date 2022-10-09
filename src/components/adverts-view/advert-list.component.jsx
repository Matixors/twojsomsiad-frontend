import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
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

export default function List(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
const { data } = props;

  return (
    <Card sx={{ width: "80%", height: "auto", marginTop:"1%", marginLeft: "10%", marginRight: "10%" }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {data.name[0]}
          </Avatar>
        }
        action={
            <span style={{marginRight: "3vw",  color:"grey", fontSize: "1.2em"}}>
            12.11 godzina 13:30
            </span>
        }
        title = {
            <>
            <span>
            {data.name} 
            </span>
            <div style={{marginLeft: "20vw", fontSize: "2em", textAlign: "center", color: "grey", fontWeight: "500", position: "absolute", marginTop: "50px"}}>{data.website}</div>
            </>
        }
        subheader="September 14, 2016"
      />
      <CardContent>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" sx = {{color: "red", cursor: "context-menu", fontSize: "1em", marginBottom: "2vh", marginLeft: "2vh"}}>
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
          Super opis w którym Adam Małysz opowiada jaki to on jest biedny i nie stać go żeby iść z psem na spacer. Śmiechu warte, jeszcze jakieś ogłoszenia pisze.
            <Button variant="outlined" sx={{float: "right", margin: "1%"}}>Zgłoś się</Button>
        </CardContent>
      </Collapse>
    </Card>
  );
}
