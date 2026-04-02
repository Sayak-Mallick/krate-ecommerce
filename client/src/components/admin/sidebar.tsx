import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  ShoppingBag,
  Package,
  BarChart2,
  ChevronLeft,
} from "lucide-react";

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard, to: "/admin/dashboard" },
  { label: "Orders", icon: ShoppingBag, to: "/admin/orders" },
  { label: "Products", icon: Package, to: "/admin/products" },
  { label: "Features", icon: BarChart2, to: "/admin/features" },
];

const AdminSidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`hidden lg:flex flex-col justify-between bg-zinc-900 transition-all duration-300 ease-in-out ${
        collapsed ? "w-17" : "w-56"
      } min-h-screen`}
    >
      {/* Top: logo + nav */}
      <div>
        {/* Logo row */}
        <div
          className={`flex items-center gap-2.5 px-4 py-5.5 border-b border-zinc-800 ${
            collapsed ? "justify-center" : ""
          }`}
        >
          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded bg-white">
            <ShoppingBag
              className="h-3.5 w-3.5 text-zinc-900"
              strokeWidth={2}
            />
          </div>
          {!collapsed && (
            <span className="text-sm font-semibold tracking-widest text-white uppercase">
              Krate
            </span>
          )}
        </div>

        {/* Nav items */}
        <nav className="mt-4 flex flex-col gap-0.5 px-2">
          {navItems.map(({ label, icon: Icon, to }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors ${
                  isActive
                    ? "bg-zinc-700 text-white"
                    : "text-zinc-400 hover:bg-zinc-800 hover:text-white"
                } ${collapsed ? "justify-center" : ""}`
              }
              title={collapsed ? label : undefined}
            >
              <Icon className="h-4 w-4 shrink-0" strokeWidth={1.75} />
              {!collapsed && <span>{label}</span>}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Bottom: collapse toggle */}
      <div className="px-2 pb-5">
        <button
          onClick={() => setCollapsed((c) => !c)}
          className={`flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm text-zinc-500 hover:bg-zinc-800 hover:text-white transition-colors ${
            collapsed ? "justify-center" : ""
          }`}
        >
          <ChevronLeft
            className={`h-4 w-4 shrink-0 transition-transform duration-300 ${
              collapsed ? "rotate-180" : ""
            }`}
            strokeWidth={1.75}
          />
          {!collapsed && <span>Collapse</span>}
        </button>
      </div>
    </aside>
  );
};

export default AdminSidebar;
