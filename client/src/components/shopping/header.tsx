import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  ShoppingBag,
  Search,
  UserCircle2,
  X,
  Menu,
  ShoppingCart,
} from "lucide-react";

const navLinks = [
  { label: "New Arrivals", to: "/shop/new" },
  { label: "Men", to: "/shop/men" },
  { label: "Women", to: "/shop/women" },
  { label: "Accessories", to: "/shop/accessories" },
  { label: "Sale", to: "/shop/sale" },
];

const ShoppingHeader = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  // Replace with real cart count from state/context
  const cartCount = 3;

  return (
    <>
      {/* Announcement bar */}
      <div className="w-full bg-zinc-900 py-2 text-center text-xs tracking-widest text-zinc-300 uppercase">
        Free shipping on orders over ₹999
      </div>

      <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white">
        {/* Main nav row */}
        <div className="mx-auto flex h-15 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Left: hamburger (mobile) */}
          <button
            className="flex lg:hidden h-8 w-8 items-center justify-center rounded text-zinc-600 hover:text-zinc-900 transition-colors"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" strokeWidth={1.75} />
          </button>

          {/* Center on mobile / Left on desktop: Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0"
          >
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded bg-zinc-900">
              <ShoppingBag className="h-3.5 w-3.5 text-white" strokeWidth={2} />
            </div>
            <span className="text-sm font-semibold tracking-widest text-zinc-900 uppercase">
              Krate
            </span>
          </Link>

          {/* Center: desktop nav links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map(({ label, to }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `text-sm transition-colors ${
                    isActive
                      ? "text-zinc-900 font-medium"
                      : "text-zinc-500 hover:text-zinc-900"
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          {/* Right: icons */}
          <div className="flex items-center gap-1">
            {/* Search toggle */}
            <button
              onClick={() => setSearchOpen((s) => !s)}
              className="flex h-8 w-8 items-center justify-center rounded text-zinc-600 hover:text-zinc-900 transition-colors"
              aria-label="Toggle search"
            >
              {searchOpen ? (
                <X className="h-4 w-4" strokeWidth={1.75} />
              ) : (
                <Search className="h-4 w-4" strokeWidth={1.75} />
              )}
            </button>

            {/* Account */}
            <Link
              to="/account"
              className="flex h-8 w-8 items-center justify-center rounded text-zinc-600 hover:text-zinc-900 transition-colors"
              aria-label="Account"
            >
              <UserCircle2 className="h-4 w-4" strokeWidth={1.75} />
            </Link>

            {/* Cart */}
            <Link
              to="/shop/cart"
              className="relative flex h-8 w-8 items-center justify-center rounded text-zinc-600 hover:text-zinc-900 transition-colors"
              aria-label="Cart"
            >
              <ShoppingCart className="h-4 w-4" strokeWidth={1.75} />
              {cartCount > 0 && (
                <span className="absolute right-0.5 top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-zinc-900 text-[10px] font-semibold text-white leading-none">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>

        {/* Expandable search bar */}
        <div
          className={`overflow-hidden border-t border-zinc-100 bg-white transition-all duration-200 ease-in-out ${
            searchOpen ? "max-h-16 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 sm:px-6 lg:px-8 py-3">
            <Search
              className="h-4 w-4 shrink-0 text-zinc-400"
              strokeWidth={1.75}
            />
            <input
              autoFocus={searchOpen}
              type="text"
              placeholder="Search products..."
              className="w-full bg-transparent text-sm text-zinc-800 placeholder-zinc-400 outline-none"
            />
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      {mobileOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 z-50 bg-black/40"
            onClick={() => setMobileOpen(false)}
          />
          {/* Panel */}
          <div className="fixed left-0 top-0 z-50 flex h-full w-72 flex-col bg-white shadow-xl">
            <div className="flex items-center justify-between border-b border-zinc-100 px-5 py-4">
              <span className="text-sm font-semibold tracking-widest text-zinc-900 uppercase">
                Krate
              </span>
              <button
                onClick={() => setMobileOpen(false)}
                className="text-zinc-500 hover:text-zinc-900 transition-colors"
              >
                <X className="h-4 w-4" strokeWidth={1.75} />
              </button>
            </div>
            <nav className="flex flex-col px-5 py-4 gap-1">
              {navLinks.map(({ label, to }) => (
                <NavLink
                  key={to}
                  to={to}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `rounded-md px-3 py-2.5 text-sm transition-colors ${
                      isActive
                        ? "bg-zinc-100 text-zinc-900 font-medium"
                        : "text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900"
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}
            </nav>
          </div>
        </>
      )}
    </>
  );
};

export default ShoppingHeader;
