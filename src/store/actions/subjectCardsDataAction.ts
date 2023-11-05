import axios from 'axios';
import { Dispatch } from 'redux';
import { IGetSubjectCardsDataAction, ISubject } from '../../types';

export const getSubjectCardsData = (): any => {
  return async (dispatch: Dispatch<IGetSubjectCardsDataAction>) => {
    try {
      const response = await axios.get('https://bgaa.by/test');
      dispatch({ type: 'GET_DATA_SUCCESS', payload: response });
    } catch (error) {
      console.error('Error getting cards data:', error);
      dispatch({ type: 'GET_DATA_FAILURE', payload: error });
    }
  };
};

export const updateSubjectCards = (updatedSubjectCard: ISubject) => {
  return {
    type: 'UPDATE_SUBJECT_CARDS',
    payload: updatedSubjectCard,
  };
};
