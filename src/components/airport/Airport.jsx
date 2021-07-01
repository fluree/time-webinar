import { Typography } from '@material-ui/core';

export default function Airport({ airport }) {
    return (
        <section>
            <Typography variant='h5'>
                {airport.code}
            </Typography>
        </section>
    )
}