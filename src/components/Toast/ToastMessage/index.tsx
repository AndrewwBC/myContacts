import { Container } from "./styles";

interface ToastMessageProps {
  text: string;
  type: "default" | "success" | "danger";
}

import errorIcon from "../../../assets/images/icons/errorIcon.svg";
import successIcon from "../../../assets/images/icons/successIcon.svg";

export default function ToastMessage({ text, type }: ToastMessageProps) {
  return (
    <Container type={type}>
      {type === "danger" && <img src={errorIcon} alt="X" />}
      {type === "success" && <img src={successIcon} alt="X" />}
      <strong>{text}</strong>
    </Container>
  );
}
