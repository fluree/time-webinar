import { Grid } from "@material-ui/core";

export default function FlightHistory({ flight }) {
    let price, status;
    if (flight[0]['flight/price']) {
        price = flight[0]['flight/price']
    }
    if (flight[0]['flight/status']){
        status = flight[0]['flight/status']
    }
    return (
        <>
            <Grid item>
                {price ? <p>{price}</p> : null}
            </Grid>
            <Grid item>
                {status ? <p>{status}</p> : 'on-time'}
            </Grid>
        </>
    )
}