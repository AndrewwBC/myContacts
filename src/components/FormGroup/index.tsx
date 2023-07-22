import { ReactNode } from "react";
import { Container } from "./styles";
import Spinner from "../Spinner";
import Loader from "../Loader";

interface FormGroupProps {
  children: ReactNode;
  error?: string | null;
  isLoading?: boolean;
}

export default function FormGroup({
  children,
  error = null,
  isLoading,
}: FormGroupProps) {
  return (
    <Container>
      <div className="form-item">
        {children}
        {isLoading && (
          <div className="loader">
            <Spinner size={16} />
          </div>
        )}
      </div>
      {error && <small>{error}</small>}
    </Container>
  );
}
