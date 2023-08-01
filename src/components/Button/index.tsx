import Spinner from "../Spinner";
import { StyledButton } from "./styles";
import { ReactNode } from "react";

interface ButtonProps {
  type: "button" | "reset" | "submit" | undefined;
  isLoading: boolean;
  disabled: boolean;
  children: ReactNode;
}

export default function Button({
  type,
  disabled,
  isLoading,
  children,
}: ButtonProps) {
  return (
    <StyledButton type={type} disabled={disabled || isLoading}>
      {isLoading ? <Spinner size={16} /> : children}
    </StyledButton>
  );
}
