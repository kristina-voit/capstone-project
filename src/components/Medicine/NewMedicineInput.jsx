import styled from 'styled-components';

function NewMedicineInput({
  name,
  value,
  onNewMedicineInputChange,
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
        onChange={onNewMedicineInputChange}
        placeholder={placeholder}
        value={value}
      />
    </>
  );
}

export default NewMedicineInput;

const Input = styled.input`
  height: 40px;
`;
