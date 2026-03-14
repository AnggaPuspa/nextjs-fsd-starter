import { LoginForm } from "@/features/auth/ui/LoginForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login | Next.js FSD",
  description: "Sign in to your account",
};

export default function LoginPage() {
  return <LoginForm />;
}
