import { ChangeEvent, FC, useState } from 'react';
import {
  IRowProps,
  ISubject,
  ISubjectCardDataState,
  ITeacher,
} from '../../types';
import { useSelector } from 'react-redux';
import './Row.scss';

const Row: FC<IRowProps> = ({ uniqueId }) => {
  const subjectCardsData = useSelector(
    (state: ISubjectCardDataState) => state.subjectCardsData.data?.data.data
  );

  const teachers = useSelector(
    (state: ISubjectCardDataState) => state.subjectCardsData.data.data.teachers
  );

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

  const [teacherOfLecture, setTeacherOfLecture] = useState<string | undefined>(
    'Вакансия'
  );

  const [teacherOfLaboratories, setTeacherOfLaboratories] = useState<
    string | undefined
  >('Вакансия');

  const [teacherOfPractic, setTeacherOfPractic] = useState<string | undefined>(
    'Вакансия'
  );

  const [teacherOfSeminar, setTeacherOfSeminar] = useState<string | undefined>(
    'Вакансия'
  );

  const [teacherOfExam, setTeacherOfExam] = useState<string | undefined>(
    'Вакансия'
  );

  const [teacherOfOffset, setTeacherOfOffset] = useState<string | undefined>(
    'Вакансия'
  );

  const handleTeacherOfLecture = (e: ChangeEvent<HTMLSelectElement>): void => {
    setTeacherOfLecture(
      teachers.find((teacher: ITeacher) => teacher.name === e.target.value)?.id
    );
  };

  const handleTeacherOfLaboratories = (
    e: ChangeEvent<HTMLSelectElement>
  ): void => {
    setTeacherOfLaboratories(
      teachers.find((teacher: ITeacher) => teacher.name === e.target.value)?.id
    );
  };

  const handleTeacherOfPractic = (e: ChangeEvent<HTMLSelectElement>): void => {
    setTeacherOfPractic(
      teachers.find((teacher: ITeacher) => teacher.name === e.target.value)?.id
    );
  };

  const handleTeacherOfSeminar = (e: ChangeEvent<HTMLSelectElement>): void => {
    setTeacherOfSeminar(
      teachers.find((teacher: ITeacher) => teacher.name === e.target.value)?.id
    );
  };

  const handleTeacherOfExam = (e: ChangeEvent<HTMLSelectElement>): void => {
    setTeacherOfExam(
      teachers.find((teacher: ITeacher) => teacher.name === e.target.value)?.id
    );
  };

  const handleTeacherOfOffset = (e: ChangeEvent<HTMLSelectElement>): void => {
    setTeacherOfOffset(
      teachers.find((teacher: ITeacher) => teacher.name === e.target.value)?.id
    );
  };

  return (
    <>
      <tr>
        <td>Лекции</td>
        <td>{lecturesHours}</td>
        <td>
          <div className="selectButtonWrapper">
            <select
              className="lectureTeacherSelect"
              value={teacherOfLecture}
              onChange={handleTeacherOfLecture}
            >
              <option>Вакансия</option>
              {teachers?.map((teacher: ITeacher) => (
                <option key={teacher.id}>{teacher.name} </option>
              ))}
            </select>
            <button className="applyTeacherBtn">
              <span className="arrowDown material-symbols-outlined">south</span>
            </button>
          </div>
        </td>
      </tr>
      <tr>
        <td>Лабораторные работы</td>
        <td>{laboratoryHours}</td>
        <td>
          <select
            value={teacherOfLaboratories}
            onChange={handleTeacherOfLaboratories}
          >
            <option>Вакансия</option>
            {teachers?.map((teacher: ITeacher) => (
              <option key={teacher.id}>{teacher.name} </option>
            ))}
          </select>
        </td>
      </tr>
      <tr>
        <td>Практические</td>
        <td>{practicHours}</td>
        <td>
          <select value={teacherOfPractic} onChange={handleTeacherOfPractic}>
            <option>Вакансия</option>
            {teachers?.map((teacher: ITeacher) => (
              <option key={teacher.id}>{teacher.name} </option>
            ))}
          </select>
        </td>
      </tr>
      <tr>
        <td>Семинарские</td>
        <td>{seminarHours}</td>
        <td>
          <select value={teacherOfSeminar} onChange={handleTeacherOfSeminar}>
            <option>Вакансия</option>
            {teachers?.map((teacher: ITeacher) => (
              <option key={teacher.id}>{teacher.name} </option>
            ))}
          </select>
        </td>
      </tr>
      {isExam && (
        <tr>
          <td>Экзамен</td>
          <td></td>
          <td>
            <select value={teacherOfExam} onChange={handleTeacherOfExam}>
              <option>Вакансия</option>
              {teachers?.map((teacher: ITeacher) => (
                <option key={teacher.id}>{teacher.name} </option>
              ))}
            </select>
          </td>
        </tr>
      )}
      {isOffset && (
        <tr>
          <td>Зачёт</td>
          <td></td>
          <td>
            <select value={teacherOfOffset} onChange={handleTeacherOfOffset}>
              <option>Вакансия</option>
              {teachers?.map((teacher: ITeacher) => (
                <option key={teacher.id}>{teacher.name} </option>
              ))}
            </select>
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
        <td>
          <textarea name="" id=""></textarea>
        </td>
      </tr>
    </>
  );
};

export default Row;
