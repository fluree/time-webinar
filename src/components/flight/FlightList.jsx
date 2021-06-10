import { Container, List, Typography } from "@material-ui/core";
import { useFlureeQuery } from '@fluree/react-wrapper';
import Flight from "./Flight";

export default function FlightList({ block }) {
    const data = useFlureeQuery({
        select: [
            "*",
            {
                departureAirport: [
                    "*"
                ],
                arrivalAirport: [
                    "*"
                ]
            }
        ],
        from: 'flight',
        block: block,
        opts: {
            compact: true
        }
    });
    const { result, loading } = data;

    if (loading) {
        return (<Typography variant='body1'>Loading airports</Typography>)
    } else if (result.length === 0) {
        return (<Typography variant='body1'>No airports in this block</Typography>)
    }

    return (
        <Container>
            <Typography variant='h5'>
                Flights:
            </Typography>
            <List>
                {result.map(flight => (
                    <Flight key={flight._id} flight={flight}></Flight>
                ))}
            </List>
        </Container>
    )
}