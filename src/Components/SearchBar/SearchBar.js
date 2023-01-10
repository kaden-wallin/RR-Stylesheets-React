let searchBarStyle = {
    height: '25px',
    width: '250px',
    borderRadius: "5px",
    border: "none",
    paddingLeft: "15px",
    margin: "30px auto",
    boxShadow: '2px 2px 8px black'
}

function  SearchBar() {
    return (
        <input style={searchBarStyle} type="text" placeholder="Search for a users" />
    )
}

export default SearchBar