'use client';
import { useEffect, useState } from "react"; 

const useWindowResize = () => {
    const [width, setWidth] = useState(0); 
    const handleWindowSizeChange = () => { 
        setWidth(window.innerWidth); 
    }; 
  
    useEffect(() => { 
        handleWindowSizeChange();   
        window.addEventListener("resize",  
            handleWindowSizeChange); 
        return () => { 
            window.removeEventListener( 
                "resize", handleWindowSizeChange); 
        }; 
    }, []); 
  
    return width; 
}

export default useWindowResize;


