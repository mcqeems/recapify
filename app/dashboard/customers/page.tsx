import Table from '@/app/ui/customers/table';
import { CreateCustomer } from '@/app/ui/customers/buttons';
import Search from '@/app/ui/search';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';
import { fetchAllCustomers } from '@/app/lib/data';

// Tambahkan searchParams ke properti halaman
export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) {
  // Dapatkan query dari searchParams, atau gunakan string kosong jika tidak ada
  const query = searchParams?.query || '';
  const customers = await fetchAllCustomers(query); // Teruskan query ke fungsi fetch

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={` text-2xl`}>Customers</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search customers..." />
        <CreateCustomer />
      </div>
      <Suspense fallback={<InvoicesTableSkeleton />}>
        <Table customers={customers} />
      </Suspense>
    </div>
  );
}
