import styled from "styled-components";

function NewSymptomInput({
  name,
  type,
  value,
  onNewSymptomInputChange,
  placeholder,
  children,
}) {
  return (
    <>
      <label htmlFor={name}>{children}</label>
      <Input
        type={type}
        id={name}
        name={name}
        onChange={onNewSymptomInputChange}
        placeholder={placeholder}
        value={value}
      />
    </>
  );
}

export default NewSymptomInput;

const Input = styled.input`
  height: 40px;
`;
