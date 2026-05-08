import { useState } from "react";
import { Copy, Check } from "lucide-react";

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
}

export function CodeBlock({ code, language = "typescript", filename }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="code-block group">
      {filename && (
        <div className="flex items-center justify-between px-4 py-2 border-b border-white/8 text-xs text-[#a09dc0]">
          <span className="font-mono">{filename}</span>
          <span className="text-[#a09dc0]/60">{language}</span>
        </div>
      )}
      <div className="relative">
        <button
          onClick={copy}
          className="absolute top-3 right-3 p-1.5 rounded-md bg-white/5 hover:bg-white/10 text-[#a09dc0] hover:text-white transition-colors opacity-0 group-hover:opacity-100"
          title="Copier"
        >
          {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
        </button>
        <pre className="p-4 overflow-x-auto">
          <code className="text-sm font-mono text-[#e2e0ff] leading-relaxed whitespace-pre">
            {code}
          </code>
        </pre>
      </div>
    </div>
  );
}
