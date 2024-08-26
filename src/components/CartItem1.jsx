import React from 'react'

const CartItem1 = () => {
    return (
        <div style={{ borderRadius: "10px", padding: "10px", height: "100px", width: "362px", display: "flex", backgroundColor: "#FOF0F5" }}>
            <img src="../../assets/Burger.png" alt="Burger" style={{ height: "80px", width: "80px", display: 'inline', marginRight: "10px" }} />
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-around" }}>
                <div>
                    <p style={{ color: "#403C3C", font: "12px" }}>Caribbean Spicy Zinger Burger</p>
                    <p style={{ color: "#99EA8", font: "10px" }}>350Kcal</p>

                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <p style={{ font: "12px" }}>$ 319</p>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: "28px", width: "88px", backgroundColor: "#FEF3F0", border: "1px solid #F05A26", borderRadius: "10px", color: "F05A26", padding: "0px 10px" }}>
                        <div>-</div>
                        <div>1</div>
                        <div>+</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem1
