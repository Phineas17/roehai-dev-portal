import { Outlet } from "react-router-dom";
import { DocNavbar } from "./DocNavbar";
import { DocFooter } from "./DocFooter";
import { Sidebar } from "./Sidebar";

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col dashboard-bg">
      <DocNavbar />

      {/* Desktop: cartes séparées sur fond coloré — hauteur fixe, seul le contenu inner défile */}
      <div className="w-full max-w-7xl mx-auto px-4 lg:px-6 py-5 hidden lg:flex gap-4 items-start h-[calc(100vh-4.5rem)]">
        {/* Sidebar card */}
        <aside className="w-60 shrink-0 h-full bg-card rounded-2xl border border-border shadow-md flex flex-col overflow-hidden">
          <Sidebar />
        </aside>

        {/* Content card */}
        <div className="flex-1 min-w-0 h-full bg-card rounded-2xl border border-border shadow-md overflow-hidden flex flex-col">
          <main className="flex-1 overflow-y-auto p-8 animate-fade-in">
            <Outlet />
          </main>
        </div>
      </div>

      {/* Mobile: layout simple sans cartes */}
      <div className="lg:hidden flex-1 max-w-7xl mx-auto w-full px-4 py-6">
        <main className="animate-fade-in">
          <Outlet />
        </main>
      </div>

      <DocFooter />
    </div>
  );
}
