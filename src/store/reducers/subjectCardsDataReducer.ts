import {
  GetSubjectDataType,
  ISubject,
  ISubjectCardDataReducer,
} from '../../types';

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
    case 'UPDATE_SUBJECT_CARDS':
      const updatedSubjectCard = action.payload;
      if (Array.isArray(state.data)) {
        const updatedSubjectCards = state.data.map((subject: ISubject) =>
          subject.uniqueId === updatedSubjectCard.uniqueId
            ? updatedSubjectCard
            : subject
        );
        return {
          ...state,
          data: updatedSubjectCards,
        };
      } else {
        return state;
      }
    default:
      return state;
  }
};

export default subjectCardsDataReducer;
