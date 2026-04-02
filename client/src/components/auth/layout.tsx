import { Outlet } from "react-router-dom";
import { ShoppingBag } from "lucide-react";

const AuthLayout = () => {
  return (
    <div className="flex min-h-screen w-full">
      {/* Left branding panel */}
      <div className="hidden lg:flex lg:w-[45%] xl:w-[40%] flex-col justify-between bg-zinc-900 px-12 py-10">
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded bg-white">
            <ShoppingBag className="h-4 w-4 text-zinc-900" strokeWidth={2} />
          </div>
          <span className="text-sm font-semibold tracking-widest text-white uppercase">
            Krate
          </span>
        </div>

        {/* Center copy */}
        <div className="space-y-4">
          <h1 className="text-4xl font-light leading-snug text-white">
            A smarter way <br />
            to <span className="font-semibold">shop.</span>
          </h1>
          <p className="max-w-xs text-sm leading-relaxed text-zinc-400">
            Manage your orders, track deliveries, and discover curated
            collections — all in one place.
          </p>
        </div>

        {/* Footer quote */}
        <p className="text-xs text-zinc-600">
          © {new Date().getFullYear()} Krate Shopping. All rights reserved.
        </p>
      </div>

      {/* Right form panel */}
      <div className="flex flex-1 flex-col items-center justify-center bg-zinc-50 px-6 py-12 sm:px-10">
        {/* Mobile-only logo */}
        <div className="mb-8 flex items-center gap-2 lg:hidden">
          <div className="flex h-7 w-7 items-center justify-center rounded bg-zinc-900">
            <ShoppingBag className="h-3.5 w-3.5 text-white" strokeWidth={2} />
          </div>
          <span className="text-sm font-semibold tracking-widest text-zinc-900 uppercase">
            Krate
          </span>
        </div>

        <div className="w-full max-w-sm">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
