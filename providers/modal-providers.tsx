"use client";

import { StoreModal } from "@/components/modals/store-modals";
import { useEffect, useState } from "react";

interface ModalProviderProps {
    children: React.ReactNode; // Ensure it accepts children
}

const ModalProvider = () => {

    {/*
    Mounted here simply means that this Modal is loaded into the 
    Dom so what happens in next is that some part is rendered by server side
    and some is rendered by the client side so here we have created a State
    isMounted so when this page will be loaded in the client side that is when 
    client side rendering will start this page will start rendering initiating
    useEffect hook which will change the default value of the IsMounted to true
    
    so first server side rendering happens then client side rendering happens.
    
    

*/}

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        console.log("Mounted:", true);  // Add this to check if it's setting correctly
    }, []);

    {/*
        and until this page is rendered that is processed by client machine and rendered
    it will return null value since isMounted is false
    
    */}
    if (!isMounted) {
        return null;
    }

    return (
        <>
            <StoreModal />
        </>

    )
}
export default ModalProvider;
