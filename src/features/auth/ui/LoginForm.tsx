import Link from "next/link";
import { Button, Input, Checkbox } from "@/shared/ui";

export function LoginForm() {
  return (
    <>
      <div className="mb-8 text-center lg:text-left">
        <h2 className="text-3xl font-bold text-gray-500 mb-2">Welcome to Spike Admin</h2>
        <p className="text-gray-400 text-sm">Your Admin Dashboard</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <Button variant="outline-secondary" className="flex-1 flex gap-2">
          <img src="/svgs/google-icon.svg" alt="Google" className="w-5 h-5" />
          <span className="text-xs font-semibold">Sign in with Google</span>
        </Button>
        <Button variant="outline-secondary" className="flex-1 flex gap-2">
          <i className="ti ti-brand-facebook text-blue-600 text-xl"></i>
          <span className="text-xs font-semibold">Sign in with FB</span>
        </Button>
      </div>

      <div className="relative mb-8 text-center">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-gray-100"></div>
        </div>
        <span className="relative px-4 text-xs text-gray-400 bg-white uppercase">
          or sign in with
        </span>
      </div>

      <form>
        <Input
          label="Username"
          id="forUsername"
          type="text"
          placeholder="Enter your username"
          className="!rounded-md"
        />

        <Input
          label="Password"
          id="forPassword"
          type="password"
          placeholder="Enter your password"
          className="!rounded-md"
        />

        <div className="flex justify-between items-center mb-8">
          <Checkbox
            id="hs-default-checkbox"
            label="Remeber this Device"
            defaultChecked
          />
          <Link
            href="/forgot-password"
            className="text-sm font-semibold text-blue-600 hover:text-blue-700"
          >
            Forgot Password ?
          </Link>
        </div>

        <div className="grid mb-8">
          <Button type="submit" variant="primary" className="w-full shadow-lg shadow-blue-200">
            Sign In
          </Button>
        </div>

        <div className="flex justify-center lg:justify-start gap-2 items-center">
          <p className="text-sm font-semibold text-gray-400">New to Spike?</p>
          <Link
            href="/register"
            className="text-sm font-semibold text-blue-600 hover:text-blue-700 font-bold"
          >
            Create an account
          </Link>
        </div>
      </form>
    </>
  );
}
