import { CodeBlock } from "@/components/CodeBlock";
import { Shield, AlertTriangle } from "lucide-react";

const headerExample = `const response = await fetch("https://www.roehai.com/api/v1/trigger-outbound-call", {
  method: "POST",
  headers: {
    "Authorization": "Bearer sk_votre_cle_api",
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ phone_number: "+33612345678" }),
});`;

const envExample = `# .env
ROEHAI_API_KEY=sk_votre_cle_api`;

const sdkExample = `import { RoehAI } from "@roehai/sdk";

// La clé est lue depuis l'env — ne jamais la hardcoder
const client = new RoehAI({
  apiKey: process.env.ROEHAI_API_KEY!,
});`;

const errorExample = `// 401 — Clé manquante ou invalide
{
  "error": "Unauthorized",
  "code": "unauthorized"
}

// 403 — Clé valide mais permission insuffisante
{
  "error": "Forbidden — insufficient permissions",
  "code": "forbidden"
}`;

export function Auth() {
  return (
    <div className="max-w-3xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Authentification</h1>
        <p className="text-[#a09dc0]">
          Toutes les requêtes à l'API RoehAI nécessitent une clé API dans le header{" "}
          <code className="text-purple-300 bg-purple-900/30 px-1 rounded text-xs font-mono">Authorization</code>.
        </p>
      </div>

      {/* Warning */}
      <div className="mb-8 p-4 rounded-xl bg-yellow-900/20 border border-yellow-500/20 flex items-start gap-3">
        <AlertTriangle size={18} className="text-yellow-400 mt-0.5 shrink-0" />
        <p className="text-sm text-[#a09dc0]">
          Ne jamais exposer votre clé API dans du code frontend / public. Utilisez-la uniquement côté serveur ou via des variables d'environnement.
        </p>
      </div>

      <div className="flex flex-col gap-8">
        <section>
          <h2 className="text-xl font-semibold text-white mb-2">Format du header</h2>
          <p className="text-sm text-[#a09dc0] mb-3">
            Passez votre clé dans le header <code className="text-purple-300 bg-purple-900/30 px-1 rounded text-xs font-mono">Authorization</code> au format <strong className="text-white">Bearer</strong>.
          </p>
          <CodeBlock code={headerExample} language="typescript" />
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-2">Avec le SDK</h2>
          <p className="text-sm text-[#a09dc0] mb-3">
            Le SDK gère l'header automatiquement. Stockez la clé dans une variable d'environnement.
          </p>
          <CodeBlock code={envExample} language="bash" filename=".env" />
          <div className="mt-3">
            <CodeBlock code={sdkExample} language="typescript" filename="client.ts" />
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-2">Erreurs d'authentification</h2>
          <CodeBlock code={errorExample} language="json" />
        </section>

        <section>
          <div className="p-4 rounded-xl bg-[#1a1a35] border border-white/8">
            <div className="flex items-center gap-2 mb-3">
              <Shield size={16} className="text-purple-400" />
              <h3 className="text-sm font-semibold text-white">Gérer vos clés API</h3>
            </div>
            <ul className="text-sm text-[#a09dc0] space-y-1.5 list-none">
              <li>→ Créez des clés dans <strong className="text-white">Dashboard → Paramètres → Clés API</strong></li>
              <li>→ Révoquez immédiatement une clé compromise depuis le dashboard</li>
              <li>→ Utilisez une clé différente par environnement (dev / staging / prod)</li>
              <li>→ Les clés commencent par <code className="text-purple-300 bg-purple-900/30 px-1 rounded text-xs font-mono">sk_</code></li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
