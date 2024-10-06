"use client";

import * as z from 'zod';
import { useStoreModal } from "@/hooks/use-store-modal";
import { Modal } from "@/components/ui/modal";
import axios from "axios";
import { toast } from "react-hot-toast";
import { ReactNode } from "react";
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { useState } from 'react';

interface StoreModalProps {
  children: ReactNode;
}

const formSchema = z.object({
  name: z.string().min(1),
});

export const StoreModal = () => {
  // Access the state and actions from the custom hook
  const storeModal = useStoreModal();
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setLoading(true)
      const response = await axios.post('/api/stores', values)
      window.location.assign(`/$(response.data.id)`)
      {
        /*
          why we are using window location method and not using redirect nextjs/navigation method is sometimes 
          what happens is in that method db is not created till that moment because time taken to load page
          is very less since it just loads the new components and not the whole page .
          
          so db is sometimes not ready in that less amount of time.

          Rather if we use this window location method this method loads 100% of the page which takes longer time 
          and db is probably ready and this problem no longer persists.
        */
      }
    } catch (error) {
      toast.error("Something Wnet wrong!")
    } finally {
      setLoading(false)
    }
  };

  // Render the Modal component with values from the store
  return (
    <Modal
      title="Create Store"
      description="This is the description of the store modal."
      isOpen={storeModal.isOpen}
      onClose={storeModal.onClose}
    >
      <div>
        <div className="space-y-4 py-2 pb-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name='name'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name:</FormLabel>
                    <FormControl>
                      <Input
                        disabled={loading}
                        placeholder='Ecommerce'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage>Required</FormMessage>
                  </FormItem>
                )}
              />
              <div className='pt-6 space-x-2 flex items-center justify-end'>
                <Button
                  disabled={loading}
                  variant='outline'
                  onClick={storeModal.onClose}>
                  Cancel
                </Button>
                <Button
                  disabled={loading}
                  type='submit'
                >Continue</Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </Modal>
  );
};
