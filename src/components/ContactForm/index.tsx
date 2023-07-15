import { ChangeEvent, FormEvent, useState } from "react";

import isEmailValid from "../../utils/isEmailValid.tsx";

import { ButtonContainer, Form } from "./styles";

import FormGroup from "../FormGroup";
import Button from "../Button";
import Input from "../Input";
import Select from "../Select";

interface ContactFormProps {
  buttonLabel: string;
}

interface ErrorTypes {
  field?: string;
  message?: string;
}
export default function ContactForm({ buttonLabel }: ContactFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [category, setCategory] = useState("");
  const [errors, setErrors] = useState<object[]>([]);

  function handleEmailChange(event: ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);

    if (event.target.value && !isEmailValid(event.target.value)) {
      const errorAlreadyExists = errors.find(
        (error: ErrorTypes) => error.field === "email"
      );

      if (errorAlreadyExists) {
        return;
      }

      setErrors((prevState) => [
        ...prevState,
        { field: "email", message: "E-mail inválido." },
      ]);
    } else {
      setErrors((prevState) => [
        prevState.filter((error: ErrorTypes) => error.field !== "email"),
      ]);
    }
  }

  function handleNameChange(event: ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);

    if (!event.target.value) {
      setErrors((prevState) => [
        ...prevState,
        { field: "name", message: "Nome é obrigatório" },
      ]);
    } else {
      setErrors((prevState) =>
        prevState.filter((error: ErrorTypes) => error.field !== "name")
      );
    }
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    console.log({
      name,
      email,
      phone,
      category,
    });
  }

  function getErrorMessageByFieldName(fieldName: string) {
    return errors.find((error: ErrorTypes) => error.field === fieldName)
      ?.message;
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup error={getErrorMessageByFieldName("name")}>
        <Input
          error={getErrorMessageByFieldName("name")}
          placeholder="Nome"
          value={name}
          onChange={handleNameChange}
        />
      </FormGroup>

      <FormGroup error={getErrorMessageByFieldName("email")}>
        <Input
          error={getErrorMessageByFieldName("email")}
          placeholder="E-mail"
          value={email}
          onChange={handleEmailChange}
        />
      </FormGroup>

      <FormGroup>
        <Input
          placeholder="Telefone"
          value={phone}
          onChange={({ target }) => setPhone(target.value)}
        />
      </FormGroup>

      <FormGroup>
        <Select
          value={category}
          onChange={({ target }) => setCategory(target.value)}
        >
          <option value="">Categoria</option>
          <option value="instagram">Instagram</option>
          <option value="discord">Discord</option>
        </Select>
      </FormGroup>

      <ButtonContainer>
        <Button type="submit">{buttonLabel}</Button>
      </ButtonContainer>
    </Form>
  );
}
