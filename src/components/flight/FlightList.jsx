import { useFlureeQuery } from "@fluree/react-wrapper";
import { Container, List, makeStyles, Typography } from "@material-ui/core";
import Flight from "./Flight";

const useStyles = makeStyles({
    container: {
        marginTop: '1.5rem'
    }
})

export default function FlightList({ block }) {
    const classes = useStyles();
	const baseBlockQuery = {
		select: ["*",
        {   
            departureAirport: ["*"],
            arrivalAirport: ["*"]
        }
    ],
		from: "flight",
		block: block
	};

    const { result, loading } = useFlureeQuery(baseBlockQuery);

    if (loading) {
        return (<div>Still loading Flights</div>)
    } else if (result.length === 0) {
        return (<div>No Flights at this block</div>)
    }

    return (
        <Container className={classes.container}>
            <Typography variant='h5'>
                Flights:
            </Typography>

            <List>
                {result.map(flight => (
                    <Flight key={flight._id} flight={flight} />
                ))}
            </List>
        </Container>
    )
}