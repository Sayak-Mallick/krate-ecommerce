import { Link, useNavigate } from "react-router-dom";
import { ShoppingBag, MoveLeft, ArrowRight } from "lucide-react";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 px-6">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2 mb-14">
        <div className="flex h-7 w-7 items-center justify-center rounded bg-zinc-900">
          <ShoppingBag className="h-3.5 w-3.5 text-white" strokeWidth={2} />
        </div>
        <span className="text-sm font-semibold tracking-widest text-zinc-900 uppercase">
          Krate
        </span>
      </Link>

      {/* 404 block */}
      <div className="flex flex-col items-center text-center max-w-md">
        {/* Large number */}
        <span className="text-[120px] font-black leading-none tracking-tighter text-zinc-200 select-none">
          404
        </span>

        {/* Divider line */}
        <div className="mt-2 mb-7 h-px w-12 bg-zinc-300" />

        <h1 className="text-xl font-semibold text-zinc-800">Page not found</h1>
        <p className="mt-2 text-sm leading-relaxed text-zinc-500 max-w-xs">
          The page you're looking for doesn't exist or may have been moved.
          Let's get you back on track.
        </p>

        {/* Actions */}
        <div className="mt-8 flex items-center gap-3">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 rounded-md border border-zinc-300 bg-white px-4 py-2 text-sm text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 transition-colors"
          >
            <MoveLeft className="h-3.5 w-3.5" strokeWidth={1.75} />
            Go back
          </button>

          <Link
            to="/shop"
            className="flex items-center gap-2 rounded-md bg-zinc-900 px-4 py-2 text-sm text-white hover:bg-zinc-700 transition-colors"
          >
            Home
            <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.75} />
          </Link>
        </div>
      </div>

      {/* Bottom hint */}
      <p className="absolute bottom-8 text-xs text-zinc-400">
        If you believe this is an error,{" "}
        <Link
          to="/contact"
          className="underline underline-offset-2 hover:text-zinc-600 transition-colors"
        >
          contact support
        </Link>
        .
      </p>
    </div>
  );
};

export default NotFound;
