import { Separator } from '@/components/ui/separator';
import LoginForm from './_components/registerForm';
import Link from 'next/link';

export default function RegisterPage() {
  return (
    <div className="grid place-items-center min-h-screen">
      <div className="flex flex-col w-full md:w-[600px] gap-8">
        <h1 className="text-3xl">Register to Lutfi&apos;s SmartHome</h1>
        <LoginForm />
        <Separator className="-mb-4" />
        <div className="text-sm">
          Already have an account?{' '}
          <Link href="/login" className="text-blue-500 hover:text-blue-700">
            Login &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
