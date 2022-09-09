import { useEffect } from "react";
import { Request } from "../../backup/post";
import { useContext } from "react";
import CardUser from "../../components/CardUser";
import FooterMobile from "../../components/FooterMobile";
import FriendList from "../../components/FriendList";
import { Header } from "../../components/Header";
import { CardsNews } from "../../components/CardsNews";
import PostList from "../../components/PostList";
import { VscFilePdf } from "react-icons/vsc";
import { AuthContext } from "../../contexts/AuthContext";
import { ContainerFeed, DivLeft, DivMidle, DivRight, MainFeed } from "./style";
import { AiFillEdit, AiOutlineClose, AiOutlinePlus } from "react-icons/ai";
import { Modal } from "../../components/Modal";
import Form from "../../components/Formulary/styles";
import { SwitchContext } from "../../contexts/SwitchContext";
import Button from "../../components/Button";
import CustomInput from "../../components/Input";
import { useForm } from "react-hook-form";
import { IUpdateUser } from "../../interfaces/pages";
import { UploaderButton } from "../../components/Button/styles";
import api from "../../services/api";
import { toast } from "react-toastify";
import { NotificationContext } from "../../contexts/NotificationContext";
import { IUser } from "../../interfaces/contexts";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { user, setUser, setPosts, updateProfile } = useContext(AuthContext);
  const { updateUser, setUpdateUser, uploader } = useContext(SwitchContext);
  const { updateToast, base } = useContext(NotificationContext);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUpdateUser>();

  useEffect(() => {
    Request.get("/posts")
      .then((response) => setPosts(response.data))
      .catch((erro) => console.log(erro));
      setUpdateUser(false);
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const deleteAccount = async () => {
    const load = toast.loading("Solicitação em andamento...", {
      ...base,
      position: "top-left",
    });
    api.delete(`/users/${user.id}`).then(() => {
      setUser({} as IUser);
      updateToast(load, "Sua conta foi excluída", "top-left", "warning");

      localStorage.removeItem("@portfy(token)");
      localStorage.removeItem("@portfy(id)");
      navigate("/welcome", { replace: true });
    });
  };

  return (
    <ContainerFeed>
      <Header h2={user.username} location="feed" />
      <MainFeed>
        <DivLeft>
          <div>
            <CardUser iconPencil={<AiFillEdit size={20} />} />
          </div>
        </DivLeft>
        <DivMidle>
          <FriendList />
        </DivMidle>
      </MainFeed>
      <DivRight>
        <CardsNews />
      </DivRight>
      <FooterMobile />
      {updateUser && (
        <Modal>
          <Form onSubmit={handleSubmit(updateProfile)}>
            <header className="divHeader">
              <h3>Atualizar Perfil</h3>
              <AiOutlineClose onClick={() => setUpdateUser(!updateUser)} />
            </header>
            <CustomInput
              id="username"
              label="Nome de usuário"
              placeholder="Insira o novo nome de usuário"
              register={register}
              error={errors?.username?.message}
            />
            <div className="doubled__buttons">
              <UploaderButton
                uploader={uploader}
                options={{ multi: false }}
                onComplete={(files) =>
                  setUser({ ...user, avatar_url: files[0].fileUrl })
                }
              >
                {({ onClick }) => (
                  <Button
                    bg="var(--medium-grey)"
                    color="var(--white)"
                    hover="var(--dark-grey)"
                    onClick={onClick}
                  >
                    Alterar avatar
                  </Button>
                )}
              </UploaderButton>
              <UploaderButton
                uploader={uploader}
                options={{ multi: false }}
                onComplete={(files) =>
                  setUser({ ...user, background_img: files[0].fileUrl })
                }
              >
                {({ onClick }) => (
                  <Button
                    bg="var(--medium-grey)"
                    color="var(--white)"
                    hover="var(--dark-grey)"
                    onClick={onClick}
                  >
                    Alterar capa
                  </Button>
                )}
              </UploaderButton>
            </div>
            <div className="doubled__buttons">
              <Button
                buttonStyle="primary"
                bg="var(--ligth-blue)"
                color="var(--white)"
                disColor="var(--disabled-blue)"
                hover="var(--medium-blue)"
                type="submit"
              >
                Salvar
              </Button>
              <Button
                buttonStyle="primary"
                bg="var(--color-negative)"
                color="var(--white)"
                hover="var(--negative-hover)"
                onClick={deleteAccount}
                type="button"
              >
                Apagar Conta
              </Button>
            </div>
          </Form>
        </Modal>
      )}
    </ContainerFeed>
  );
};

export default Dashboard;
