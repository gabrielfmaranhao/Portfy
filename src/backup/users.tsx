import {
  useContext,
  useState,
  useEffect,
  createContext,
  ReactNode,
} from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import api from "../services/api";
import { toast } from "react-toastify";
import { IUser } from "../interfaces/contexts";

export interface IUserContext {
  arrayUsers: IUser[] | [];
  updateUser: (data: IUser) => Promise<void>;
  deleteUser: () => Promise<void>;
}
export interface IUserProviderProps {
  children: ReactNode;
}

export const UserContext = createContext<IUserContext>({} as IUserContext);

const UserProvider = ({ children }: IUserProviderProps) => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(AuthContext);
  const [userId, setUserId] = useState<string | number>("");
  const [arrayUsers, setArrayUsers] = useState<IUser[] | []>([]);

  useEffect(() => {
    setUserId(user.id);

    api
      .get<IUser[] | []>(`/users`)
      .then((res) => setArrayUsers(res.data))
      .catch((err) => console.log(err));

    // const getUsersList = async () => {
    //   try {
    //     const { data } = await api.get<IUser[] | []>(`/users`);
    //     setArrayUsers(data);
    //     console.log(data);

    //     //setUser(filteredUser[0]);
    //   } catch (errors) {
    //     console.error(errors);
    //   }
    // };

    //  getUsersList();
  }, []);

  const updateUser = async (data: IUser) => {
    try {
      const updatedData = await api.put<IUser>(`users/${userId}`, data);
      setUser(updatedData.data);
      toast.success("Dados atualizados");
    } catch (errors) {
      console.error(errors);
      toast.error("Erro ao atualizar os dados");
    }
  };

  const deleteUser = async () => {
    try {
      await api.delete(`users/${userId}`);
      localStorage.removeItem("@portfy(token)");
      toast.success(`Sua conta foi excluída!`);
      navigate(`/`, { replace: true });
    } catch (errors) {
      console.error(errors);
    }
  };
  return (
    <UserContext.Provider value={{ arrayUsers, updateUser, deleteUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
