function Navigation() {
    return (
        <div >
            <ul className="nav justify-content-end">
                <li>
                    <a href='#aboutMe' className='nav-link text-dark'>About Me</a>
                </li>
                <li>
                    <a href='#skills' className='nav-link text-dark'>Skills</a>
                </li>
                <li>
                    <a href='#portfolio' className='nav-link text-dark'>Projects</a>
                </li>
                <li>
                    <a href='#contact' className='nav-link text-dark'>Contact</a>
                </li>
            </ul>
        </div>

    )
}

export default Navigation;