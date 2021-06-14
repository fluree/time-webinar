import { useFlureeQuery } from "@fluree/react-wrapper";
import { GridList, GridListTile, List, makeStyles, Typography } from "@material-ui/core";
import { nanoid } from "nanoid";
import FlightHistory from "./flight/FlightHistory";

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
    },
    gridList: {
        flexWrap: 'nowrap',
        transform: 'translateZ(0)'
    }
})

export default function History({ flight }) {
    const classes = useStyles();
    const historyQuery = {
        history: flight._id,
        prettyPrint: true
    };
    const { result, loading, error } = useFlureeQuery(historyQuery);

    if (loading) {
        return (<Typography variant='body1'>Loading history</Typography>)
    } else if (result.length === 0) {
        return (<Typography variant='body1'>{error}</Typography>)
    } else {
        let assertedArray = result.map(element => element.asserted);
        if (assertedArray) {
            return (
                <article className={classes.root}>
                    <GridList className={classes.gridList} cols={2}>
                        {assertedArray.map((flight) => (
                            <GridListTile key={nanoid()}>
                                <FlightHistory key={nanoid()} flight={flight} />
                            </GridListTile>
                        ))}
                    </GridList>
                </article>
            )
        } else return <p>{result.toString()}</p>


    }
}