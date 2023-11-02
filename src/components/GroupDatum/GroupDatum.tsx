import { FC } from 'react';
import { IGroupDatumProps } from '../../types';
import './GroupDatum.scss';

const GroupDatum: FC<IGroupDatumProps> = ({ groupField, groupValue }) => {
  return (
    <div className="groupDatum-container">
      <p className="groupField">{groupField}</p>
      <p className="groupValue">{groupValue}</p>
    </div>
  );
};

export default GroupDatum;
