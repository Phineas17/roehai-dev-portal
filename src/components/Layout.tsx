import { Outlet } from "react-router-dom";
import { DocNavbar } from "./DocNavbar";
import { DocFooter } from "./DocFooter";
import { Sidebar } from "./Sidebar";

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <DocNavbar />
      <div className="flex flex-1 max-w-7xl mx-auto w-full px-4 lg:px-6 gap-8">
        <Sidebar />
        <main className="flex-1 min-w-0 py-8 animate-fade-in">
          <Outlet />
        </main>
      </div>
      <DocFooter />
    </div>
  );
}
