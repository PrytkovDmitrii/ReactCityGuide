import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../assest/css/style.scss";

function Loader() {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    
    setIsLoading(true);

    
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    
    return () => clearTimeout(timeout);
  }, [location]); 

  if (!isLoading) return null;

  return (
    <div className="loader">
      <div className="loader__row">
        <div className="loader__item"></div>

      </div>
    </div>
  );
}

export default Loader;