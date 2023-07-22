import Spinner from "../Spinner";
import { Overlay } from "./styles";
import ReactDOM from "react-dom";

interface LoaderProps {
  isLoading: boolean;
}

export default function Loader({ isLoading }: LoaderProps) {
  if (!isLoading) {
    return null;
  }

  return ReactDOM.createPortal(
    <Overlay>
      <Spinner size={90} />
    </Overlay>,
    document.getElementById("loader-root") as HTMLElement
  );
}
