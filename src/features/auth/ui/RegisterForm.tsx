import Link from "next/link";
import { Button, Input } from "@/shared/ui";

export function RegisterForm() {
  return (
    <form>
      <Input
        label="Name"
        id="forName"
        type="text"
        placeholder="Enter your name"
      />

      <Input
        label="Email Address"
        id="forEmail"
        type="email"
        placeholder="Enter your email address"
      />

      <Input
        label="Password"
        id="forPassword"
        type="password"
        placeholder="Enter your password"
      />

      <div className="grid my-6">
        <Button type="submit" variant="primary" className="w-full">
          Sign Up
        </Button>
      </div>

      <div className="flex justify-center gap-2 items-center">
        <p className="text-base font-semibold text-gray-400">
          Already have an Account?
        </p>
        <Link
          href="/login"
          className="text-sm font-semibold text-blue-600 hover:text-blue-700"
        >
          Sign In
        </Link>
      </div>
    </form>
  );
}
