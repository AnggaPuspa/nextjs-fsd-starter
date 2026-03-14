import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { Card } from "@/shared/ui/Card";

export function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col w-full overflow-hidden relative min-h-screen radial-gradient items-center justify-center p-4">
      <Card className="w-full max-w-[1100px] flex flex-col lg:flex-row !border-0 shadow-xl">
        {/* Konten Kiri: Ilustrasi & Logo */}
        <div className="hidden lg:flex lg:w-1/2 p-12 flex-col justify-between items-start">
          <Link href="/" className="flex items-center gap-3">
             <Image
              src="/logo-light.svg"
              alt="Logo"
              width={174}
              height={52}
              className="object-contain"
            />
          </Link>

          <div className="w-full flex justify-center py-8">
            <Image
              src="/assets/images/login/login-security.png"
              alt="Security Illustration"
              width={500}
              height={500}
              className="object-contain"
            />
          </div>
          <div className="h-10"></div> {/* Spacer */}
        </div>

        {/* Konten Kanan: Form */}
        <div className="w-full lg:w-1/2 p-8 md:p-12 border-l border-gray-100 flex flex-col justify-center">
            {/* Logo untuk Mobile */}
            <div className="lg:hidden mb-8 flex justify-center">
                <Image
                    src="/logo-light.svg"
                    alt="Logo"
                    width={150}
                    height={40}
                />
            </div>
            {children}
        </div>
      </Card>
    </div>
  );
}
