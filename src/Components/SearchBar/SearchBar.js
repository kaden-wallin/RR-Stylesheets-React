let searchBarStyle = {
    height: '25px',
    width: '250px',
    borderRadius: "5",
    border: "2px solid black",
    paddingLeft: "15px",
    margin: "30px auto"
}

function  SearchBar() {
    return (
        <input style={searchBarStyle} type="text" placeholder="Search for a user" />
    )
}

export default SearchBar