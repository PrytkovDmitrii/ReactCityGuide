import React from "react";

function Map({map, title}) {
    return (
            <div className="map">
                <h2 className="map__subtitle">
                    {title}
                </h2>
                <iframe className="map__map" src={map}  width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"></iframe>
            </div>
        
    );
}

export default Map;