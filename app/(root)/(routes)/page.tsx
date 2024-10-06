"use client"

// import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { Modal } from "@/components/ui/modal";
import { useStoreModal } from "@/hooks/use-store-modal";
// import { UserButton } from "@clerk/nextjs";


const SetupPage = () => {
    const onOpen = useStoreModal((state) => state.onOpen);
    const isOpen = useStoreModal((state) => state.isOpen);

    useEffect(() => {
        console.log("isOpen:", isOpen);  // Add this for debugging
        if (!isOpen) {
            console.log("Opening modal");  // Add this to see if it's getting triggered
            onOpen();
        }
    }, [isOpen, onOpen]);

    return null;
}

export default SetupPage;