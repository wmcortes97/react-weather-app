function Search() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("button is clicked");
  };
  return (
    <div className="search-container">
      <form onSubmit={handleSubmit}>
        <label>
          City:
          <input type="text" placeholder="Type in a city" />
        </label>
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default Search;
