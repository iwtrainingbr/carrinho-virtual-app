import {useState, useEffect} from "react";
import {Divider, LinearProgress, Card, CardActionArea, CardMedia, CardContent, Typography} from "@mui/material";
import {API_URL} from "../../config/Api";
import "./styles.css";

export default function Category() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(API_URL + '/categories.json')
      .then(response => response.json())
      .then(response => {
        let data = [];

        for (let id in response) {
          data.push(response[id]);
        }

        setTimeout(() => {
          setCategories(data);
        }, 2000);
      });
  }, [])

  const CardCategory = (props) => {
    return (
      <Card sx={{ marginTop: '20px' }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={props.photo}
            alt={props.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {props.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {props.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    )
  }

  return (
    <section class="page-category">
      <div class="title">- Categorias -</div>
      <Divider/>

      {categories.length === 0 && <LinearProgress/>}

      {categories.map(data => <CardCategory {...data}/>)}
    </section>
  )
}
