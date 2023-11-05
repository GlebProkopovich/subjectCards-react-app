import { FC, useState } from 'react';
import Rows from '../Rows/Rows';
import {
  IPodgroup,
  ISubject,
  ISubjectCardDataState,
  ITableProps,
} from '../../types';
import { useDispatch, useSelector } from 'react-redux';
import { updateSubjectCards } from '../../store/actions/subjectCardsDataAction';
import './Table.scss';

const Table: FC<ITableProps> = ({ uniqueId }) => {
  const [secondPodgroup, setSecondPodgroup] = useState<boolean>(false);

  const subjectCardsData = [
    ...useSelector(
      (state: ISubjectCardDataState) => state.subjectCardsData.data?.data.data
    ),
  ];

  const studentsNumber = subjectCardsData.find(
    (subject: ISubject) => subject.uniqueId === uniqueId
  )?.studentsNumber;

  const dispatch = useDispatch();

  const getIndexSuitableSubject = (
    subjectCardsData: ISubject[],
    uniqueId: string
  ): number => {
    return subjectCardsData.findIndex(
      (subject: ISubject) => subject.uniqueId === uniqueId
    );
  };

  const subjectCard =
    subjectCardsData[getIndexSuitableSubject(subjectCardsData, uniqueId)];

  const emptyPodgroup: IPodgroup = {
    countStudents: '0',
    examTeacher: '',
    laboratoryTeacher: '',
    lectureTeacher: '',
    offsetTeacher: '',
    practiceTeacher: '',
    seminarTeacher: '',
  };

  const handleClickOnDivideBtn = (): void => {
    setSecondPodgroup(true);
    subjectCard.podgroups.length === 1 &&
      subjectCard.podgroups.push(emptyPodgroup);
    subjectCard.podgroups[0].countStudents = String(
      Math.ceil(Number(studentsNumber) / 2)
    );
    subjectCard.podgroups[1].countStudents = String(
      Math.floor(Number(studentsNumber) / 2)
    );
    subjectCard.countPodgroups = '2';
    dispatch(updateSubjectCards(subjectCard));
  };

  const handleClickOnDeleteBtn = (): void => {
    setSecondPodgroup(false);
    subjectCard.podgroups.pop();
    subjectCard.podgroups[0].countStudents = String(studentsNumber);
    subjectCard.countPodgroups = '1';
    dispatch(updateSubjectCards(subjectCard));
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Занятия</th>
          <th>Часы</th>
          <th>
            <div className="teacherAndBtnWrapper">
              {secondPodgroup ? (
                'Подгруппа 1'
              ) : (
                <>
                  Преподаватель
                  <button
                    className="divideIntoPodgroupsBtn"
                    onClick={handleClickOnDivideBtn}
                  >
                    +
                  </button>
                </>
              )}
            </div>
          </th>
          {secondPodgroup && (
            <th>
              <div className="podgroupAndBtnWrapper">
                Подгруппа 2
                <button
                  className="deletePodgroupBtn"
                  onClick={handleClickOnDeleteBtn}
                >
                  <span className="material-symbols-outlined">delete</span>
                </button>
              </div>
            </th>
          )}
        </tr>
      </thead>
      <tbody>
        {<Rows uniqueId={uniqueId} secondPodgroup={secondPodgroup} />}
      </tbody>
    </table>
  );
};

export default Table;
