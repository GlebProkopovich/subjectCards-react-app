import GroupDatum from '../GroupDatum/GroupDatum';
import { FC } from 'react';
import { IGroupInfoProps } from '../../types';
import './GroupInfo.scss';

const GroupInfo: FC<IGroupInfoProps> = ({
  groupName,
  studentsNumber,
  course,
  semestr,
}) => {
  return (
    <div className="groupInfo-container">
      <div className="groupCourseWrapper">
        <GroupDatum groupField="Группа" groupValue={groupName} />
        <GroupDatum groupField="Курс" groupValue={course} />
      </div>
      <div className="studentsSemestrWrapper">
        <GroupDatum
          groupField="Количество курсантов"
          groupValue={studentsNumber}
        />
        <GroupDatum groupField="Семестр" groupValue={semestr} />
      </div>
    </div>
  );
};

export default GroupInfo;
