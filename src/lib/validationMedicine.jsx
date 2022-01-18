const isNumberValidMorgens = (einnahmeMorgens) => /^\d+$/.test(einnahmeMorgens);
const isNumberValidMittags = (einnahmeMittags) => /^\d+$/.test(einnahmeMittags);
const isNumberValidAbends = (einnahmeAbends) => /^\d+$/.test(einnahmeAbends);
const isNumberValidNachts = (einnahmeNachts) => /^\d+$/.test(einnahmeNachts);

const isProductValid = (product) =>
  isNumberValidMorgens(product.einnahmeMorgens)&&
  isNumberValidMittags(product.einnahmeMittags)&&
  isNumberValidAbends(product.einnahmeAbends)&&
  isNumberValidNachts(product.einnahmeNachts);


export default isProductValid;