import { createContext } from "react";
import { ToastOptions, Id, toast, UpdateOptions } from "react-toastify";
import Toast from "../components/Toast";
import { IGeneralProps } from "../interfaces/components";
import { INotification } from "../interfaces/contexts";

import "react-toastify/dist/ReactToastify.css";

export const NotificationContext = createContext<INotification>(
  {} as INotification
);

const NotificationProvider = ({ children }: IGeneralProps) => {
  const base = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  } as ToastOptions;

  const updateToast = (
    toastRef: Id,
    message: string,
    position: ToastOptions["position"],
    type: UpdateOptions["type"],
  ) => {
    const settings = {
      ...base,
      position: position,
      render: message,
      type: type,
      isLoading: false,
    } as UpdateOptions;

    setTimeout(() => {
      toast.update(toastRef, settings);
    }, 500);
  };

  return (
    <NotificationContext.Provider value={{ updateToast, base }}>
      {children}
      <Toast />
    </NotificationContext.Provider>
  );
};

export default NotificationProvider;
