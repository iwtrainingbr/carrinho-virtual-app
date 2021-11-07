import {useState, useEffect} from "react";
import {Divider, LinearProgress, Card, CardActionArea, CardContent, Typography} from "@mui/material";
import {API_URL} from "../../config/Api";
import "./styles.css";

export default function Vehicle() {
    const [vehicles, setVehicles] = useState([]);

    useEffect(() => {
        fetch(API_URL + '/vehicles.json')
            .then(response => response.json())
            .then(response => {
                let data = [];

                for (let id in response) {
                    data.push(response[id]);
                }

                setTimeout(() => {
                    setVehicles(data);
                }, 2000);
            });
    }, [])

    const CardVehicles = (props) => {
        return (
            <Card sx={{ marginTop: '20px' }}>
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {props.make}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {props.model}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        )
    }

    return (
        <section class="page-vehicle">
            <div class="title">- Veículos -</div>
            <Divider/>

            {vehicles.length === 0 && <LinearProgress/>}

            {vehicles.map(data => <CardVehicles {...data}/>)}
        </section>
    )
}
