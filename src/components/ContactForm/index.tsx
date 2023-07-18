import { ChangeEvent, FormEvent, useState } from "react";

import isEmailValid from "../../utils/isEmailValid.tsx";
import useErrors from "../../hooks/useErrors.tsx";

import { ButtonContainer, Form } from "./styles";

import FormGroup from "../FormGroup";
import Button from "../Button";
import Input from "../Input";
import Select from "../Select";
import formatPhone from "../../utils/formatPhone.tsx";

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

  const { errors, setError, removeError, getErrorMessageByFieldName } =
    useErrors();

  const isFormValid = name && errors.length === 0;

  function handleEmailChange(event: ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);

    if (event.target.value && !isEmailValid(event.target.value)) {
      setError({ field: "email", message: "E-mail inválido." });
    } else {
      removeError("email");
    }
  }

  function handleNameChange(event: ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);

    if (!event.target.value) {
      setError({ field: "name", message: "Nome é obrigatório!" });
    } else {
      removeError("name");
    }
  }

  function handlePhoneChange(event: ChangeEvent<HTMLInputElement>) {
    setPhone(formatPhone(event.target.value));
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

  return (
    <Form onSubmit={handleSubmit} noValidate>
      <FormGroup error={getErrorMessageByFieldName("name")}>
        <Input
          error={getErrorMessageByFieldName("name")}
          placeholder="Nome *"
          value={name}
          onChange={handleNameChange}
        />
      </FormGroup>

      <FormGroup error={getErrorMessageByFieldName("email")}>
        <Input
          type="email"
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
          onChange={handlePhoneChange}
          maxLength={15}
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
        <Button disabled={!isFormValid} type="submit">
          {buttonLabel}
        </Button>
      </ButtonContainer>
    </Form>
  );
}
