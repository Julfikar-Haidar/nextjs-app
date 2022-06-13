import React from 'react'
import Link from 'next/link'

export default function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto">
                            <Link href="/">
                            <a className="nav-link active" aria-current="page">Home</a>
                            </Link>
                            <Link href="/about">
                            <a className="nav-link" href="#">About</a>
                            </Link>
                            <Link href="/contact">
                            <a className="nav-link" href="#">Contact</a>
                            </Link>
                            
                        
                            
                        </div>
                    </div>
                </div>
            </nav>

        </>
    )
}
