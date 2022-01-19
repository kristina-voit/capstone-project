function SearchInput(props) {
  const onSearch = (event) => {
    const { onSearch } = props;
    onSearch(event.target.value);
  };

  const { searchTerm } = props;
  return (
    <input value={searchTerm} placeholder="Suchbegriff" onChange={onSearch} />
  );
}

export default SearchInput;
