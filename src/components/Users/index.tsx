import { useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { IUser } from "../../interfaces/contexts";
import api from "../../services/api";
import {
  ButtonFolow,
  ButtonUnFolow,
  ContainerCardUsers,
  LiContainer,
} from "./style";

const stringFoto =
  "data:image/jpeg;base64,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";

const CardUsers = () => {
  const { user, setUser, users, setUsers } = useContext(AuthContext);

  useEffect(() => {
    api.get<IUser[]>("/users").then((res) => {
      setUsers(res.data);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const followOrUnfollow = (id: string) => {
    let newUser = user;
    const verificacao = user.following.findIndex((ele) => {
      return ele === id;
    });

    if (verificacao !== -1) {
      newUser.following.splice(verificacao, 1);
      api
        .put(`/users/${localStorage.getItem("@portfy(id)")}`, newUser)
        .then((res) => setUser(res.data));
    } else {
      newUser.following = [...user.following, id];
      api
        .put(`/users/${localStorage.getItem("@portfy(id)")}`, newUser)
        .then((res) => setUser(res.data));
    }
  };

  return (
    <ContainerCardUsers>
      <h2>Usuários</h2>
      {users.length < 1 ? (
        <p>Ninguem para seguir</p>
      ) : (
        <ul>
          {users.map((use) => {
            if (use.id !== user.id) {
              return (
                <LiContainer key={use.id}>
                  <figure>
                    <img
                      src={use.avatar_url ? use.avatar_url : stringFoto}
                      alt={use.name}
                    />
                  </figure>
                  <div>
                    <h3>{use.username}</h3>
                    {user.following.some((idFol) => idFol === use.id) ? (
                      <ButtonUnFolow onClick={() => followOrUnfollow(use.id)}>
                        Seguindo
                      </ButtonUnFolow>
                    ) : (
                      <ButtonFolow onClick={() => followOrUnfollow(use.id)}>
                        Seguir
                      </ButtonFolow>
                    )}
                  </div>
                </LiContainer>
              );
            }
          })}
        </ul>
      )}
    </ContainerCardUsers>
  );
};

export default CardUsers;
