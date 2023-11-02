import { FC } from 'react';
import Separator from '../Separator/Separator';
import { ISubjectCardProps } from '../../types';
import GroupInfo from '../GroupInfo/GroupInfo';
import Table from '../Table/Table';
import './SubjectCard.scss';

const SubjectCard: FC<ISubjectCardProps> = ({
  subjectName,
  groupName,
  studentsNumber,
  course,
  semestr,
  uniqueId,
}) => {
  return (
    <div className="subjectCard-container">
      <div className="subjectName">
        <span className="book material-symbols-outlined">import_contacts</span>
        <p className="name">{subjectName}</p>
      </div>
      <Separator />
      <GroupInfo
        groupName={groupName}
        studentsNumber={studentsNumber}
        course={course}
        semestr={semestr}
      />
      <Separator />
      <Table uniqueId={uniqueId} />
    </div>
  );
};

export default SubjectCard;
