import React from 'react'
// import icon from '../icon.svg'
const Header = () => {
    return (
        <header className='fixed-top grediant-header'>
            <div className="collapse" id="navbarHeader"> 
            {/* bg-dark */}
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
                        {/* <img src={icon} alt="icon"/> */}
                        <strong>KERALA LOTTERY RESULT</strong>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header