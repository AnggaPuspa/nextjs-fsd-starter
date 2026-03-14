import { ReactNode } from "react";
import { AuthLayout } from "@/widgets/layout/ui/AuthLayout";

export default function RootAuthLayout({ children }: { children: ReactNode }) {
  return <AuthLayout>{children}</AuthLayout>;
}
