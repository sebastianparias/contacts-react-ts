export interface ITranslation {
  headerTitle: string;
  headerLinkRead: string;
  headerLinkAdd: string;
  contentTitle: string;
  tableHeader: string;
  tableActions: string;
  actionsEditButton: string;
  actionsDeleteButton: string;
  addContact: string;
  name: string;
  phone: string;
  submit: string;
  reset: string;
  languageButton: string;
  confirmDialogMessage: string;
  confirmDialogCancelButton: string;
  confirmDialogConfirmButton: string;
}

export interface ITranslations {
  [key: string]: ITranslation;
}

export interface ILanguageContext {
  texts: ITranslation;
  handleLanguage: () => void;
}

export interface IThemeContext {
  handleTheme: () => void;
  theme: string;
}

export interface IUser {
  name: string;
  phone: string;
  id: number | null;
}

export type Users = Array<IUser>;

export interface IUserUpdate {
  [key: string]: IUser;
}

export interface ICrudFormProps {
  createData(data: IUser): void;
  updateData(data: IUser): void;
  dataToEdit: null | IUser;
  setDataToEdit(data: null): void;
}

export interface ICrudTableProps {
  data: Array<IUser>;
  setDataToEdit: Function;
  deleteData: Function;
}

export interface ICrudTableRowProps {
  el: IUser;
  setDataToEdit: Function;
  askDeleteData: Function;
}

export interface ConfirmDialogProps {
  deleteData: Function;
  idToDelete: number | null;
  setShowConfirmDialog: Function;
}
