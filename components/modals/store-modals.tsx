"use client"

import { useStoreModal } from "@/hooks/use-store-modal"
import { Modal } from "@/components/ui/modal"
import { ReactNode } from "react";

interface StoreModalProps {
  children: ReactNode;
}

export const StoreModal = () => {
  // Access the state and actions from the custom hook
  const storeModal = useStoreModal();

  // Render the Modal component with values from the store
  return (
    <Modal
      title="Create Store"
      description="This is the description of the store modal."
      isOpen={storeModal.isOpen}
      onClose={storeModal.onClose}
    >
      Future Create Store Room.
    </Modal>
  );
};
