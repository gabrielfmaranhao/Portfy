import { BiErrorCircle } from "react-icons/bi";
import { IGeneralProps } from "../../interfaces/components";

import { ErrorTooltip } from "./styles";

const Tooltip = ({ children }: IGeneralProps) => {
  return (
    <ErrorTooltip>
      <BiErrorCircle />
      <p className="tooltip">{children}</p>
    </ErrorTooltip>
  );
};

export default Tooltip;
