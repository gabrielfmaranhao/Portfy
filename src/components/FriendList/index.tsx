import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { SwitchContext } from "../../contexts/SwitchContext";
import { DivContainer } from "./style";

const stringFoto =
  "https://i.pinimg.com/originals/ff/a0/9a/ffa09aec412db3f54deadf1b3781de2a.png";

const FriendList = () => {
  const [position, setPosition] = useState("-70vh");

  const { users, user } = useContext(AuthContext);

  const { hideFL, animation, setAnimation } =
    useContext(SwitchContext);

  useEffect(() => {
    if (hideFL) {
      setAnimation({ ...animation, friendList: "slide-out" });
      setTimeout(() => {
        setPosition("-70vh");
      }, 290);
    } else {
      setAnimation({ ...animation, friendList: "slide-in" });
      setTimeout(() => {
        setPosition("0");
      }, 290);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hideFL]);

  return (
    <DivContainer className="container__friends" animationName={animation.friendList} yPos={position}>
      <div className="friendlist__header">
        <h2>Amigos</h2>
      </div>
      {user.following.length > 0 ? (
        <ul>
          {user.following.map((idFollow) => {
            const friend = users.find((u) => u.id === idFollow);
            return (
              <li key={idFollow}>
                <img
                  src={friend?.avatar_url ? friend.avatar_url : stringFoto}
                  alt={friend?.name}
                />
                <p>{friend?.username}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>A Lista de amigos está vazia. Adicione amigos</p>
      )}
    </DivContainer>
  );
};

export default FriendList;
