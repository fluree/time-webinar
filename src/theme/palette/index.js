import {
  flureeBlue,
  flurple,
  twilight,
  alert,
  warning,
  positive,
  darkGrey,
  lightGrey,
  blizzard,
  white,
  defaultBackground,
  fieldBackground
} from './colors';

export default {
  background: {
    default: defaultBackground,
    paper: fieldBackground
  },
  primary: {
    main: flureeBlue,
    contrastText: white
  },
  secondary: {
    main: flurple,
    contrastText: white
  },
  info: {
    main: twilight
  },
  error: {
    main: alert
  },
  success: {
    main: positive
  },
  warning: {
    main: warning
  },
  text: {
    primary: twilight,
    secondary: twilight,
    disabled: darkGrey,
    hint: lightGrey
  },
  divider: blizzard,
  action: { disabled: lightGrey }
};
