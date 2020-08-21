import React, { useState , useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function Category() {
  const initialValues = {
    nome: '',
    description: '',
    color: '#000',
  };

  const [categories, setCategories] = useState([]);
  const [values, setValues] = useState(initialValues);

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value,
    });
  }

  function handleChange(eventInfo) {
    setValue (
      eventInfo.target.getAttribute('name'),
    eventInfo.target.value,
    );
}

useEffect(() => {
  const URL_DATA = window.location.hostname.includes('locahost')
  ? 'http://localhost:8080/categories'
  : 'https://paflix.herokuapp.com/categories';
  fetch(URL_DATA)
  .then(async (serverAnswer) => {
    const answer = await serverAnswer.json();
    setCategories([
     ...answer,
    ]);
  });
 
}, []);



  return (
    <PageDefault>
      <h1>Register Category: {values.name}
      </h1>
      <form
        onSubmit={function handleSubmit(eventInfo) {
          eventInfo.preventDefault();
          setCategories([...categories, values
          ]);

          setValues(initialValues);
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

        <Button>Cadastrar</Button>
      </form>

        {categories.length === 0 && <div>
          loading...
          </div>}

      <ul>
        {categories.map((category) => (
        <li key={`${category.name}`}>
          {category.name}
        </li>
        ))}
      </ul>

      <Link to="/">Go to HomePage</Link>
    </PageDefault>
  );
}

export default Category;
