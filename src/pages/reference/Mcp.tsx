import { Link } from "react-router-dom";
import { ArrowRight, ShieldAlert } from "lucide-react";
import { MCP_FAMILIES, MCP_TOOL_COUNT } from "@/data/mcpTools";

export function McpReference() {
  return (
    <div className="max-w-3xl">
      <div className="mb-8">
        <p className="text-sm text-muted-foreground mb-1">Référence MCP</p>
        <h1 className="text-3xl font-bold text-foreground tracking-tight mb-2">
          Les {MCP_TOOL_COUNT} outils du serveur MCP
        </h1>
        <p className="text-muted-foreground leading-relaxed">
          Le serveur MCP RoehAI, à l'adresse{" "}
          <code className="text-primary bg-primary/10 px-1.5 py-0.5 rounded text-sm font-mono">https://www.roehai.com/mcp</code>,
          expose {MCP_TOOL_COUNT} outils à votre assistant IA. Cette page est la référence publique du serveur :
          elle est générée depuis la liste réelle des outils en production (version du serveur 2.6.0,
          protocole MCP 2024-11-05, novembre 2026).
        </p>
      </div>

      <div className="p-4 rounded-xl border border-border bg-card mb-8 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-muted-foreground">
          <span className="font-semibold text-foreground">Lecture</span> : l'outil consulte le compte, sans rien modifier.{" "}
          <span className="font-semibold text-foreground">Écriture</span> : l'outil modifie le compte ou déclenche une action,
          et exige une clé avec la permission d'écriture. Les actions marquées d'un avertissement sont irréversibles ou facturables.
        </p>
        <Link to="/guides/llm" className="flex items-center gap-1 text-sm text-primary hover:underline font-medium shrink-0">
          Connecter un assistant <ArrowRight size={13} />
        </Link>
      </div>

      <div className="flex flex-col gap-10">
        {MCP_FAMILIES.map((family) => (
          <section key={family.title}>
            <h2 className="text-lg font-semibold text-foreground mb-1">
              {family.title}
              <span className="ml-2 text-xs font-mono text-muted-foreground">{family.tools.length} outil{family.tools.length > 1 ? "s" : ""}</span>
            </h2>
            <p className="text-sm text-muted-foreground mb-4">{family.intro}</p>
            <div className="flex flex-col gap-3">
              {family.tools.map((tool) => (
                <div key={tool.name} className="p-4 rounded-xl border border-border bg-card">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <code className="text-primary bg-primary/10 px-2 py-0.5 rounded text-sm font-mono">{tool.name}</code>
                    <span className={`text-[10px] px-1.5 py-0.5 rounded font-mono border ${tool.access === "Lecture" ? "bg-muted text-muted-foreground border-border" : "bg-primary/10 text-primary border-primary/20"}`}>
                      {tool.access}
                    </span>
                    {tool.destructive && (
                      <span className="inline-flex items-center gap-1 text-[10px] px-1.5 py-0.5 rounded font-mono border bg-destructive/10 text-destructive border-destructive/20">
                        <ShieldAlert size={10} /> Action sensible
                      </span>
                    )}
                  </div>
                  {tool.description && (
                    <p className="text-sm text-muted-foreground leading-relaxed mb-2">{tool.description}</p>
                  )}
                  {tool.params.length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                      {tool.params.map((p) => (
                        <code key={p} className="text-[11px] bg-muted text-muted-foreground px-1.5 py-0.5 rounded font-mono border border-border">{p}</code>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="mt-10 p-5 rounded-xl border border-primary/20 bg-primary/5">
        <p className="text-sm text-foreground font-semibold mb-1">Le playbook fait foi dans la conversation</p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Une fois connecté, votre assistant appelle l'outil{" "}
          <code className="text-primary bg-primary/10 px-1.5 py-0.5 rounded text-xs font-mono">get_roehai_mcp_skill</code>{" "}
          et reçoit le parcours officiel à jour : état du compte, création de l'agent, achat du numéro, crédits et appel test.
          Cette page documente les outils, le playbook orchestre leur usage.
        </p>
      </div>
    </div>
  );
}
