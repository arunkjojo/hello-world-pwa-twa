import React from 'react'
// import icon from '../icon.svg'
const Header = () => {
    return (
        <header className='fixed-top grediant-header'>
            {/* <div className="collapse" id="navbarHeader"> 
                <div className="container">
                    <div className="row">
                        <div className="col-sm-8 col-md-7 py-4">
                            <h4 className="text-white">About</h4>
                            <p className="text-white">Greate Kerala Lottery Result check application. Developed by AJOin Group of Company.</p>
                        </div>
                        <div className="col-sm-4 offset-md-1 py-4">
                            <h4 className="text-white">Contact</h4>
                            <ul className="list-unstyled">
                                <li><a rel="noreferrer" target="_blank"  href="https://chat.whatsapp.com/FZchzPLN0I204zNNn5rFbY" className="text-white">WhatsApp</a></li>

                                <li><a rel="noreferrer" target="_blank"  href="https://t.me/resultskeralalotteryonlinein" className="text-white">Telegram</a></li>
                                <li><a rel="noreferrer" target="_blank" href="https://keralalotteryonline.in" className="text-white">Website</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="navbar navbar-dark shadow-sm">
                <div className="container">
                    <a rel="noreferrer" href="/" className="navbar-brand d-flex align-items-center">
                        <strong>KERALA LOTTERY RESULT</strong>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </div> */}
            <nav className="fixed-top grediant-header navbar navbar-dark bg-dark" aria-label="Dark offcanvas navbar">
                <div className="container-fluid">
                    <a className="navbar-brand" rel="noreferrer" href="/">KERALA LOTTERY RESULT</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbarDark" aria-controls="offcanvasNavbarDark">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-end text-bg-dark" tabIndex={-1} id="offcanvasNavbarDark" aria-labelledby="offcanvasNavbarDarkLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbarDarkLabel">Kerala Lottery Result</h5>
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" rel="noreferrer" href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" rel="noreferrer" href="/">Contact</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Social Media
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item"target="_blank" rel="noreferrer" href="https://chat.whatsapp.com/FZchzPLN0I204zNNn5rFbY">WhatsApp</a></li>
                                        <li><a className="dropdown-item"target="_blank" rel="noreferrer" href="https://t.me/resultskeralalotteryonlinein">Twitter</a></li>
                                        <li>
                                            <hr className="dropdown-divider" />
                                        </li>
                                        <li><a className="dropdown-item"target="_blank" rel="noreferrer" href="https://keralalotteryonline.in">Website</a></li>
                                    </ul>
                                </li>
                            </ul>
                            
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header