import axios from "axios";
import { createContext, useEffect, useState, useContext } from "react";
import { SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { IGeneralProps, ITechData } from "../interfaces/components";
import { IAdress, IAuth, IUser } from "../interfaces/contexts";
import { IUpdateUser } from "../interfaces/pages";
import api from "../services/api";
import { NotificationContext } from "./NotificationContext";
export const AuthContext = createContext<IAuth>({} as IAuth);

const AuthProvider = ({ children }: IGeneralProps) => {
  const [user, setUser] = useState<IUser>({} as IUser);
  const [users, setUsers] = useState<IUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [techs, setTechs] = useState<ITechData[]>([]);

  const [cep, setCep] = useState<IAdress>({});
  const [cepError, setCepError] = useState(false);

  const { base, updateToast } = useContext(NotificationContext);

  const navigate = useNavigate();

  const updateProfile: SubmitHandler<IUpdateUser> = async ({ username }) => {
    const load = toast.loading("Aguarde", { ...base, position: "top-right" });

    const options = { ...user, username: username };
    await api
      .put<IUser>(`/users/${user.id}`, options)
      .then(({ data }) => {
        setUser(data);
        updateToast(
          load,
          "Perfil atualizado com sucesso",
          "top-right",
          "success"
        );
      })
      .catch(
        (error) =>
          console.log(
            error
          ) /* updateToast(load, "Ocorreu um erro", "top-right", "error") */
      );
  };

  const logout = () => {
    localStorage.removeItem("@portfy(token)");
    localStorage.removeItem("@portfy(id)");
    navigate("/welcome", { replace: true });
  };

  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem("@portfy(token)");
      const idUser = localStorage.getItem("@portfy(id)");

      if (token) {
        api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        api.get(`/users/${idUser}`).then((res) => setUser(res.data));
        navigate("/feed", { replace: true });
      }

      setTimeout(() => {
        setLoading(false);
      }, 1000);
    };
    loadUser();
  }, []);

  const cepRequest = async (e: React.FocusEvent<HTMLInputElement, Element>) => {
    try {
      const { data } = await axios.get<IAdress>(
        `https://viacep.com.br/ws/${e.target.value}/json/`
      );
      if (data.erro) {
        setCepError(true);
      } else {
        setCep(data);
        setCepError(false);
      }
    } catch (error) {
      setCepError(true);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        cep,
        cepError,
        setUser,
        logout,
        cepRequest,
        posts,
        setPosts,
        users,
        setUsers,
        updateProfile,
        techs,
        setTechs,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
