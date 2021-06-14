import { useFlureeQuery } from '@fluree/react-wrapper';
import { Grid, Input, makeStyles, Slider, Typography } from '@material-ui/core';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import { useState } from 'react';
import FlightList from './flight/FlightList';

	const timeTravelQuery = {
		selectOne: ["?maxBlock", "?lastBlockTime", "?firstBlockTime"],
		where: [
		["?s", "_block/number", "?bNum"],
		["?maxBlock", "#(max ?bNum)"],
		["?minBlock", "#(min ?bNum)"],
		["?maxS", "_block/number", "?maxBlock"],
		["?maxS", "_block/instant", "?lastBlockTime"],
		["?minS", "_block/number", "?minBlock"],
		["?minS", "_block/instant", "?firstBlockTime"]
		],
		opts: { ignoreForceTime: true }
	};

	const useStyles = makeStyles({
		slider: {
			width: '80vw'
		},
		input: {
			width: '2rem',
			marginLeft: '1vw'
		}
	});

export default function TimeTravel({ dateTime, onError }){
	const classes = useStyles();
	const [sliderValue, setSliderValue] = useState(2);

	const { result, loading, error } = useFlureeQuery(timeTravelQuery);

	const defaultResult = [2, new Date().valueOf(), 1451624400000];
	const [maxBlock, maxBlockTime, firstBlockTime] = loading || error ? defaultResult : result;
	const max = dateTime ? maxBlockTime : maxBlock;
	const min = dateTime ? firstBlockTime : 2;
	const marks = [
		{
			value: `${min}`,
			label: `${min}`
		},
		{
			value: `${max}`,
			label: `${max}`
		}
	];	

	const handleSliderChange = (event, newValue) => {
		if (typeof newValue === 'number') {
			setSliderValue(newValue);
		} else {
			setSliderValue(Number(event.target.value));
		}
	}

	const handleInputChange = (event) => {
		setSliderValue(event.target.value === '' ? '' : Number(event.target.value));
	}

	const handleBlur = () => {
		if (sliderValue < 2) {
			setSliderValue(2);
		} else if (sliderValue > maxBlock) {
			setSliderValue(maxBlock);
		}	
	};

	if (error) {
		console.error(error);
		onError = onError ? <onError error={error} /> : <div>{error.message}</div>
	}

	return (
		<section >
			<Typography 
				id="input-slider" 
				gutterBottom
				variant='h4'
			>
				Time Traveling across Blocks
			</Typography>
			<Grid 
				container 
				spacing={2} 
				alignItems="center"
				id="grid-container"
				> 
				<Grid item>
					<FlightTakeoffIcon />
				</Grid>
				<Grid item xs id="grid-slider">
					<Slider 
						value={sliderValue}
						valueLabelDisplay="auto"
						onChange={handleSliderChange}
						step={1}
						marks={marks}
						aria-labelledby="input-slider"
						min={1}
						max={max}
					/>
				</Grid>
				<Grid item id="grid-input-item">
					<Input
						className={classes.input}
						value={sliderValue}
						onChange={handleInputChange}
						onBlur={handleBlur}
						inputProps={{
							step: 1,
							min: min,
							max: max,
							type: 'number',
							'aria-labelledby': 'input-slider'
						}}
					/>
				</Grid>
			</Grid> 
			{/* <AirportList block={sliderValue} /> */}
			<FlightList block={sliderValue} />
		</section>
	)
}