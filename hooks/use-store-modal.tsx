import {create} from "zustand";

//yahan par to type declaration kiya hai hamne
interface useStoreModalInterface {
    isOpen: boolean;
    onOpen: ()=>void;
    onClose: ()=>void;
    
};

//What we are trying to do here is we are storing all
//the states at a single place in order to manage and access
 //it from a single place only 

//yahan pe apne modal ko export kar rhe hain
{/*
    The primary return value of create is a custom hook 
    (in your case, useStoreModal). This hook can be called 
    inside functional components to access the state and 
    actions defined in the store.

    so then useStoreModal is a custom hook that can be called to access the state
    and actions of the modal store

*/}
export const useStoreModal = create<useStoreModalInterface>((set) => ({
    isOpen: false,
    onOpen: () => set({isOpen: true}),
    onClose: () => set({isOpen: false}),
}));
    