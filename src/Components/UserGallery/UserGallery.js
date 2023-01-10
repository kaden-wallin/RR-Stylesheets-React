import UserCard from '../UserCard/UserCard'

const galleryStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
    width: "100%"
}

function  UserGallery() {
    return (
        <div style={galleryStyle}>
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
        </div>
    )
}

export default UserGallery