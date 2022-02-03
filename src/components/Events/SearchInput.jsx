import styled from 'styled-components';

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
  background: #f7f1f1;
  border: solid grey 1px;
  color: #4b417a;
  flex-grow: 1;
  font-family: 'Montserrat', sans-serif;
  font-size: initial;
  height: 2rem;
  margin-bottom: 10px;
  margin-top: 10px;
  padding-left: 2rem;
  padding-right: 2rem;
`;
