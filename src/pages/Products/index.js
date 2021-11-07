import {useState, useEffect} from "react";
import {Divider, LinearProgress, Card, CardActionArea, CardMedia, CardContent, Typography, Stack, Chip} from "@mui/material";
import {API_URL} from "../../config/Api";
import "./styles.css";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(API_URL + '/products.json')
      .then(response => response.json())
      .then(response => {
        let data = [];

        for (let id in response) {
          data.push(response[id]);
        }

        setTimeout(() => {
          setProducts(data);
        }, 2000);
      });
  }, [])

  const CardProducts = (props) => {
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
              <Chip label={"R$"+props.price} color="success" />
              <p>{props.description}</p>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    )
  }

  return (
    <section class="page-products">
      <div class="title">- Produtos -</div>
      <Divider/>

      {products.length === 0 && <LinearProgress/>}

      {products.map(data => <CardProducts {...data}/>)}
    </section>
  )
}
