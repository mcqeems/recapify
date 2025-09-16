import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/app/ui/logo';
import { Button } from '@/app/ui/button';

export default function Page() {
  return (
    <main className="h-dvh w-full flex-col p-6">
      <div className="flex flex-col h-full justify-center items-center gap-2">
        <div className="h-[100px] w-[100px]">
          <Logo />
        </div>
        <span className=" font-lexend text-4xl">
          <p>Recapify</p>
        </span>
        <span className="font-inter">
          <p>An open source invoices recapitulation system.</p>
        </span>
        <div className="flex flex-row gap-2">
          <Link href="/login">
            <Button>Demo</Button>
          </Link>
          <Link href="https://github.com/mcqeems/recapify">
            <Button>Docs</Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
