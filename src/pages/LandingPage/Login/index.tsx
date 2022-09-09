import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import api from "../../../services/api";
import Button from "../../../components/Button";
import CustomInput from "../../../components/Input";
import Form from "../../../components/Formulary/styles";
import { AiFillGithub } from "react-icons/ai";
import { AuthContext } from "../../../contexts/AuthContext";
import { ICoreResponse, IStateType } from "../../../interfaces/contexts";
import { ILoginRequest } from "../../../interfaces/pages";
import { NotificationContext } from "../../../contexts/NotificationContext";
import { loginSchema } from "../../../validations/login";
import { SwitchContext } from "../../../contexts/SwitchContext";

const Login = () => {
  // prettier-ignore
  const { register, handleSubmit, formState: { errors } } = useForm<ILoginRequest>({
    resolver: yupResolver(loginSchema),
  });

  const navigate = useNavigate();
  const { state } = useLocation();
  const stateType = state as IStateType;

  const { setUser } = useContext(AuthContext);
  const { setScreenSwitcher } = useContext(SwitchContext)
  const { updateToast, base } = useContext(NotificationContext);

  const loginApply: SubmitHandler<ILoginRequest> = async (data) => {
    const load = toast.loading("Solicitação em andamento", {...base, position: "top-center"});
    try {
      const response = await api.post<ICoreResponse>("/login", data);
      // prettier-ignore
      api.defaults.headers.common["Authorization"] = `Bearer ${response.data.accessToken}`;
      localStorage.setItem("@portfy(token)", response.data.accessToken);
      localStorage.setItem("@portfy(id)", response.data.user.id);

      setUser(response.data.user);
      setScreenSwitcher({ login: false, register: false });
      updateToast(load, `Bem vindo ${response.data.user.name}`, "top-center", "success")

      const navPath = stateType?.from?.pathname || "/dashboard";
      navigate(navPath, { replace: true });
    } catch (error) {
      updateToast(load, "Usuário ou senha inválidos", "top-center", "error")
    }
  };

  return (
    <Form onSubmit={handleSubmit(loginApply)}>
      <h3>Login</h3>
      <CustomInput
        id="email"
        label="Email"
        type="email"
        placeholder="Insira seu email"
        register={register}
        error={errors?.email?.message}
      />
      <CustomInput
        id="password"
        label="Senha"
        type="password"
        placeholder="Insira sua senha"
        register={register}
        error={errors?.password?.message}
      />
      <Button
        buttonStyle="primary"
        bg="var(--ligth-blue)"
        color="var(--white)"
        disColor="var(--disabled-blue)"
        hover="var(--medium-blue)"
        type="submit"
      >
        Login
      </Button>
      <div>
        <h5>Acesse o repositório de nossa atividade:</h5>
        <a
          href="https://github.com/Projeto-final-de-React/Projet-final-de-React---Portfy"
          rel="noreferrer"
          target="_blank"
        >
          <AiFillGithub size={55} className="gitHub-icon" />
        </a>
      </div>
    </Form>
  );
};
export default Login;
