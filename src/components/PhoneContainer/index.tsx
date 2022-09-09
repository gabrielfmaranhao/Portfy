import { useContext, useEffect, useState } from "react";
import { SwitchContext } from "../../contexts/SwitchContext";
import { Phone } from "../PhoneFrame/styles";
import { PhoneBox, PhoneContent } from "./styles";

const PhoneContainer = () => {
  const [aName, setAName] = useState("slide-from");
  const [display, setDisplay] = useState("flex");
  const { screenSwitcher } = useContext(SwitchContext);

  useEffect(() => {
    if (Object.values(screenSwitcher).some((idx) => idx)) {
      setAName("slide-back");
      setTimeout(() => {
        setDisplay("none")
      }, 990);
    } else {
      setDisplay("flex")
      setAName("slide-from");
    }
  }, [screenSwitcher]);

  return (
    <PhoneBox display={display}>
      <Phone slide="top" delay={1000} animation={aName}>
        <span></span>
        <PhoneContent aSettings="picture-transition-1 infinite 26s linear" />
      </Phone>
      <div>
        <Phone slide="top" delay={1200} animation={aName}>
          <span></span>
          <PhoneContent aSettings="picture-transition-4 infinite 32s linear" />
        </Phone>
        <Phone slide="bottom" delay={1200} animation={aName}>
          <span></span>
          <PhoneContent aSettings="picture-transition-3 infinite 30s linear" />
        </Phone>
      </div>
      <Phone slide="bottom" delay={1500} animation={aName}>
        <span></span>
        <PhoneContent aSettings="picture-transition-2 infinite 28s linear" />
      </Phone>
    </PhoneBox>
  );
};

export default PhoneContainer;
