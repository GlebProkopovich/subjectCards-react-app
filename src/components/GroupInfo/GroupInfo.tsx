import GroupDatum from '../GroupDatum/GroupDatum';
import { FC } from 'react';
import './GroupInfo.scss';

const GroupInfo: FC = () => {
  return (
    <div className="groupInfo-container">
      <GroupDatum groupField="Группа" groupValue="201" />
      <GroupDatum groupField="Количество курсантов" groupValue="201" />
      <GroupDatum groupField="Курс" groupValue="201" />
      <GroupDatum groupField="Семестр" groupValue="201" />
    </div>
  );
};

export default GroupInfo;
