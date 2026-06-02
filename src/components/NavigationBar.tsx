import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  { label: "Projects", to: "/" },
  { label: "About", to: "/about" },
];

function NavigationBar() {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const onDark = pathname === "/intoxiblock";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close mobile menu on route change
  useEffect(() => setOpen(false), [pathname]);

  const baseText = onDark && !scrolled ? "text-white" : "text-ink";

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3 sm:px-6 sm:pt-4"
    >
      <nav
        className={`flex w-full max-w-6xl items-center justify-between rounded-2xl px-4 py-3 transition-all duration-300 sm:px-6 ${
          scrolled
            ? "glass shadow-soft"
            : "border border-transparent bg-transparent"
        } ${baseText}`}
      >
        <Link to="/" className="group flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-gradient text-sm font-bold text-white shadow-[0_8px_20px_-8px_rgba(175,22,244,0.6)] transition-transform duration-300 group-hover:rotate-6 group-hover:scale-105">
            PC
          </span>
          <span className="text-xl font-semibold tracking-tight">
            Pika&nbsp;Cai
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => {
            const active =
              l.to === "/" ? pathname === "/" : pathname.startsWith(l.to);
            return (
              <li key={l.label}>
                <Link
                  to={l.to}
                  className={`link-underline text-[15px] font-medium transition-colors hover:text-brand-violet ${
                    active ? "text-brand-violet" : ""
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            );
          })}
          <li>
            <Link to="/about" className="btn-gradient text-sm">
              Let&apos;s talk
            </Link>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="relative grid h-10 w-10 place-items-center rounded-xl border border-ink/10 bg-white/60 md:hidden"
        >
          <span className="sr-only">Menu</span>
          <div className="flex flex-col gap-[5px]">
            <span
              className={`h-[2px] w-5 bg-ink transition-all ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-[2px] w-5 bg-ink transition-all ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-[2px] w-5 bg-ink transition-all ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="glass absolute left-3 right-3 top-[4.5rem] z-50 flex flex-col gap-1 rounded-2xl p-3 shadow-soft md:hidden"
          >
            {links.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                className="rounded-xl px-4 py-3 text-lg font-medium text-ink hover:bg-ink/5"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/about"
              className="btn-gradient mt-1 justify-center text-base"
            >
              Let&apos;s talk
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default NavigationBar;
