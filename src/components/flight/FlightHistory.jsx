import { Grid, Typography } from "@material-ui/core";

/**
 * Component to manage the UI of the history of a flight
 * @param {flight} 
 * @returns 
 */
export default function FlightHistory({ flight }) {
    /**
     * These vars store the values from the flight to be surfaced in the UI
     */
    let price, status, block;
    if (flight['asserted'][0]['flight/price']) {
        price = flight['asserted'][0]['flight/price']
    }
    if (flight['asserted'][0]['flight/status']){
        status = flight['asserted'][0]['flight/status']
    }
    if (flight['block']) {
        block = flight['block']
    }
    return (
        <>
            <Grid item>
                {block ? 
                    <Typography variant='h6'>
                        Block: {block}
                    </Typography>
                : null}
            </Grid>
            <Grid item>
                {price ? 
                    <Typography variant='h6'>
                        {new Intl.NumberFormat("en-US", {
                                    style: "currency",
                                    currency: "USD"
                                }).format(price)}
                    </Typography> 
                : null}
            </Grid>
            <Grid item>
                {status ? 
                    <Typography variant='h6'>
                        {status}
                    </Typography> 
                : 'on-time'}
            </Grid>
        </>
    )
}