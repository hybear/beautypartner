import React, { useState } from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import Router from 'next/router';
import formatMoney from '../../lib/formatMoney';
// import Form from '../General/styles/Form';
import { Title } from '../General';

import { Input, Label, Info, Checkbox } from '../General/Form';
import { FormContainer, Form, Error, Button } from './styles';
// import Error from '../General/styles/ErrorMessage'

const CREATE_PRODUCT_MUTATION = gql`
  mutation CREATE_PRODUCT_MUTATION(
    $title: String!
    $description: String!
    $categoryId: Int
    $price: Int!
    $image: String
    $largeImage: String
    $reference: String!
  ) {
    createItem(
      title: $title
      description: $description
      categoryId: $categoryId
      listPrice: $price
      bestPrice: $price
      image: $image
      largeImage: $largeImage
      reference: $reference
    ) {
      id
    }
  }
`;

const CreateItem = () => {
  const [product, setProduct] = useState({
    title: '',
    description: '',
    category: '',
    image: '',
    largeImage: '',
    price: '',
    reference: '',
  });

  const handleChange = e => {
    const { name, type, value } = e.target;
    const val = type === 'number' ? parseFloat(value) : value;
    setProduct({ ...product, [name]: val });
  };

  const uploadFile = async e => {
    try {
      console.log(e);
      const files = e.target.files;
      console.log(files[0]);
      const data = new FormData();
      data.append('file', files[0]);
      data.append('upload_preset', 'beautypartner');

      const res = await fetch('https://api.cloudinary.com/v1_1/hybear/image/upload', {
        method: 'POST',
        body: data,
      });
      const file = await res.json();
      console.log(file);
      setProduct({
        ...product,
        image: file.secure_url,
        largeImage: file.eager[0].secure_url,
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <Mutation mutation={CREATE_PRODUCT_MUTATION} variables={product}>
        {(createItem, { loading, error }) => (
          <FormContainer component="main">
            <Title>Register a Product</Title>
            <Form
              data-test="form"
              onSubmit={async e => {
                e.preventDefault();
                const res = await createItem();
                console.log(res);
                setProduct({
                  title: '',
                  description: '',
                  category: '',
                  image: '',
                  largeImage: '',
                  price: '',
                  reference: '',
                });
              }}
            >
              <div className="form__container">
                <div className="form__grid">
                  <Label htmlFor="image">Image*</Label>
                  <Input name="image" id="image" type="file" required onChange={uploadFile} />
                  {product.image && <img width="50" src={product.image} alt="Upload View" />}
                </div>
                <div className="form__grid">
                  <Label htmlFor="fullname">Product Name*</Label>
                  <Input
                    name="title"
                    id="productname"
                    type="text"
                    required
                    placeholder="Ex: Malbec Blend 100ml"
                    value={product.title}
                    onChange={handleChange}
                  />
                </div>
                <div className="form__grid">
                  <Label htmlFor="price">Price*</Label>
                  <Input name="price" id="price" type="number" required value={product.price} onChange={handleChange} />
                </div>
                <div className="form__grid">
                  <Label htmlFor="category">Category*</Label>
                  <select
                    name="category"
                    id="category"
                    required
                    value={product.category}
                    onChange={handleChange}
                    data-test="category"
                  >
                    <option value="100">Fragrance</option>
                    <option value="101">Make Up</option>
                    <option value="102">Skin Care</option>
                    <option value="103">Bath and Body</option>
                  </select>
                </div>
                <div className="form__grid">
                  <Label htmlFor="reference">Reference*</Label>
                  <Input
                    name="reference"
                    id="reference"
                    type="number"
                    required
                    value={product.reference}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <Label htmlFor="description">Description*</Label>
              <textarea
                name="description"
                id="description"
                rows="3"
                required
                value={product.description}
                onChange={handleChange}
              />
              <Button type="submit" primary fullWidth disabled={loading}>
                Submit{loading ? 'ing' : ''}
              </Button>
              {error && (
                <Error>
                  {error.graphQLErrors.map(({ message }, i) => (
                    <p key={i}>{message}</p>
                  ))}
                </Error>
              )}
            </Form>
          </FormContainer>
        )}
      </Mutation>
    </>
  );
};

export default CreateItem;
export { CREATE_PRODUCT_MUTATION };
