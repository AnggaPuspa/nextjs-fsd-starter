import { RegisterForm } from "@/features/auth/ui/RegisterForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register | Next.js FSD",
  description: "Create a new account",
};

export default function RegisterPage() {
  return <RegisterForm />;
}
