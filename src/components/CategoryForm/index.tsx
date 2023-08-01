import { FormEvent, useState } from "react";
import Button from "../Button";
import FormGroup from "../FormGroup";
import Input from "../Input";
import { ButtonContainer, Form } from "./styles";
import CategoryService from "../../services/CategoryService";

export default function CategoryForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [categorie, setCategorie] = useState({
    name: "",
  });

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    try {
      setIsLoading(true);
      const response = await CategoryService.createCategorie(categorie);
      console.log(response);
    } catch (err) {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup error={hasError}>
        <Input
          type="text"
          placeholder="Nome da Categoria"
          onChange={(e) => setCategorie({ name: e.target.value })}
        />
      </FormGroup>
      <ButtonContainer>
        <Button
          children={"Criar Categoria"}
          disabled={isLoading}
          isLoading={isLoading}
          type="submit"
        />
      </ButtonContainer>
    </Form>
  );
}
