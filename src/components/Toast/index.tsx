import { ToastBox } from "./style";

const Toast = () => {
  return (
    <ToastBox
      position="top-right"
      autoClose={4000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  );
};

export default Toast;
