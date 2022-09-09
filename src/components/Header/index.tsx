import { HeaderContainer } from "./styles";
import { AiOutlineSearch, AiOutlineUser } from "react-icons/ai";
import { VscHome } from "react-icons/vsc";
import { IHeader } from "../../interfaces/components";
import Button from "../Button";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export const Header = ({ src, h2, location }: IHeader) => {
  const { user, logout } = useContext(AuthContext);

  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <div className="HeaderContent">
        <img className="userLogoMobile" src={user.avatar_url} alt="" />

        <h2 className="HeaderPortfyLogo">Portfy</h2>
        {location === "feed" ? (
          <VscHome
            size={30}
            color="var(--white)"
            className="HeaderHomeButton"
            onClick={() => navigate("/feed")}
          />
        ) : (
          <AiOutlineUser
            size={30}
            color="var(--white)"
            onClick={() => navigate("/dashboard")}
          />
        )}
      </div>
      <div className="SearchInputContainer">
        <input
          className="SearchInput"
          type="text"
          placeholder="Digite sua pesquisa aqui"
        />
        <button className="HeaderButtons">
          <AiOutlineSearch
            size={25}
            color="var(--medium-grey)"
            className="SearchButton"
          />
        </button>
      </div>
      <div className="HeaderUserConfigs">
        {src ? (
          <img className="userLogoDesktop" src={src} alt="" />
        ) : (
          <img
            className="userLogoDesktop"
            src={user.avatar_url}
            alt=""
          />
        )}
        {h2 ? (
          <h2 className="HeaderUserName">{h2}</h2>
        ) : (
          <h2 className="HeaderUserName">Francisco Stenico</h2>
        )}
      </div>
      <Button
        buttonStyle="primary"
        bg="var(--medium-blue)"
        hover="var(--dark-blue)"
        color="var(--white)"
        onClick={logout}
      >
        Logout
      </Button>
    </HeaderContainer>
  );
};
