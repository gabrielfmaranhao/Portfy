import { createContext, useState } from "react";
import { Uploader } from "uploader";
import { IGeneralProps } from "../interfaces/components";
import { ISwitcherContext } from "../interfaces/contexts";
import { ISwitcher } from "../interfaces/pages";
import { IGeneralAnimations } from "../interfaces/styles";

export const SwitchContext = createContext<ISwitcherContext>(
  {} as ISwitcherContext
);

const SwitchProvider = ({ children }: IGeneralProps) => {
  const [screenSwitcher, setScreenSwitcher] = useState<ISwitcher>({
    login: false,
    register: false,
  });
  const [text, setText] = useState(
    "Compartilhe, crie e busque portfólios profissionais de maneira simples e intuitiva."
    );
    const [condicionModal, setCondicionlModal] = useState<boolean>(false);
    const [hideFL, setHideFL] = useState(true);
    const [animation, setAnimation] = useState<IGeneralAnimations>({
      form: "",
    friendList: "",
    text: "fade-in 1 250ms linear",
  });
  const [updateUser, setUpdateUser] = useState<boolean>(false);
  const [addTechs, setAddTechs] = useState<boolean>(false);
  
  const uploader = new Uploader({
    apiKey: "public_12a1xpN95cSJca11WdwpqVJMa6Qi",
  });

  const textFade = (str: string, btn: string) => {
    btn === "login"
    ? setScreenSwitcher({ login: true, register: false })
    : btn === "register"
    ? setScreenSwitcher({ login: false, register: true })
      : setScreenSwitcher({ login: false, register: false });

    setAnimation({ ...animation, text: "fade-out 1 250ms linear" });
    setTimeout(() => {
      setAnimation({ ...animation, text: "fade-in 1 250ms linear" });
      setText(str);
    }, 240);
  };

  return (
    <SwitchContext.Provider
      value={{
        screenSwitcher,
        setScreenSwitcher,
        condicionModal,
        setCondicionlModal,
        animation,
        setAnimation,
        hideFL,
        setHideFL,
        setUpdateUser,
        setAddTechs,
        updateUser,
        addTechs,
        textFade,
        text, 
        uploader

      }}
    >
      {children}
    </SwitchContext.Provider>
  );
};

export default SwitchProvider;
