import React from "react";
import { GiViolin } from "react-icons/gi";

function App() {
    return (
        <div id="page-container">
            <div className="col-1-container">
                <p>Museum plein</p>
                <hr />
                <p>28-02-2023</p>
            </div>

            <div className="col-2-container">
                <div className="col-1-container-mobile">
                    <p>Museum plein</p>
                    <hr />
                    <p>28-02-2023</p>
                </div>
                <div className="top-shape"></div>

                <div className="middle-shape">
                    <div className="logo-container">
                        <GiViolin />
                    </div>
                    <div className="band-name">
                        <h2>Dance orchestra band</h2>
                        <h2>May 06 - 10.2023</h2>
                        <hr />
                    </div>

                    <div className="band-body">
                        <p className="tickets-available">Tickets available: in 4 months</p>
                        <h3 className="tickets-left-number">32.000 left</h3>
                        <hr />
                        <p className="price">Price</p>
                        <h4>
                            &euro; 20,<sup>00</sup>
                        </h4>
                    </div>
                </div>

                <div className="bottom-shape"></div>
            </div>
        </div>
    );
}

export default App;
