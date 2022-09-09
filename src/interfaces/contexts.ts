import React from "react";
import { ISwitcher, IUpdateUser } from "./pages";
import { Id, ToastOptions, ToastPosition, UpdateOptions } from "react-toastify";
import { IGeneralAnimations } from "./styles";
import { ITechData } from "./components";
import { Uploader } from "uploader";
import { SubmitHandler } from "react-hook-form";

export interface ISwitcherContext {
  screenSwitcher: ISwitcher;
  setScreenSwitcher: React.Dispatch<React.SetStateAction<ISwitcher>>;
  condicionModal: boolean;
  setCondicionlModal: React.Dispatch<React.SetStateAction<boolean>>;
  animation: IGeneralAnimations;
  setAnimation: React.Dispatch<React.SetStateAction<IGeneralAnimations>>;
  hideFL: boolean;
  setHideFL: React.Dispatch<React.SetStateAction<boolean>>;
  setAddTechs: React.Dispatch<React.SetStateAction<boolean>>;
  setUpdateUser: React.Dispatch<React.SetStateAction<boolean>>;
  updateUser: boolean;
  addTechs: boolean;
  textFade: (str: string, btn: string) => void;
  text: string;
  uploader: Uploader;
}

export interface IUser {
  username?: string;
  name: string;
  cpf?: string;
  adress?: IAdress;
  email?: string;
  password?: string;
  password_confirm?: string;
  role?: string;
  id: string;
  following: [] | string[];
  avatar_url: string;
  background_img: string;
}

export interface ILoggedUser {
  username?: string;
  name: string;
  cpf?: string;
  adress?: IAdress;
  email?: string;
  password?: string;
  role?: string;
  id: string;
  following: [] | number[];
  avatar_url: string;
  background_img: string;
}

export interface IAdress {
  cep?: string;
  logradouro?: string;
  complemento?: string;
  bairro?: string;
  localidade?: string;
  uf?: string;
  ibge?: string;
  gia?: string;
  ddd?: string;
  siafi?: string;
  erro?: string;
}

export interface IAuth {
  user: IUser;
  loading: boolean;
  cep: IAdress;
  cepError: boolean;
  cepRequest: (e: React.FocusEvent<HTMLInputElement, Element>) => Promise<void>;
  setUser: React.Dispatch<React.SetStateAction<IUser>>;
  logout: () => void;
  posts: IPost[];
  setPosts: any;
  users: IUser[];
  setUsers: any;
  updateProfile: SubmitHandler<IUpdateUser>;
  techs: ITechData[];
  setTechs: any;
}

interface IPost {
  content: string;
  id: number | string;
  userId: number | string;
}

interface IPost {
  content: string;
  id: number | string;
  userId: number | string;
}

export interface ICoreResponse {
  accessToken: string;
  user: IUser;
}

export interface INotification {
  // prettier-ignore
  updateToast: (toastRef: Id, message: string, position: ToastPosition, type: UpdateOptions["type"]) => void;
  base: ToastOptions;
}

export interface IStateType {
  from: { pathname: string };
}
