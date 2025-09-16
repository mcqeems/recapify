import AcmeLogo from '@/app/ui/acme-logo';
import LoginForm from '@/app/ui/login-form';
import { Suspense } from 'react';
import { Metadata } from 'next';
import Logo from '@/app/ui/logo';

export const metadata: Metadata = {
  title: 'Login',
};

export default function LoginPage() {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <div className="flex flex-row justify-center items-center">
          <div className="w-[75px] h-[75px]">
            <Logo />
          </div>
          <span className="text-3xl font-lexend">
            <p>Recapify</p>
          </span>
        </div>
        <Suspense>
          <LoginForm />
        </Suspense>
        <div>
          <div className="bg-primary text-white text-center p-4 rounded-lg">
            <span>
              <p className="text-xl font-bold">Demo Account</p>
              <p>Email: admin@email.com</p>
              <p>Password: admin123</p>
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
