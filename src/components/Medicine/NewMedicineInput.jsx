function NewMedicineInput({ name, value, onNewMedicineInputChange, placeholder, children }) {
    return (
      <>
        <label htmlFor={name}>{children}</label>
        <input
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