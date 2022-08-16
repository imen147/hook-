
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ReactStars from "react-rating-stars-component";

export default function MovieCard({movie}) {

  return (
    <div>
    <Card sx={{ maxWidth: 400 ,gap:30, margin:10}}>
      <CardMedia
        component="img"
        height="400"
        width="400"
        image={movie.postUrl}
        alt=""
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
       {movie.title}
        </Typography>
      
        <ReactStars
    count={movie.rate}
    size={24}
    activeColor="#ffd700"
  />
        
      </CardContent>
      <CardActions>
        <Button size="small">   { movie.Desc1}
</Button>
       
      </CardActions>
    </Card>
    </div>
  );
}
