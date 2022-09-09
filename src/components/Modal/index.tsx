import { ReactNode } from "react"
import { Container } from "./style"

interface IModal {
  children: ReactNode
}
export const Modal = ({ children }:IModal) => {
return (
  <Container>
    <div>
      {children}
    </div>
  </Container>
)
}