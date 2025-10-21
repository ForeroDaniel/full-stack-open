const Search = ({ search, setSearch }) => {
  return (
    <div>
      search:
      <input value={search} onChange={event => setSearch(event.target.value)} />
    </div>
  );
};

export default Search;
