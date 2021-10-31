import {useState, useEffect} from "react";
import {Divider, LinearProgress, Card, CardActionArea, CardMedia, CardContent, Typography} from "@mui/material";
import {API_URL} from "../../config/Api";
import "./styles.css";

export default function Category(props) {
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
        }, 1000);
      });
  }, [])

  const CardCategory = (data) => {
    return (
      <Card sx={{ marginTop: '20px' }}>
        <CardActionArea onClick={() => props.history.push('/produtos/'+data.name)}>
          <CardMedia
            component="img"
            height="140"
            image={data.photo}
            alt={data.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {data.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {data.description}
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
