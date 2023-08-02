interface ToastProps {
  type: string;
  text: string;
}

export default function toast({ type, text }: ToastProps) {
  const event = new CustomEvent("addtoast", {
    detail: {
      type: type,
      text: text,
    },
  });

  document.dispatchEvent(event);
}
