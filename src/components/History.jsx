import { useFlureeQuery } from "@fluree/react-wrapper";
import { GridList, GridListTile, makeStyles, Typography } from "@material-ui/core";
import { nanoid } from "nanoid";
import FlightHistory from "./flight/FlightHistory";

const useStyles = makeStyles({
    root: {
        flexWrap: 'wrap',
        justifyContent: 'center',
        overflow: 'hidden',
        width: '100%'
    },
    gridList: {
        flexWrap: 'nowrap',
        transform: 'translateZ(0)',
    }
})

/**
 * Component which pulls in the history of the flight passed to it. 
 * @param {flight}  
 * @returns 
 */
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
        let assertedArray = result.map(({block, asserted}) => (
            ({block, asserted})
        ));
        if (assertedArray) {
            return (
                <div className={classes.root}>
                    <GridList className={classes.gridList} cols={4}>
                        {assertedArray.map(element => (
                            <GridListTile key={nanoid()}>
                                <FlightHistory key={nanoid()} flight={element} />
                            </GridListTile>
                        ))}
                    </GridList>
                </div>
            )
        } else return <p>{result.toString()}</p>


    }
}