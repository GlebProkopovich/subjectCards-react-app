import { FC, useEffect } from 'react';
import SubjectCard from './components/SubjectCard/SubjectCard';
import { ISubject, ISubjectCardDataState } from './types';
import { useDispatch, useSelector } from 'react-redux';
import { getSubjectCardsData as getSubjectCardsDataAction } from './store/actions/subjectCardsDataAction';
import './App.scss';

const App: FC = () => {
  const subjectCardsData = useSelector(
    (state: ISubjectCardDataState) => state.subjectCardsData.data?.data.data
  );

  const dispatch = useDispatch();

  const getSubjectCardsData = async (): Promise<void> => {
    try {
      await dispatch(getSubjectCardsDataAction());
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getSubjectCardsData();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="app-container">
      {subjectCardsData
        ? subjectCardsData?.map((subject: ISubject) => (
            <SubjectCard
              subjectName={subject.subjectName}
              groupName={subject.groupName}
              studentsNumber={subject.studentsNumber}
              course={subject.course}
              semestr={subject.semestr}
              uniqueId={subject.uniqueId}
              key={subject.uniqueId}
            />
          ))
        : 'loading'}
    </div>
  );
};

export default App;
