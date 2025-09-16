'use client';

import { PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { deleteCustomer } from '@/app/lib/actions';
import { useEffect, useState, useActionState } from 'react';
import ErrorModal from './error-modal';

export function CreateCustomer() {
  return (
    <Link
      href="/dashboard/customers/create"
      className="flex h-10 items-center rounded-lg bg-primary px-4 text-sm font-medium text-white transition-colors hover:bg-primary-75 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
    >
      <span className="hidden md:block">Create Customer</span> <PlusIcon className="h-5 md:ml-4" />
    </Link>
  );
}

export function UpdateCustomer({ id }: { id: string }) {
  return (
    <Link href={`/dashboard/customers/${id}/edit`} className="rounded-md border p-2 hover:bg-gray-100">
      <PencilIcon className="w-5" />
    </Link>
  );
}

export function DeleteCustomer({ id }: { id: string }) {
  const initialState = { message: '' };
  const deleteCustomerWithId = deleteCustomer.bind(null, id);
  const [state, dispatch] = useActionState(deleteCustomerWithId, initialState);
  const [isModalOpen, setIsModalOpen] = useState(false); // Tambahkan state untuk modal

  useEffect(() => {
    // Jika ada pesan error, buka modal
    if (state?.message && state.message.startsWith('Cannot')) {
      setIsModalOpen(true);
    }
  }, [state]);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <form action={dispatch}>
        <button className="rounded-md border p-2 hover:bg-gray-100">
          <span className="sr-only">Delete</span>
          <TrashIcon className="w-5" />
        </button>
      </form>

      <ErrorModal isOpen={isModalOpen} onClose={closeModal} message={state?.message} />
    </>
  );
}
