import { IFormulary } from "../../interfaces/components";
import Form from "./styles";

const Formulary = ({children, ...rest}: IFormulary) => (
  <Form {...rest}>
    {children}
  </Form>
);

export default Formulary;
