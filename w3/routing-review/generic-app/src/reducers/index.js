import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  allCards: CardsReducer,
  selectedCombo: ComboReducer,
});

export default rootReducer;