import { useFlureeQuery } from '@fluree/react-wrapper';
import { Container, List, Typography } from '@material-ui/core';
import Airport from './Airport';

export default function AirportList({ block }) {
    const data = useFlureeQuery({
            select: [ "*" ],
            from: 'airport',
            block: block
    });
    const { result, loading } = data

    if (loading) {
        return (<Typography variant='body1'>Loading flights</Typography>)
    } else if (result.length === 0) {
        return (<Typography variant='body1'>No flights at this block</Typography>)
    }
    
    return (
        <Container >
            <Typography variant='h4'>
                Airports:
            </Typography>
            <List>
                {result.map(airport => (
                    <Airport key={airport._id} airport={airport}></Airport>
                ))}
            </List>
        </Container>
    )
}