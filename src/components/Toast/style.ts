import { ToastContainer } from "react-toastify";
import styled from "styled-components";

export const ToastBox = styled(ToastContainer)`
  .Toastify__toast-theme--light {
    border: 1px solid var(--ligth-grey);
    font-family: "Poppins" sans-serif;
    font-weight: 700;
    font-size: 0.8rem;
  }
`;
