import { ReactNode } from "react";
import { Container } from "./styles";

interface FormGroupProps {
    children: ReactNode;
    error?: string | null;
}

export default function FormGroup({ children, error = null }: FormGroupProps) {
    return (
        <Container>
            {children}
            {error && <small>{error}</small>}
        </Container>
    );
}
