import { FC } from 'react';
import Row from '../Row/Row';
import { ITableProps } from '../../types';
import './Table.scss';

const Table: FC<ITableProps> = ({ uniqueId }) => {
  //   const subjectCardsData = useSelector(
  //     (state: ISubjectCardDataState) => state.subjectCardsData.data?.data.data
  //   );

  return (
    <table>
      <thead>
        <tr>
          <th>Занятия</th>
          <th>Часы</th>
          <th>
            Преподаватель <button>+</button>
          </th>
        </tr>
      </thead>
      <tbody>{<Row uniqueId={uniqueId} />}</tbody>
    </table>
  );
};

export default Table;
