import styled from "styled-components";

function NewEventInput({
  name,
  value,
  onNewEventInputChange,
  placeholder,
  children,
}) {
  return (
    <>
      <label htmlFor={name}>{children}</label>
      <Input
        type="text"
        id={name}
        name={name}
        onChange={onNewEventInputChange}
        placeholder={placeholder}
        value={value}
      />
    </>
  );
}

export default NewEventInput;

const Input = styled.input`
height: 40px;
`