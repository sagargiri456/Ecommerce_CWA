"use client"

// import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { Modal } from "@/components/ui/modal";
import { useStoreModal } from "@/hooks/use-store-modal";
// import { UserButton } from "@clerk/nextjs";


const setupPage = () => {
    const onOpen = useStoreModal((state) => state.onOpen);
    const isOpen = useStoreModal((state) => state.isOpen);

    useEffect(() => {
        console.log("isOpen:", isOpen);  // Add this for debugging
        if (!isOpen) {
            console.log("Opening modal");  // Add this to see if it's getting triggered
            onOpen();
        }
    }, [isOpen, onOpen]);

    return (
        <div className="p-4">
            {/* <UserButton afterSignOutUrl="/"/>
            Here we have added afterSignOutUrl because this redirects
            the user to the root page after sign out otherwise if we don;t have set it to "/"
            then it would have redirected to Clerks Homepage which we do not want
            */}
            Root Page   
        </div>
    );
}

export default setupPage;