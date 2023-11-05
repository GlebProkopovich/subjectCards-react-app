import { ChangeEvent, FC, useEffect, useState } from 'react';
import {
  IRowsProps,
  ISubject,
  ISubjectCardDataState,
  ITeacher,
} from '../../types';
import { useDispatch, useSelector } from 'react-redux';
import { updateSubjectCards } from '../../store/actions/subjectCardsDataAction';
import './Rows.scss';

const Rows: FC<IRowsProps> = ({ uniqueId, secondPodgroup }) => {
  const subjectCardsData = [
    ...useSelector(
      (state: ISubjectCardDataState) => state.subjectCardsData.data?.data.data
    ),
  ];

  const teachers = useSelector(
    (state: ISubjectCardDataState) => state.subjectCardsData.data.data.teachers
  );

  const dispatch = useDispatch();

  const subjectCard =
    subjectCardsData[getIndexSuitableSubject(subjectCardsData, uniqueId)];

  const isExam = subjectCardsData.find(
    (subject: ISubject) => subject.uniqueId === uniqueId
  )?.exam;

  const isOffset = subjectCardsData.find(
    (subject: ISubject) => subject.uniqueId === uniqueId
  )?.offset;

  const lecturesHours = subjectCardsData.find(
    (subject: ISubject) => subject.uniqueId === uniqueId
  )?.lecturesHours;

  const laboratoryHours = subjectCardsData.find(
    (subject: ISubject) => subject.uniqueId === uniqueId
  )?.laboratoryHours;

  const practicHours = subjectCardsData.find(
    (subject: ISubject) => subject.uniqueId === uniqueId
  )?.practicHours;

  const seminarHours = subjectCardsData.find(
    (subject: ISubject) => subject.uniqueId === uniqueId
  )?.seminarHours;

  const studentsNumber = subjectCardsData.find(
    (subject: ISubject) => subject.uniqueId === uniqueId
  )?.studentsNumber;

  const [lectureTeacher, setLectureTeacher] = useState<string | undefined>(
    'Вакансия'
  );

  const [podgroupLectureTeacher, setPodgroupLectureTeacher] = useState<
    string | undefined
  >('Вакансия');

  const [laboratoryTeacher, setLaboratoryTeacher] = useState<
    string | undefined
  >('Вакансия');

  const [podgroupLaboratoryTeacher, setPodgroupLaboratoryTeacher] = useState<
    string | undefined
  >('Вакансия');

  const [practicTeacher, setPracticTeacher] = useState<string | undefined>(
    'Вакансия'
  );

  const [podgroupPracticTeacher, setPodgroupPracticTeacher] = useState<
    string | undefined
  >('Вакансия');

  const [seminarTeacher, setSeminarTeacher] = useState<string | undefined>(
    'Вакансия'
  );

  const [podgroupSeminarTeacher, setPodgroupSeminarTeacher] = useState<
    string | undefined
  >('Вакансия');

  const [examTeacher, setExamTeacher] = useState<string | undefined>(
    'Вакансия'
  );

  const [podgroupExamTeacher, setPodgroupExamTeacher] = useState<
    string | undefined
  >('Вакансия');

  const [offsetTeacher, setOffsetTeacher] = useState<string | undefined>(
    'Вакансия'
  );

  const [podgroupOffsetTeacher, setPodgroupOffsetTeacher] = useState<
    string | undefined
  >('Вакансия');

  const [firstGroupStudentsNumber, setFirstGroupStudentsNumber] =
    useState<string>(String(Math.ceil(Number(studentsNumber) / 2)));

  const [secondGroupStudentsNumber, setSecondGroupStudentsNumber] =
    useState<string>(String(Math.floor(Number(studentsNumber) / 2)));

  const [isLectureSelectDisabled, setLectureSelectDisabled] =
    useState<boolean>(false);
  const [isLaboratorySelectDisabled, setLaboratorySelectDisabled] =
    useState<boolean>(false);
  const [isPracticSelectDisabled, setPracticSelectDisabled] =
    useState<boolean>(false);
  const [isSeminarSelectDisabled, setSeminarSelectDisabled] =
    useState<boolean>(false);

  const [note, setNote] = useState<string>('');

  function getIndexSuitableSubject(
    subjectCardsData: ISubject[],
    uniqueId: string
  ): number {
    return subjectCardsData.findIndex(
      (subject: ISubject) => subject.uniqueId === uniqueId
    );
  }

  const getIdTeacher = (
    teachers: ITeacher[],
    name: string
  ): string | undefined => {
    return (
      teachers.find((teacher: ITeacher) => teacher.name === name)?.id || ''
    );
  };

  const getIdLectureTeacher = (e: ChangeEvent<HTMLSelectElement>): void => {
    const id = getIdTeacher(teachers, e.target.value);
    setLectureTeacher(id);
    subjectCard.podgroups[0].lectureTeacher = `${id}`;
  };

  const getIdPodgroupLectureTeacher = (
    e: ChangeEvent<HTMLSelectElement>
  ): void => {
    const id = getIdTeacher(teachers, e.target.value);
    setPodgroupLectureTeacher(id);
    subjectCard.podgroups[1].lectureTeacher = `${id}`;
  };

  const getIdLaboratoryTeacher = (e: ChangeEvent<HTMLSelectElement>): void => {
    const id = getIdTeacher(teachers, e.target.value);
    setLaboratoryTeacher(id);
    subjectCard.podgroups[0].laboratoryTeacher = `${id}`;
  };

  const getIdPodgroupLaboratoryTeacher = (
    e: ChangeEvent<HTMLSelectElement>
  ): void => {
    const id = getIdTeacher(teachers, e.target.value);
    setPodgroupLaboratoryTeacher(id);
    subjectCard.podgroups[1].laboratoryTeacher = `${id}`;
  };

  const getIdPracticTeacher = (e: ChangeEvent<HTMLSelectElement>): void => {
    const id = getIdTeacher(teachers, e.target.value);
    setPracticTeacher(id);
    subjectCard.podgroups[0].practiceTeacher = `${id}`;
  };

  const getIdPodgroupPracticTeacher = (
    e: ChangeEvent<HTMLSelectElement>
  ): void => {
    const id = getIdTeacher(teachers, e.target.value);
    setPodgroupPracticTeacher(id);
    subjectCard.podgroups[1].practiceTeacher = `${id}`;
  };

  const getIdSeminarTeacher = (e: ChangeEvent<HTMLSelectElement>): void => {
    const id = getIdTeacher(teachers, e.target.value);
    setSeminarTeacher(id);
    subjectCard.podgroups[0].seminarTeacher = `${id}`;
  };

  const getIdPodgroupSeminarTeacher = (
    e: ChangeEvent<HTMLSelectElement>
  ): void => {
    const id = getIdTeacher(teachers, e.target.value);
    setPodgroupSeminarTeacher(id);
    subjectCard.podgroups[1].seminarTeacher = `${id}`;
  };

  const getIdExamTeacher = (e: ChangeEvent<HTMLSelectElement>): void => {
    const id = getIdTeacher(teachers, e.target.value);
    setExamTeacher(id);
    subjectCard.podgroups[0].examTeacher = `${id}`;
  };

  const getIdPodgroupExamTeacher = (
    e: ChangeEvent<HTMLSelectElement>
  ): void => {
    const id = getIdTeacher(teachers, e.target.value);
    setPodgroupExamTeacher(id);
    subjectCard.podgroups[1].examTeacher = `${id}`;
  };

  const getIdOffsetTeacher = (e: ChangeEvent<HTMLSelectElement>): void => {
    const id = getIdTeacher(teachers, e.target.value);
    setOffsetTeacher(id);
    subjectCard.podgroups[0].offsetTeacher = `${id}`;
  };

  const getIdPodgroupOffsetTeacher = (
    e: ChangeEvent<HTMLSelectElement>
  ): void => {
    const id = getIdTeacher(teachers, e.target.value);
    setPodgroupOffsetTeacher(id);
    subjectCard.podgroups[1].offsetTeacher = `${id}`;
  };

  const getNameLectureTeacher = (): string | undefined => {
    return (
      teachers.find((teacher: ITeacher) => teacher.id === lectureTeacher)
        ?.name || 'Вакансия'
    );
  };

  const getNamePodgroupLectureTeacher = (): string | undefined => {
    return (
      teachers.find(
        (teacher: ITeacher) => teacher.id === podgroupLectureTeacher
      )?.name || 'Вакансия'
    );
  };

  const getNameLaboratoryTeacher = (): string | undefined => {
    return (
      teachers.find((teacher: ITeacher) => teacher.id === laboratoryTeacher)
        ?.name || 'Вакансия'
    );
  };

  const getNamePodgroupLaboratoryTeacher = (): string | undefined => {
    return (
      teachers.find(
        (teacher: ITeacher) => teacher.id === podgroupLaboratoryTeacher
      )?.name || 'Вакансия'
    );
  };

  const getNamePracticTeacher = (): string | undefined => {
    return (
      teachers.find((teacher: ITeacher) => teacher.id === practicTeacher)
        ?.name || 'Вакансия'
    );
  };

  const getNamePodgroupPracticTeacher = (): string | undefined => {
    return (
      teachers.find(
        (teacher: ITeacher) => teacher.id === podgroupPracticTeacher
      )?.name || 'Вакансия'
    );
  };

  const getNameSeminarTeacher = (): string | undefined => {
    return (
      teachers.find((teacher: ITeacher) => teacher.id === seminarTeacher)
        ?.name || 'Вакансия'
    );
  };

  const getNamePodgroupSeminarTeacher = (): string | undefined => {
    return (
      teachers.find(
        (teacher: ITeacher) => teacher.id === podgroupSeminarTeacher
      )?.name || 'Вакансия'
    );
  };

  const getNameExamTeacher = (): string | undefined => {
    return (
      teachers.find((teacher: ITeacher) => teacher.id === examTeacher)?.name ||
      'Вакансия'
    );
  };

  const getNamePodgroupExamTeacher = (): string | undefined => {
    return (
      teachers.find((teacher: ITeacher) => teacher.id === podgroupExamTeacher)
        ?.name || 'Вакансия'
    );
  };

  const getNameOffsetTeacher = (): string | undefined => {
    return (
      teachers.find((teacher: ITeacher) => teacher.id === offsetTeacher)
        ?.name || 'Вакансия'
    );
  };

  const getNamePodgroupOffsetTeacher = (): string | undefined => {
    return (
      teachers.find((teacher: ITeacher) => teacher.id === podgroupOffsetTeacher)
        ?.name || 'Вакансия'
    );
  };

  const handleApplyTeacherBtn = (): void => {
    !isLaboratorySelectDisabled && setLaboratoryTeacher(lectureTeacher);
    !isPracticSelectDisabled && setPracticTeacher(lectureTeacher);
    !isSeminarSelectDisabled && setSeminarTeacher(lectureTeacher);
    isExam && setExamTeacher(lectureTeacher);
    isOffset && setOffsetTeacher(lectureTeacher);

    if (lectureTeacher || lectureTeacher === '') {
      if (!isLaboratorySelectDisabled) {
        subjectCard.podgroups[0].laboratoryTeacher = lectureTeacher;
      }
      if (!isPracticSelectDisabled) {
        subjectCard.podgroups[0].practiceTeacher = lectureTeacher;
      }
      if (!isSeminarSelectDisabled) {
        subjectCard.podgroups[0].seminarTeacher = lectureTeacher;
      }
      if (isExam) {
        subjectCard.podgroups[0].examTeacher = lectureTeacher;
      }
      if (isOffset) {
        subjectCard.podgroups[0].offsetTeacher = lectureTeacher;
      }
    }
  };

  const handleApplyPodgroupTeacherBtn = (): void => {
    !isLaboratorySelectDisabled &&
      setPodgroupLaboratoryTeacher(podgroupLectureTeacher);
    !isPracticSelectDisabled &&
      setPodgroupPracticTeacher(podgroupLectureTeacher);
    !isSeminarSelectDisabled &&
      setPodgroupSeminarTeacher(podgroupLectureTeacher);
    isExam && setPodgroupExamTeacher(podgroupLectureTeacher);
    isOffset && setPodgroupOffsetTeacher(podgroupLectureTeacher);

    if (podgroupLectureTeacher || podgroupLectureTeacher === '') {
      if (!isLaboratorySelectDisabled) {
        subjectCard.podgroups[1].laboratoryTeacher = podgroupLectureTeacher;
      }
      if (!isPracticSelectDisabled) {
        subjectCard.podgroups[1].practiceTeacher = podgroupLectureTeacher;
      }
      if (!isSeminarSelectDisabled) {
        subjectCard.podgroups[1].seminarTeacher = podgroupLectureTeacher;
      }
      if (isExam) {
        subjectCard.podgroups[1].examTeacher = podgroupLectureTeacher;
      }
      if (isOffset) {
        subjectCard.podgroups[1].offsetTeacher = podgroupLectureTeacher;
      }
    }
  };

  const handleFirstGroupStudents = (e: ChangeEvent<HTMLInputElement>): void => {
    setFirstGroupStudentsNumber(e.target.value);
  };

  const handleSecondGroupStudents = (
    e: ChangeEvent<HTMLInputElement>
  ): void => {
    setSecondGroupStudentsNumber(e.target.value);
  };

  const handleNote = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    setNote(e.target.value);
  };

  useEffect(() => {
    setLectureSelectDisabled(lecturesHours === '0' ? true : false);
  }, [lecturesHours]);

  useEffect(() => {
    setLaboratorySelectDisabled(laboratoryHours === '0' ? true : false);
  }, [laboratoryHours]);

  useEffect(() => {
    setPracticSelectDisabled(practicHours === '0' ? true : false);
  }, [practicHours]);

  useEffect(() => {
    setSeminarSelectDisabled(seminarHours === '0' ? true : false);
  }, [seminarHours]);

  useEffect(() => {
    subjectCard.additionalInfo = note;
    dispatch(updateSubjectCards(subjectCard));
    // eslint-disable-next-line
  }, [
    lectureTeacher,
    podgroupLectureTeacher,
    laboratoryTeacher,
    podgroupLaboratoryTeacher,
    practicTeacher,
    podgroupPracticTeacher,
    seminarTeacher,
    podgroupSeminarTeacher,
    examTeacher,
    podgroupExamTeacher,
    offsetTeacher,
    podgroupOffsetTeacher,
    note,
  ]);

  return (
    <>
      <tr>
        <td>Лекции</td>
        <td>{lecturesHours}</td>
        <td>
          <div className="selectButtonWrapper">
            <select
              disabled={isLectureSelectDisabled}
              value={getNameLectureTeacher()}
              onChange={getIdLectureTeacher}
            >
              <option>Вакансия</option>
              {teachers?.map((teacher: ITeacher) => (
                <option key={teacher.id}>{teacher.name} </option>
              ))}
            </select>
            <button className="applyTeacherBtn" onClick={handleApplyTeacherBtn}>
              <span className="arrowDown material-symbols-outlined">south</span>
            </button>
          </div>
        </td>
        {secondPodgroup && (
          <td>
            <div className="selectButtonWrapper">
              <select
                disabled={isLectureSelectDisabled}
                value={getNamePodgroupLectureTeacher()}
                onChange={getIdPodgroupLectureTeacher}
              >
                <option>Вакансия</option>
                {teachers?.map((teacher: ITeacher) => (
                  <option key={teacher.id}>{teacher.name} </option>
                ))}
              </select>
              <button
                className="applyTeacherBtn"
                onClick={handleApplyPodgroupTeacherBtn}
              >
                <span className="arrowDown material-symbols-outlined">
                  south
                </span>
              </button>
            </div>
          </td>
        )}
      </tr>
      <tr>
        <td>Лабораторные работы</td>
        <td>{laboratoryHours}</td>
        <td>
          <select
            className="laboratorySelect"
            disabled={isLaboratorySelectDisabled}
            value={getNameLaboratoryTeacher()}
            onChange={getIdLaboratoryTeacher}
          >
            <option>Вакансия</option>
            {teachers?.map((teacher: ITeacher) => (
              <option key={teacher.id}>{teacher.name} </option>
            ))}
          </select>
        </td>
        {secondPodgroup && (
          <td>
            <select
              className="laboratorySelect"
              disabled={isLaboratorySelectDisabled}
              value={getNamePodgroupLaboratoryTeacher()}
              onChange={getIdPodgroupLaboratoryTeacher}
            >
              <option>Вакансия</option>
              {teachers?.map((teacher: ITeacher) => (
                <option key={teacher.id}>{teacher.name} </option>
              ))}
            </select>
          </td>
        )}
      </tr>
      <tr>
        <td>Практические</td>
        <td>{practicHours}</td>
        <td>
          <select
            className="practicSelect"
            disabled={isPracticSelectDisabled}
            value={getNamePracticTeacher()}
            onChange={getIdPracticTeacher}
          >
            <option>Вакансия</option>
            {teachers?.map((teacher: ITeacher) => (
              <option key={teacher.id}>{teacher.name} </option>
            ))}
          </select>
        </td>
        {secondPodgroup && (
          <td>
            <select
              className="practicSelect"
              disabled={isPracticSelectDisabled}
              value={getNamePodgroupPracticTeacher()}
              onChange={getIdPodgroupPracticTeacher}
            >
              <option>Вакансия</option>
              {teachers?.map((teacher: ITeacher) => (
                <option key={teacher.id}>{teacher.name} </option>
              ))}
            </select>
          </td>
        )}
      </tr>
      <tr>
        <td>Семинарские</td>
        <td>{seminarHours}</td>
        <td>
          <select
            className="seminarSelect"
            disabled={isSeminarSelectDisabled}
            value={getNameSeminarTeacher()}
            onChange={getIdSeminarTeacher}
          >
            <option>Вакансия</option>
            {teachers?.map((teacher: ITeacher) => (
              <option key={teacher.id}>{teacher.name} </option>
            ))}
          </select>
        </td>
        {secondPodgroup && (
          <td>
            <select
              className="seminarSelect"
              disabled={isSeminarSelectDisabled}
              value={getNamePodgroupSeminarTeacher()}
              onChange={getIdPodgroupSeminarTeacher}
            >
              <option>Вакансия</option>
              {teachers?.map((teacher: ITeacher) => (
                <option key={teacher.id}>{teacher.name} </option>
              ))}
            </select>
          </td>
        )}
      </tr>
      {isExam && (
        <tr>
          <td>Экзамен</td>
          <td></td>
          <td>
            <select
              className="examSelect"
              value={getNameExamTeacher()}
              onChange={getIdExamTeacher}
            >
              <option>Вакансия</option>
              {teachers?.map((teacher: ITeacher) => (
                <option key={teacher.id}>{teacher.name} </option>
              ))}
            </select>
          </td>
          {secondPodgroup && (
            <td>
              <select
                className="examSelect"
                value={getNamePodgroupExamTeacher()}
                onChange={getIdPodgroupExamTeacher}
              >
                <option>Вакансия</option>
                {teachers?.map((teacher: ITeacher) => (
                  <option key={teacher.id}>{teacher.name} </option>
                ))}
              </select>
            </td>
          )}
        </tr>
      )}
      {isOffset && (
        <tr>
          <td>Зачёт</td>
          <td></td>
          <td>
            <select
              className="offsetSelect"
              value={getNameOffsetTeacher()}
              onChange={getIdOffsetTeacher}
            >
              <option>Вакансия</option>
              {teachers?.map((teacher: ITeacher) => (
                <option key={teacher.id}>{teacher.name} </option>
              ))}
            </select>
          </td>
          {secondPodgroup && (
            <td>
              <select
                className="offsetSelect"
                value={getNamePodgroupOffsetTeacher()}
                onChange={getIdPodgroupOffsetTeacher}
              >
                <option>Вакансия</option>
                {teachers?.map((teacher: ITeacher) => (
                  <option key={teacher.id}>{teacher.name} </option>
                ))}
              </select>
            </td>
          )}
        </tr>
      )}
      {secondPodgroup && (
        <tr>
          <td>Количество человек</td>
          <td></td>
          <td>
            <input
              className="studentsNumber"
              type="text"
              value={firstGroupStudentsNumber}
              onChange={handleFirstGroupStudents}
            />
          </td>
          <td>
            <input
              className="studentsNumber"
              type="text"
              value={secondGroupStudentsNumber}
              onChange={handleSecondGroupStudents}
            />
          </td>
        </tr>
      )}
      <tr>
        <td>
          Примечание
          <br />
          (для составления расписания)
        </td>
        <td></td>
        <td colSpan={secondPodgroup ? 2 : 1}>
          <textarea value={note} onChange={handleNote}></textarea>
        </td>
      </tr>
    </>
  );
};

export default Rows;
