import { Typography } from '@material-ui/core';

export default function Airport({ airport }) {
    return (
        <section>
            {/* <Typography variant='body1'>
                {airport.name}
            </Typography> */}
            <Typography variant='body1'>
                {airport.code}
            </Typography>
            {/* <Typography variant='body1'>
                {airport.city}
            </Typography> */}
        </section>
    )
}