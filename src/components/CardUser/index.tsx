import { ICardUserProps } from "../../interfaces/components";
import { ButtonIcon, ContainerCardUser } from "./style";
import { useContext, useEffect, useState } from "react";
import { SwitchContext } from "../../contexts/SwitchContext";
import { AuthContext } from "../../contexts/AuthContext";
import api from "../../services/api";

// prettier-ignore
const CardUser = ({ iconMore, iconPaper, iconPencil, buttonIcon }: ICardUserProps) => {
  
  const [totalSeguidores, setTotalSeguidores] = useState(0);
 
  const { user, users, techs, setTechs} = useContext(AuthContext);
  const { setAddTechs, setUpdateUser, addTechs, updateUser } =
    useContext(SwitchContext);
    
  useEffect(() => {
    // users.forEach(element => {
    //   const ehSeguidor = element.following.some(idUser => idUser === user.id)
    //   if(ehSeguidor){
    //     setTotalSeguidores(totalSeguidores + 1)
    //   }
    // });

    api
    .get("/techs")
    .then((res) => setTechs(res.data))
    .catch((err) => console.log(err));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <ContainerCardUser cover={user?.background_img}>
      <figure className="cover-photo" />
      <div className="user-description">
        <img
          src={user.avatar_url}
          alt="Foto do perfil do usuário"
        />
        <div className="description-icon">
          <div className="userName">
            <h2>{user.username}</h2> 
            <p>{techs.filter((elem: any) => elem.userId === user.id).map((tech: any) => tech.name).join(" | ")}</p>
          </div>
          <div className="icon">
            {
              iconPencil ? (
                <ButtonIcon
                  display={buttonIcon}
                  onClick={() => setUpdateUser(!updateUser)}
                >
                  {iconPencil}
                </ButtonIcon>

              ) : (
                <ButtonIcon
                  display={buttonIcon}
                  onClick={() => setAddTechs(!addTechs)}
                >
                  {iconMore}
                </ButtonIcon>
            )}
          </div>
        </div>
      </div>
      <div className="followers-following">
        <div className="followers-following-children">
          <p>{totalSeguidores}</p>
          <span>Seguidores</span>
        </div>
        <div className="followers-following-children">
          <p>{user.following.length}</p>
          <span>Seguindo</span>
        </div>
      </div>
    </ContainerCardUser>
  );
};

export default CardUser;
