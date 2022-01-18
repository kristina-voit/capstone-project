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
      <input
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
