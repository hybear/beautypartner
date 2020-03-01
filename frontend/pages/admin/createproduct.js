import React from 'react';
import CreateItem from '@components/CRUD_CreateItem';
import Middleware from '@components/Middleware';

const Create = () => (
  <Middleware>
    <CreateItem />
  </Middleware>
);

export default Create;
