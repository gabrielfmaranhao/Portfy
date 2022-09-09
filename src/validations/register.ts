import * as yup from "yup";

export const registerSchema = yup.object().shape({
  username: yup
    .string()
    .min(4, "Deve conter ao menos 4 caracteres")
    .required("Insira seu nome de usuário"),
  name: yup.string().required("Insira seu nome completo"),
  cpf: yup.string().required("Insira os 11 caracteres de seu CPF").min(11),
  cep: yup
    .string()
    .max(8, "Deve conter 8 caracteres")
    .min(8, "Deve conter 8 caracteres"),
  email: yup
    .string()
    .email("Formato de email inválido")
    .required("Email obrigatório"),
  password: yup
    .string()
    .required("Senha obrigatória")
    .matches(/[A-Z]/, "deve conter ao menos 1 letra maiúscula")
    .matches(/([a-z])/, "deve conter ao menos 1 letra minúscula")
    .matches(/(\d)/, "deve conter ao menos 1 número")
    .matches(/(\W)|_/, "deve conter ao menos 1 caracter especial")
    .matches(/.{8,}/, "deve conter ao menos 8 dígitos"),
  password_confirm: yup
    .string()
    .min(8, "A senha deve conter ao menos 8 caracteres")
    .oneOf([yup.ref("password")], "As senhas devem ser idênticas."),
});
