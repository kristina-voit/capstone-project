import styled from "styled-components";
import { useState } from "react";
import { loadFromLocal } from "../../lib/localStorage";
import Morning from "../../images/sunrise.svg";
import Noon from "../../images/noon.svg";
import Evening from "../../images/sunset.svg";
import Night from "../../images/night.svg";
import DosageShort from "../Medicine/DosageShort"


function NewProduct() {
 
  const localStorageProducts = loadFromLocal("_products");
  const [products, setProducts] = useState(
    localStorageProducts ?? []
  );

 
  return (
    <div>
      <Card>
        {products.map((product, index) => (
          <article>
         
            <CardTitle>{product.name}</CardTitle>

            <FullCardContent>

            <DosageShort einnahmeMenge={product.einnahmeMorgens} />
              <DosageShort einnahmeMenge={product.einnahmeMittags} />
              <DosageShort einnahmeMenge={product.einnahmeAbends} />
              <DosageShort einnahmeMenge={product.einnahmeNachts} />

              <IconStyling src={Morning} alt="Morning" />
              <IconStyling src={Noon} alt="Noon" />
              <IconStyling src={Evening} alt="Evening" />
              <IconStyling src={Night} alt="Night" />
            </FullCardContent>

          </article>
        ))}
      </Card>
    </div>
  );
}

export default NewProduct;

const FullCardContent = styled.div`
  padding: 0px 0px 4px 0px;
  margin: 1rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  justify-items: center;
`;

const CardTitle = styled.p`
  color: #4b417a;
  font-size: 14;
  margin: 8px 0 0 0;
  font-weight: 600;
`;

const Card = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 10px;
  border-radius: 15px;
  box-shadow: 0px 0px 8px #ccc;
  background: #f6f5fb;
  color: #4b417a;
  margin: 1rem;
  padding-top: 0.1rem;
`;

const Description = styled.p`
  font-size: 14;
  margin: 8px 0 0 0;
  font-weight: 600;
  color: ${(props) => (props.color ? "red" : "green")};
`;

const IconStyling = styled.img`
  margin-left: 5px;
  margin-right: 5px;
  margin-bottom: 5px;
`;
