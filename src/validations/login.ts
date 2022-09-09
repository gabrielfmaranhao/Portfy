import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Formato de email inválido")
    .required("Email obrigatório"),
  password: yup
    .string()
    .min(8, "Sua senha deve conter no mínimo 8 caracteres")
    .required("Senha obrigatória"),
});
