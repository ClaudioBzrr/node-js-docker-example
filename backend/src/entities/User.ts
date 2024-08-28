import { IDefaults } from "./Defaults";

export type IUser = IDefaults & {
  username: string;
  password: string;
  email: string;
};
