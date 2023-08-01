import { ChangeEvent, useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

import PageHeader from "../../components/PageHeader";
import CategoryService from "../../services/CategoryService";
import Loader from "../../components/Loader";
import { Card, InputSearchContainer, ListHeader } from "./styles";
import { Categories } from "../../utils/types/categoriesType";

import arrow from "../../assets/images/icons/arrow.svg";
import { Header } from "../Home/styles";

export default function CategoriesList() {
  const [categories, setCategories] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [orderBy, setOrderBy] = useState("asc");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCategories = useMemo(
    () =>
      categories.filter((categorie: Categories) =>
        categorie.name.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    [categories, searchTerm]
  );

  useEffect(() => {
    getCategories(orderBy);
  }, [orderBy]);

  async function getCategories(orderBy: string) {
    try {
      setIsLoading(true);
      const response = await CategoryService.listCategories(orderBy);
      setCategories(response);
    } catch (error) {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  }

  function handleChangeSearchTerm(event: ChangeEvent<HTMLInputElement>) {
    setSearchTerm(event.target.value);
  }

  function handleToggleOrderBy() {
    setOrderBy((prevState) => (prevState === "asc" ? "desc" : "asc"));
  }

  console.log(filteredCategories);

  return (
    <>
      {isLoading && <Loader isLoading={isLoading} />}
      <InputSearchContainer>
        <input
          type="text"
          placeholder="Pesquise pelo nome"
          onChange={handleChangeSearchTerm}
        />
      </InputSearchContainer>
      <Header display={hasError ? "none" : "flex"}>
        {!hasError && categories.length > 0 && (
          <strong>
            {filteredCategories.length}
            {filteredCategories.length === 1 ? " Categoria" : " Categorias"}
          </strong>
        )}
        <Link to="/newcategorie">Nova Categoria</Link>
      </Header>

      <ListHeader orderby={orderBy}>
        <button
          type="button"
          className="sort-button"
          onClick={handleToggleOrderBy}
        >
          <span>Nome</span>
          <img src={arrow} alt="arrow" />
        </button>
      </ListHeader>
      {filteredCategories.map((categorie: Categories) => {
        return (
          <Card key={categorie.id}>
            <p>{categorie.name}</p>
          </Card>
        );
      })}
    </>
  );
}
