 export default function Header(){
    return(
        <div className="heading">

        <img className="images " src="https://i.pinimg.com/736x/68/6d/c5/686dc532a1d5ba6a70057b87815eb929.jpg" height="80px" width="60px"/>
        <div className="option">
            <button className="but">Men</button>
            <button className="but">Women</button>
            <button className="but">Kids</button>
            <button className="but">Home and Living</button>
            <button className="but">Beauty</button>
            <button className="but">studio</button>

        </div>

        <input className="searchbar" placeholder="Search for products brands and more"></input>
        <div className="Profile">
            <button className="pro">Profiles</button>
            <button className="pro">Wishlist</button>
            <button className="pro">Bag</button>
        </div>


        </div>
    )
 }