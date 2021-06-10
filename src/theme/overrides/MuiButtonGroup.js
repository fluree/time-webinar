import { flureeBlue, flurple, twilight, white } from '../palette/colors';

const contained = (color) => ({
  color: white,
  background: color,
  border: `2px solid ${color}`,
  '&:not(:last-child)': {
    borderColor: color
  },
  '&:hover': {
    background: white,
    color: color,
    borderColor: color
    // borderWidth: "2px"
  }
});

export default {
  groupedContained: contained(twilight),
  groupedContainedHorizontal: {
    // "&:not(:last-child)": {
    //   borderRight: `2px solid ${white}`,
    // },
  },
  groupedOutlined: {
    color: twilight,
    background: 'rgba(0, 0, 0, 0)',
    '&:hover': {
      background: twilight,
      color: white
    }
  },
  groupedContainedPrimary: contained(flureeBlue),
  groupedOutlinedPrimary: {
    color: flureeBlue,
    background: 'rgba(0, 0, 0, 0)',
    '&:hover': {
      background: flureeBlue,
      color: white
    }
  },
  groupedContainedSecondary: contained(flurple),
  groupedOutlinedSecondary: {
    color: flurple,
    background: 'rgba(0, 0, 0, 0)',
    '&:hover': {
      background: flurple,
      color: white
    }
  }
};
