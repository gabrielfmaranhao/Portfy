import { useContext } from "react";
import { SwitchContext } from "../../contexts/SwitchContext";
import { IPhoneFrameProps } from "../../interfaces/components";
import { Phone } from "./styles";

const PhoneFrame = ({ slide, delay, animation, children, ...rest }: IPhoneFrameProps) => {
  const { screenSwitcher } = useContext(SwitchContext);
  console.log(screenSwitcher)
  return (
    <Phone slide={slide} delay={delay} animation={animation} {...rest} >
      {children}
    </Phone>
  );
}

export default PhoneFrame;
