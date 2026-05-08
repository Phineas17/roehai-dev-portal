import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
  className?: string;
}

export function CodeBlock({ code, language = "typescript", filename, className }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={cn("rounded-lg border border-border bg-card overflow-hidden group", className)}>
      {filename && (
        <div className="flex items-center justify-between px-4 py-2 border-b border-border bg-muted/50">
          <span className="text-xs font-mono text-muted-foreground">{filename}</span>
          <span className="text-xs text-muted-foreground/60">{language}</span>
        </div>
      )}
      <div className="relative">
        <button
          onClick={copy}
          className="absolute top-3 right-3 p-1.5 rounded-md bg-accent hover:bg-accent/80 text-muted-foreground hover:text-foreground transition-colors opacity-0 group-hover:opacity-100 z-10"
          title="Copier"
        >
          {copied
            ? <Check size={13} className="text-primary" />
            : <Copy size={13} />
          }
        </button>
        <pre className="p-4 overflow-x-auto">
          <code className="text-sm font-mono text-foreground/90 leading-relaxed whitespace-pre">
            {code}
          </code>
        </pre>
      </div>
    </div>
  );
}
