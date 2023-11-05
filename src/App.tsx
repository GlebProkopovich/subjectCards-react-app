import { FC, useEffect, useState } from 'react';
import SubjectCard from './components/SubjectCard/SubjectCard';
import { ISubject, ISubjectCardDataState } from './types';
import { useDispatch, useSelector } from 'react-redux';
import { getSubjectCardsData as getSubjectCardsDataAction } from './store/actions/subjectCardsDataAction';
import { BallTriangle } from 'react-loader-spinner';
import axios from 'axios';
import Modal from './components/Modal/Modal';
import './App.scss';

const App: FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [modal, setModal] = useState<boolean>(false);
  const [isFetchSucceed, setFetchSucceed] = useState<boolean>(false);

  const subjectCardsData = useSelector(
    (state: ISubjectCardDataState) => state.subjectCardsData.data?.data.data
  );

  const updatedData = useSelector(
    (state: ISubjectCardDataState) => state.subjectCardsData.data?.data
  );

  const dispatch = useDispatch();

  const getSubjectCardsData = async (): Promise<void> => {
    try {
      await dispatch(getSubjectCardsDataAction());
    } catch (error) {
      console.error(error);
    }
  };

  const handleSaveBtn = async (): Promise<void> => {
    try {
      setLoading(true);
      await axios.post('https://bgaa.by/test_result', updatedData);
      setLoading(false);
      setFetchSucceed(true);
      setModal(true);
      document.body.classList.add('modal-open');
    } catch (error) {
      console.error(error);
      setLoading(false);
      setFetchSucceed(false);
      setModal(true);
      document.body.classList.add('modal-open');
    }
  };

  const closeModal = (): void => {
    setModal(false);
    document.body.classList.remove('modal-open');
  };

  useEffect(() => {
    getSubjectCardsData();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="app-container">
      <div className="subjectCards">
        {subjectCardsData ? (
          subjectCardsData?.map((subject: ISubject) => (
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
        ) : (
          <BallTriangle
            height={window.innerWidth < 680 ? '50' : '100'}
            width={window.innerWidth < 680 ? '50' : '100'}
            radius="5"
            color="#303a65"
            ariaLabel="ball-triangle-loading"
            visible={true}
          />
        )}
      </div>
      {subjectCardsData && (
        <button className="saveBtn" onClick={handleSaveBtn}>
          {loading ? (
            <BallTriangle
              height={window.innerWidth < 680 ? '20' : '30'}
              width={window.innerWidth < 680 ? '20' : '30'}
              radius="5"
              color="#fff"
              ariaLabel="ball-triangle-loading"
              visible={true}
            />
          ) : (
            'Сохранить'
          )}
        </button>
      )}
      {modal &&
        (isFetchSucceed ? (
          <Modal
            text="Данные успешно сохранены"
            iconTitle="done"
            iconStyles={{ color: '#198754;' }}
            closeModal={closeModal}
          />
        ) : (
          <Modal
            text="Произошла ошибка"
            iconTitle="cancel"
            iconStyles={{ color: 'rgb(211, 0, 0)' }}
            btnStyles={{ background: 'rgb(211, 0, 0)' }}
            closeModal={closeModal}
          />
        ))}
    </div>
  );
};

export default App;
