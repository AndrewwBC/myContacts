import { Link } from "react-router-dom";
import { Container } from "./styles";
import arrow from "../../assets/images/icons/arrow.svg";

interface PageHeader {
    title: string;
}

export default function PageHeader({ title }: PageHeader) {
    return (
        <Container>
            <Link to="/">
                <img src={arrow} alt="Back" />
                <span>Voltar</span>
            </Link>
            <h1>{title}</h1>
        </Container>
    );
}
