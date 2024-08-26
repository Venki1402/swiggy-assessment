import React from 'react'

const Details = () => {
    return (
        <div style={{ display: "flex", height: "146px", width: "362px", flexDirection: "column", justifyContent: "space-around", borderRadius: "10px", padding: "14px" }}>
            <div>
                <img src="../../assets/maps.svg" alt="maps" />
                <div>
                    <div>Delivery to</div>
                    <div>23rd Avenue, JP Nagar, Bangalore</div>
                </div>
            </div>
            <br />
            <div style={{ display: "flex" }}>
                <img src="../../assets/bill.svg" alt="bill" style={{ height: "20px", width: "20px", marginRight: "5px" }} />
                <div >
                    <div>
                        <div>Total Bill</div>
                        <div>Including Taxes</div>
                    </div>
                    <div>$ 538</div>
                </div>
            </div>
        </div>
    )
}

export default Details
