import React from 'react'

const NavBar = () => {
    return (
        <div style={{ height: "56px", width: "390px", display: "flex", justifyContent: "space-between" }}>
            <img src="../../assets/arrow-left.svg" alt="arrow-left" />
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-around", alignItems: "center" }}>
                <div style={{ font: "14px", color: "#403C3C" }}>Checkout</div>
                <div style={{ font: "10px", color: "#99EA8" }}>POPEYES I JP NAGAR</div>
            </div>
            <div></div>
        </div>
    )
}

export default NavBar
