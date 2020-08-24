import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PageDefault from "../../../components/PageDefault";
import FormField from "../../../components/FormField";
import Button from "../../../components/Button";
import useForm from "../../../hooks/useForm";

function Categoria() {
  const initialValues = {
    nome: "",
    description: "",
    color: "#000",
  };

  const { handleChange, values, clearForm } = useForm(initialValues);

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const URL_DATA = window.location.hostname.includes("locahost")
      ? "http://localhost:8080"
      : "https://paflix.herokuapp.com";

    fetch(URL_DATA).then(async (serverAnswer) => {
      const answer = await serverAnswer.json();
      setCategories([...answer]);
    });
  }, []);

  return (
    <PageDefault>
      <h1> Register Category: {values.name} </h1>
      <form
        onSubmit={function handleSubmit(eventInfo) {
          eventInfo.preventDefault();
          setCategories([...categories, values]);

          clearForm();
        }}
      >
        <FormField
          label="Category Name"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />
        <FormField
          label="Description"
          type="textarea"
          name="description"
          value={values.description}
          onChange={handleChange}
        />
        <FormField
          label="Color"
          type="color"
          name="color"
          value={values.color}
          onChange={handleChange}
        />

        <Button> Cadastrar </Button>
      </form>

      {categories.length === 0 && <div>loading...</div>}

      <ul>
        {" "}
        {categories.map((category) => (
          <li key={`${category.title}`}> {category.title}</li>
        ))}{" "}
      </ul>

      <Link to="/"> Go to HomePage </Link>
    </PageDefault>
  );
}

export default Categoria;
