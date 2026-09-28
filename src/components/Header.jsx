import React from 'react'

function Header({ cartCount }) {
    return (
        <header className="header">
            <div>
                <h1>RNU SHOP</h1>
                <p className="cart">장바구니 <b>{cartCount}</b></p>
            </div>
        </header>
    )
}

export default Header