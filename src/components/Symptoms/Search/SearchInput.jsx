import styled from "styled-components";

function SearchInput(props) {
  const onSearch = (event) => {
    const { onSearch } = props;
    onSearch(event.target.value);
  };

  const { searchTerm } = props;
  return (
    <FormInput
      value={searchTerm}
      placeholder="Einträge durchsuchen..."
      onChange={onSearch}
    />
  );
}

export default SearchInput;

const FormInput = styled.input`
  flex-grow: 1;
  border: solid grey 1px;
  background: #f7f1f1;
  color: #4b417a;
  font-size: initial;
  font-family: "Montserrat", sans-serif;
  height: 2rem;
  margin-bottom: 25px;
  margin-top: 40px;
  padding-right: 2rem;
  padding-left: 2rem;
`;
