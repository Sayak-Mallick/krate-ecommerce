import { Outlet } from "react-router-dom";
import ShoppingHeader from "./header";

const ShoppingLayout = () => {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <ShoppingHeader />
      <main className="flex-1 w-full">
        <Outlet />
      </main>
      <footer className="border-t border-zinc-200 bg-zinc-900 py-10 px-6">
        <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded bg-white">
              <span className="text-[10px] font-bold text-zinc-900">K</span>
            </div>
            <span className="text-sm font-semibold tracking-widest text-white uppercase">
              Krate
            </span>
          </div>
          <div className="flex flex-wrap gap-5 text-xs text-zinc-500">
            <a href="#" className="hover:text-zinc-300 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-zinc-300 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-zinc-300 transition-colors">
              Contact
            </a>
            <a href="#" className="hover:text-zinc-300 transition-colors">
              Returns
            </a>
          </div>
          <p className="text-xs text-zinc-600">
            © {new Date().getFullYear()} Krate Shopping
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ShoppingLayout;
