import './Header.css'

const Header = () => {

    const menuItems = [
        {
            name: "Home",
            link: "/home"
        },
        {
            name: "About Me",
            link: "/aboutme"
        },
        {
            name: "Services",
            link: "/services"
        },
        {
            name: "Portfolio",
            link: "/portfolio"
        },
        {
            name: "Contact",
            link: "/contact"
        }
    ]

    return (
        <header className='header'>
            <h1 className='gradient-text'>MAZHAR</h1>

            <ul className='menu-items'>

                {menuItems.map((item, index) => (
                    <li key={index}>{item.name}</li>
                ))}

            </ul>

            <button>Contact Me</button>
        </header>
    )
}



export default Header