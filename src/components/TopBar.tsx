import { ExternalLink } from "lucide-react";

export function TopBar() {
  return (
    <header className="h-14 border-b border-white/8 flex items-center justify-between px-6 shrink-0">
      {/* Left — mobile logo */}
      <div className="flex items-center gap-2 lg:hidden">
        <div className="w-7 h-7 rounded-lg bg-purple-600 flex items-center justify-center text-white font-bold text-sm">
          R
        </div>
        <span className="text-sm font-semibold text-white">RoehAI Developers</span>
      </div>

      <div className="hidden lg:block" />

      {/* Right */}
      <div className="flex items-center gap-3">
        <a
          href="https://www.roehai.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-sm text-[#a09dc0] hover:text-white transition-colors"
        >
          <span>roehai.com</span>
          <ExternalLink size={13} />
        </a>
        <a
          href="https://github.com/Phineas17/roehai-sdk"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-sm text-[#a09dc0] hover:text-white transition-colors"
        >
          <span className="hidden sm:inline">GitHub</span>
        </a>
        <a
          href="https://www.roehai.com/dashboard"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm bg-purple-600 hover:bg-purple-700 text-white px-3 py-1.5 rounded-lg transition-colors"
        >
          Dashboard →
        </a>
      </div>
    </header>
  );
}
