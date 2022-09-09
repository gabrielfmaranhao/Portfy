import { IButtonProps } from "../../interfaces/components";
import { PrimaryButton, SecondaryButton } from "./styles";

const Button = ({ buttonStyle, children, bg, color, hover, disColor, ...rest }: IButtonProps) =>
  buttonStyle === "primary" ? (
    <PrimaryButton
      bg={bg}
      color={color}
      hover={hover}
      disColor={disColor}
      {...rest}
    >
      {children}
    </PrimaryButton>
  ) : (
    <SecondaryButton
      bg={bg}
      color={color}
      hover={hover}
      disColor={disColor}
      {...rest}
    >
      {children}
    </SecondaryButton>
  );

export default Button;
