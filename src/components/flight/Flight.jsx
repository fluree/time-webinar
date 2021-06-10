import { Card, CardContent, Grid, ListItem, makeStyles, Typography } from "@material-ui/core";
import Airport from "../airport/Airport";

const useStyles = makeStyles({
    root: {
        flexGrow: 1
    },
    card: {
        minWidth: '70vw'
    }
})

export default function Flight({ flight }) {
    const classes = useStyles();
    const { dateTime } = flight;
    const flightDateTime = new Date(dateTime * 1000);
    return (
        <ListItem className={classes.root}>
            <Card className={classes.card}>
                <CardContent>
                    <Grid container spacing={3}>
                        <Grid item xs={3}>
                            <Typography variant='body1'>
                                {new Intl.DateTimeFormat("en-US", {
                                    dateStyle: 'short',
                                    timeStyle: 'medium'
                                }).format(flightDateTime)}
                            </Typography>
                            <Airport airport={flight.departureAirport}></Airport>
                            
                        </Grid>

                        <Grid item xs={3}>
                            <Typography>
                                {new Intl.NumberFormat("en-US", {
                                    style: "currency",
                                    currency: "USD"
                                }).format(flight.price)}
                            </Typography>
                            <Airport airport={flight.arrivalAirport}></Airport>
                        </Grid>

                        <Grid item xs={6}>
                            <Typography>
                                {flight.status}
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </ListItem>
    )
}