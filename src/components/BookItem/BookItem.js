import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import "./BookItem.css";

export default function BookItem(props) {
console.log(props)
const [color,setColor]=React.useState(false)
const addFavoris=(e)=>{
 console.log(e.target.style)
  
}
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        title={props.book.title}
        className="change-color-text"
        subheader={props.book.auteur}
      />
      <CardMedia
        component="img"
        height="194"
        image={props.book.imgUrl}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          <p className="change-color-text">{props.book.categorie}</p>
          <h2 style={{ color: "#a92836" }}>{props.book.prix}</h2>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" className='changecolor'>
          <FavoriteIcon onClick={(e)=>addFavoris(e)} style={{color:'red'}} />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <button className="panier-button">
          <svg
            class="w-6 h-6"
            style={{ width: "30px" }}
            fill="none"
            stroke="white"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1"
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            ></path>
          </svg>
          <span>Ajouter au panier</span>
        </button>
      </CardActions>
    </Card>
  );
}

