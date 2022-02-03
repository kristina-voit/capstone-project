const isValidDate = (datum) => datum.includes('');

const isSymptomValid = (symptom) => isValidDate(symptom.datum);

export default isSymptomValid;
