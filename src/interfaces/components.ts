import {
  ButtonHTMLAttributes,
  FormHTMLAttributes,
  HTMLAttributes,
  InputHTMLAttributes,
  ReactNode,
} from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";
import { ISelectOptions } from "../components/Input/options";
import { IAdress } from "./contexts";

export interface IGeneralProps {
  children: ReactNode;
}

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonStyle?: "primary" | "secondary";
  children?: ReactNode;
  color?: string;
  bg?: string;
  disColor?: string;
  hover?: string;
}

export interface IFormulary extends FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode;
}

export interface IInputProps2 extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  register: UseFormRegister<FieldValues>;
  error?: string;
  select?: boolean;
  options?: ISelectOptions[];
  address?: IAdress;
  cep?: boolean;
}

export interface IPhoneFrameProps extends HTMLAttributes<HTMLDivElement> {
  slide: "top" | "bottom";
  delay: number;
  animation: string;
  frame?: string[];
  children?: ReactNode;
}

export interface IInputProps extends React.HTMLProps<HTMLImageElement> {
  type: string;
  placeholder: string;
}

export interface IPostContent {
  src?: string;
  h2?: string;
  p?: string;
  id?: string;
  token?: string;
  userId?: string;
  techs: ITechData[] | [];
}

export interface INews {
  id: number;
  tipo: string;
  titulo: string;
  introducao: string;
  link: string;
  imagens: string;
  editorias: string;
}

export interface IpostResponse {
  id: string;
  userAvatar: string;
  userID: string;
  userName: string;
  content: string;
}

export interface IPostList {
  postList: IpostResponse[];
}

export interface IPostProps {
  id?: string;
  userId?: string;
  userAvatar?: string;
  content?: string;
  userName?: string;
}

export interface ICardUserProps {
  iconMore?: JSX.Element;
  iconPaper?: JSX.Element;
  iconPencil?: JSX.Element;
  buttonIcon?: "none";
}

export interface IHeader {
  src?: string;
  h2?: string;
  location?: string;
}

export interface IPageBulb {
  feed: boolean;
  search: boolean;
  dashboard: boolean;
  chat: boolean;
}

export interface ITechData {
  name: string;
  status: string;
  id: number | string;
  userId: number | string;
}
