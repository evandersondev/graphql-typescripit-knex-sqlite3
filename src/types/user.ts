interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
}

interface IData {
  data: IUser
}

interface IInputUser {
  id: string;
  data: IUser
}

export {
  IData,
  IInputUser
}