import { GetSubjectDataType, ISubjectCardDataReducer } from '../../types';

const initialState: ISubjectCardDataReducer = {
  data: null,
  error: null,
};

const subjectCardsDataReducer = (
  state: ISubjectCardDataReducer = initialState,
  action: GetSubjectDataType
) => {
  switch (action.type) {
    case 'GET_DATA_SUCCESS':
      return {
        ...state,
        data: action.payload,
        error: null,
      };
    case 'GET_DATA_FAILURE':
      return {
        ...state,
        data: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default subjectCardsDataReducer;
