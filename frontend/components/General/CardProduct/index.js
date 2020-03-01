import React, { useState } from 'react';
import { CardStyles, Title, Image, PriceTag, Description, AddToCart } from './styles';
import AddBtn from '../CartAddItem';
import formatMoney from '../../../lib/formatMoney';

const CardProduct = props => {
  const [Hover, setHover] = useState(false);

  const { item } = props;

  return (
    <CardStyles onMouseEnter={() => setHover(!Hover)} onMouseLeave={() => setHover(!Hover)}>
      {/* <Link href={{
                        pathname: `/p/[name]/[id]`
                    }} as={{
                        pathname: `/p/${item.title.replace(/ /g, '-')}/${item.id}`
                    }}>
                    <a> */}
      <Image src={item.image} alt={item.title} />
      <Title>{item.title}</Title>
      <PriceTag>{formatMoney(item.listPrice)}</PriceTag>
      <Description center>{item.description}</Description>
      {/* </a>
                    </Link> */}
      <AddToCart hover={Hover}>
        <AddBtn primary id={item.id} />
      </AddToCart>
      {/* {user && (
        <>
          {user.permissions.map(e => e  != 'USER') && (
            <div className="buttonList">
              {user.permissions.map(e => e == 'ADMIN' || e == 'ITEMUPDATE') && (
                <Link
                  href={{
                    pathname: 'update',
                    query: { id: item.id },
                  }}
                >
                  <a className="buttonList__edit">Edit</a>
                </Link>
              )}
              {user.permissions.map(e => e == 'ADMIN' || e == 'ITEMDELETE') && (
                <DeleteItem id={item.id}>Delete</DeleteItem>
              )}
            </div>
          )}
        </>
      )} */}
    </CardStyles>
  );
};

export default CardProduct;
