import { Grid, Typography } from "@material-ui/core";

export default function FlightHistory({ flight }) {
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
                    <Typography variant='body1'>
                        Block: {block}
                    </Typography>
                : null}
            </Grid>
            <Grid item>
                {price ? 
                    <Typography variant='body1'>
                        {new Intl.NumberFormat("en-US", {
                                    style: "currency",
                                    currency: "USD"
                                }).format(price)}
                    </Typography> 
                : null}
            </Grid>
            <Grid item>
                {status ? 
                    <Typography variant='body1'>
                        {status}
                    </Typography> 
                : 'on-time'}
            </Grid>
        </>
    )
}