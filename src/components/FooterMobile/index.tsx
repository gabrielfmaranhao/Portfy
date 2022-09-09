import { ContainerFooterMobile } from "./style";
import { AiFillHome } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { BsChatDots, BsChatDotsFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { useContext, useState } from "react";
import { SwitchContext } from "../../contexts/SwitchContext";

const FooterMobile = () => {
  const [bulb, setBulb] = useState(false);
  const { hideFL, setHideFL } = useContext(SwitchContext);

  const openChat = () => {
    setBulb(!bulb);
    setHideFL(!hideFL);
  };

  return (
    <ContainerFooterMobile>
      <div className="FooterIcons">
        <AiFillHome size={30} />
        <AiOutlineSearch size={30} />
        {bulb ? (
          <BsChatDotsFill size={30} onClick={openChat} />
        ) : (
          <BsChatDots size={30} onClick={openChat} />
        )}
        <FaUserAlt size={30} />
      </div>
    </ContainerFooterMobile>
  );
};

export default FooterMobile;
