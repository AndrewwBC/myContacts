import { useEffect, useState } from "react";
import ToastMessage from "../ToastMessage";
import { Container } from "./styles";

interface MessageProps {
  id: string;
  type: string;
  text: string;
}

export default function ToastContainer() {
  const [messages, setMessages] = useState<any>([]);

  useEffect(() => {
    function handleAddToast(event) {
      const { type, text } = event.detail;

      setMessages((prevState) => [
        ...prevState,
        { id: Math.random(), type, text },
      ]);
    }

    document.addEventListener("addtoast", handleAddToast);

    return () => {
      document.removeEventListener("addtoast", handleAddToast);
    };
  }, []);

  return (
    <Container>
      {messages.map((message: MessageProps) => (
        <ToastMessage
          key={message.id}
          text={message.text}
          type={message.type}
        />
      ))}
    </Container>
  );
}
