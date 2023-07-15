import Button from "../Button";
import ReactDOM from "react-dom";
import { Container, Overlay, Footer } from "./styles";

interface ModalProps {
    danger: boolean;
}

export default function Modal({ danger = false }: ModalProps) {
    return ReactDOM.createPortal(
        <Overlay>
            <Container danger={danger}>
                <h1>Título do Modal</h1>
                <p>Corpo do modal</p>
                <Footer>
                    <button type="button" className="cancel-button">
                        Cancelar
                    </button>
                    <Button danger={danger} type="button">
                        Deletar
                    </Button>
                </Footer>
            </Container>
        </Overlay>,
        document.getElementById("modal-root") as HTMLElement
    );
}
