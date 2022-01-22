function NewSymptomInput({
  name,
  value,
  onNewSymptomInputChange,
  placeholder,
  children,
}) {
  return (
    <>
      <label htmlFor={name}>{children}</label>
      <input
        type="text"
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



