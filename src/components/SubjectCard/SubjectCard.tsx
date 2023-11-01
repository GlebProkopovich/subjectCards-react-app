import { FC } from 'react';
import Separator from '../Separator/Separator';
import { ISubjectCardProps } from '../../types';
import './SubjectCard.scss';

const SubjectCard: FC<ISubjectCardProps> = ({ subjectName }) => {
  return (
    <div className="subjectCard-container">
      <div className="subjectName">
        <span className="book material-symbols-outlined">import_contacts</span>
        <p className="name">{subjectName}</p>
      </div>
      <Separator />
    </div>
  );
};

export default SubjectCard;
