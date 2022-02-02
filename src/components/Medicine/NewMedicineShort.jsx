import { loadFromLocal } from "../../lib/localStorage";
import styled from "styled-components";
import Morning from "../../images/sunrise.svg";
import Noon from "../../images/noon.svg";
import Evening from "../../images/sunset.svg";
import Night from "../../images/night.svg";
import DosageShort from "../Medicine/DosageShort";

function NewProduct({ products }) {
  const initialProducts = products ?? loadFromLocal("_products");

  return (
    <div>
      {initialProducts.map((product, index) => (
        <article>
          <Section>
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
          </Section>
        </article>
      ))}
    </div>
  );
}

export default NewProduct;

const CardTitle = styled.p`
  color: #4b417a;
  font-size: 14;
  font-weight: 600;
  margin: 8px 0 0 0;
`;

const FullCardContent = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  margin: 1rem;
  padding: 0 0 4px 0;
`;

const IconStyling = styled.img`
  margin-bottom: 5px;
  margin-left: 5px;
  margin-right: 5px;
`;

const Section = styled.div`
  background: #f6f5fb;
  border-radius: 15px;
  box-shadow: 0 0 8px #ccc;
  color: #4b417a;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(1, 1fr);
  margin: 1rem;
`;
