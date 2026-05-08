import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { TopBar } from "./TopBar";

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <div className="flex flex-1 max-w-7xl mx-auto w-full px-4 lg:px-6 gap-8">
        <Sidebar />
        <main className="flex-1 min-w-0 py-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
