import { useFlureeQuery } from "@fluree/react-wrapper";
import { Container, List, makeStyles, Typography } from "@material-ui/core";
import Flight from "./Flight";

const useStyles = makeStyles({
    container: {
        marginTop: '1.5rem',
        marginLeft: '0',
        marginRight: '0'
    }
})

/**
 * This component is responsible for the UI of the list of flights in the block specified
 * The parent component will pass in a new block as the slider is updated
 * @param {block}  
 * @returns 
 */
export default function FlightList({ block }) {
    const classes = useStyles();

    /**
     * This query will be updated by the block number passed in by the parent component
     */
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

    /**
     * This is the hook from the Fluree React Wrapper which will be stored in the webworker
     * and update the UI, if that data changes.
     */
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