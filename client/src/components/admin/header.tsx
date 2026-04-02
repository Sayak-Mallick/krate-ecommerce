import { Bell, Search, ChevronDown } from "lucide-react";

const AdminHeader = () => {
  return (
    <header className="flex h-15 shrink-0 items-center justify-between border-b border-zinc-200 bg-white px-6">
      {/* Left: search */}
      <div className="flex items-center gap-2 rounded-md border border-zinc-200 bg-zinc-50 px-3 py-1.5 w-64 text-sm text-zinc-400 hover:border-zinc-300 transition-colors">
        <Search className="h-3.5 w-3.5 shrink-0" strokeWidth={1.75} />
        <span className="text-xs">Search anything...</span>
      </div>

      {/* Right: actions + user */}
      <div className="flex items-center gap-4">
        {/* Notification bell */}
        <button className="relative flex h-8 w-8 items-center justify-center rounded-md text-zinc-500 hover:bg-zinc-100 hover:text-zinc-800 transition-colors">
          <Bell className="h-4 w-4" strokeWidth={1.75} />
          {/* Unread dot */}
          <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-rose-500" />
        </button>

        {/* Divider */}
        <div className="h-5 w-px bg-zinc-200" />

        {/* User chip */}
        <button className="flex items-center gap-2.5 rounded-md px-2 py-1 text-sm hover:bg-zinc-100 transition-colors">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-zinc-900 text-xs font-semibold text-white">
            A
          </div>
          <div className="hidden sm:flex flex-col items-start leading-none">
            <span className="text-xs font-medium text-zinc-800">Admin</span>
            <span className="text-[11px] text-zinc-400">admin@krate.com</span>
          </div>
          <ChevronDown
            className="h-3.5 w-3.5 text-zinc-400"
            strokeWidth={1.75}
          />
        </button>
      </div>
    </header>
  );
};

export default AdminHeader;
