import { combineReducers } from 'redux';
import subjectCardsDataReducer from './subjectCardsDataReducer';

const rootReducer = combineReducers({
  subjectCardsData: subjectCardsDataReducer,
});

export default rootReducer;
