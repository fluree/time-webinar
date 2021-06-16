import { Button, Card, CardActions, CardContent, Collapse, Grid, ListItem, makeStyles, Typography } from "@material-ui/core";
import { useState } from "react";
import Airport from "../airport/Airport";
import History from "../History";

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        paddingLeft: '0'
    },
    card: {
        minWidth: '70vw',
        maxWidth: '90vw'
    },
    history: {
        width: 'auto',
        h
    },
    airportGrid: {
        paddingTop: '10px',
        paddingLeft: '10px'
    },
    button: {
        paddingTop: '10px',
        paddingLeft: '0px'
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

    return (
        <ListItem className={classes.root}>
            <Card className={classes.card}>
                <CardActions>
                    <Grid container >

                        <Grid item xs={2} className={classes.airportGrid}>
                            <Typography variant="body2">
                                From:
                            </Typography>
                            <Airport airport={flight.departureAirport}></Airport>
                        </Grid>

                        <Grid item xs={3} className={classes.airportGrid}> 
                            <Typography variant="body2">
                                To:
                            </Typography>
                            <Airport airport={flight.arrivalAirport}></Airport>

                        </Grid>

                        <Grid item xs={4}>
                            <Typography variant='h6'>
                                {flight.status}
                            </Typography>
                            <Typography variant='h6'>
                                {new Intl.DateTimeFormat("en-US", {
                                    dateStyle: 'short',
                                    timeStyle: 'medium'
                                }).format(flightDateTime)}
                            </Typography>
                        </Grid>

                        <Grid item xs={2}>
                            <Typography variant='h6'>
                                {new Intl.NumberFormat("en-US", {
                                    style: "currency",
                                    currency: "USD"
                                }).format(flight.price)}
                            </Typography>
                            <Button 
                                size="medium" 
                                color="primary" 
                                onClick={handleShowHistory}
                                className={classes.button}>
                                {open ? "Hide History" : "Show History"}
                            </Button>
                        </Grid>

                    </Grid>
                </CardActions>

                <Collapse in={open} timeout="auto" unmountOnExit>
                    <CardContent className={classes.history}>
                        <History flight={flight} />
                    </CardContent>
                </Collapse>

            </Card>
        </ListItem>
    )
}