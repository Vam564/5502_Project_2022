import React from 'react'
import logo from './assets/logo.png'

function Header() {
    return (
        <>

            <nav class="navbar navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                        <img
                            src={logo}
                            class="me-2"
                            height="20"
                            alt="MDB Logo"
                            loading="lazy"
                        />
                        <span className="navbar-brand mb-0 h1">5502 Project</span>
                    </a>

                    {/* <button
                        class="navbar-toggler"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i class="fas fa-bars"></i>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-link active" aria-current="page" href="/">Home</a>
                            <a class="nav-link" href="#">Models</a>
                        </div>
                    </div> */}
                </div>
            </nav>
        </>
    )
}

export default Header