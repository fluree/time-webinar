import { Button, Card, CardActions, CardContent, Grid, ListItem, makeStyles, Typography } from "@material-ui/core";
import { useState } from "react";
import Airport from "../airport/Airport";
import History from "../History";

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
    const [open, setOpen] = useState(false);
    const { dateTime } = flight;
    const flightDateTime = new Date(dateTime * 1000);

    const handleShowHistory = () => {
        setOpen(!open);
    }
    const handleClose = () => {
        setOpen(false);
    }
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

                    <CardActions>
                        <Button size="small" color="primary" onClick={handleShowHistory}>
                            {open ? "Hide History" : "Show History"}
                        </Button>
                        {open ? <History flight={flight} /> : null}
                    </CardActions>
                </CardContent>
            </Card>
        </ListItem>
    )
}