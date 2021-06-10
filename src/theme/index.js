import overrides from './overrides';
import palette from './palette';
import typography from './typography';

export default {
  palette,
  shape: {
    borderRadius: '2px'
  },
  typography: { ...typography },
  overrides
};