const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS';
const GET_DATA_FAILURE = 'GET_DATA_FAILURE';
const UPDATE_SUBJECT_CARDS = 'UPDATE_SUBJECT_CARDS';

export interface ISubject {
  additionalInfo: string;
  countPodgroups: string;
  course: string;
  exam: boolean;
  groupName: string;
  laboratoryHours: string;
  lecturesHours: string;
  offset: boolean;
  podgroups: IPodgroup[];
  practicHours: string;
  semestr: string;
  seminarHours: string;
  studentsNumber: string;
  subjectName: string;
  uniqueId: string;
}

export interface IPodgroup {
  countStudents: string;
  examTeacher: string;
  laboratoryTeacher: string;
  lectureTeacher: string;
  offsetTeacher: string;
  practiceTeacher: string;
  seminarTeacher: string;
}

export interface ITeacher {
  id: string;
  name: string;
}

export interface ISubjectCardData {
  data: ISubject[];
  teachers: ITeacher[];
}

export interface ISubjectCardProps {
  subjectName: string;
  groupName: string;
  studentsNumber: string;
  course: string;
  semestr: string;
  uniqueId: string;
}

export interface IGroupDatumProps {
  groupField: string;
  groupValue: string;
}

export interface IGroupInfoProps {
  groupName: string;
  studentsNumber: string;
  course: string;
  semestr: string;
}

export interface ITableProps {
  uniqueId: string;
}

export interface IRowsProps {
  uniqueId: string;
  secondPodgroup: boolean;
}

export interface IModalProps {
  text: string;
  iconTitle: string;
  iconStyles?: Object;
  btnStyles?: Object;
  closeModal: () => void;
}

export interface ISubjectCardDataState {
  subjectCardsData: {
    data: {
      data: ISubjectCardData;
    };
  };
}

export interface IGetSubjectCardsDataAction {
  type: 'GET_DATA_SUCCESS' | 'GET_DATA_FAILURE' | 'UPDATE_SUBJECT_CARDS';
  payload: any;
}

interface IGetDataSuccessAction {
  type: typeof GET_DATA_SUCCESS;
  payload: IGetSubjectCardsDataAction;
}

interface IGetDataFailureAction {
  type: typeof GET_DATA_FAILURE;
  payload: Error;
}

interface IUpdateSubjectCards {
  type: typeof UPDATE_SUBJECT_CARDS;
  payload: any;
}

export interface ISubjectCardDataReducer {
  data: ISubject[] | null;
  error: string | null;
}

export type GetSubjectDataType =
  | IGetDataSuccessAction
  | IGetDataFailureAction
  | IUpdateSubjectCards;
