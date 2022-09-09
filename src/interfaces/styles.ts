import { ButtonHTMLAttributes, SelectHTMLAttributes } from "react";

export interface IStyledButton {
  color?: string;
  bg?: string;
  disColor?: string;
  hover?: string;
}

export interface IStyledInput extends SelectHTMLAttributes<HTMLSelectElement> {
  border: () => string;
}

export interface IPhoneBG {
  aSettings: string;
}

export interface IButtonIconProp extends ButtonHTMLAttributes<HTMLButtonElement> {
  display?: string
}

export interface IPhoneBox {
  display?: string;
  animation?: string;
}

export interface IGeneralAnimations {
  form?: string;
  text?: string;
  friendList?: string;
}

export interface IAnimationContent {
  display?: string;
  animation?: string;
  mobile?: boolean;
}

export interface ILoadStyleProps {
  origin: number;
  size: number;
  color: string;
  duration: number;
  reverse?: string | boolean;
}

export interface IFriendListSlide {
  yPos?: string;
  animationName?: string;
}

export interface IUserBG {
  cover: string;
}