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

const sdkExample = `import { RoehAI } from "roehai-sdk";

const client = new RoehAI({
  apiKey: process.env.ROEHAI_API_KEY!,
});`;

const errorExample = `// 401 - Clé manquante ou invalide
{ "error": "Unauthorized", "code": "unauthorized" }

// 403 - Permission insuffisante
{ "error": "Forbidden", "code": "forbidden" }`;

export function Auth() {
  return (
    <div className="max-w-3xl">
      <div className="mb-8">
        <p className="text-sm text-muted-foreground mb-1">Démarrage</p>
        <h1 className="text-3xl font-bold text-foreground tracking-tight mb-2">Authentification</h1>
        <p className="text-muted-foreground">
          Toutes les requêtes nécessitent une clé API dans le header{" "}
          <code className="text-primary bg-primary/10 px-1.5 py-0.5 rounded text-xs font-mono">Authorization</code>.
        </p>
      </div>

      {/* Warning */}
      <div className="mb-8 p-4 rounded-xl border border-yellow-500/20 bg-yellow-500/5 flex items-start gap-3">
        <AlertTriangle size={16} className="text-yellow-500 mt-0.5 shrink-0" />
        <p className="text-sm text-muted-foreground">
          Ne jamais exposer votre clé API dans du code frontend ou public. Utilisez-la uniquement côté serveur via des variables d'environnement.
        </p>
      </div>

      <div className="flex flex-col gap-8">
        <section>
          <h2 className="text-lg font-semibold text-foreground mb-3">Format du header</h2>
          <p className="text-sm text-muted-foreground mb-3">
            Passez votre clé dans le header <code className="text-primary bg-primary/10 px-1.5 py-0.5 rounded text-xs font-mono">Authorization</code> au format <strong className="text-foreground">Bearer</strong>.
          </p>
          <CodeBlock code={headerExample} language="typescript" />
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-3">Avec le SDK</h2>
          <p className="text-sm text-muted-foreground mb-3">
            Le SDK gère l'header automatiquement. Stockez la clé dans une variable d'environnement.
          </p>
          <CodeBlock code={envExample} language="bash" filename=".env" className="mb-3" />
          <CodeBlock code={sdkExample} language="typescript" filename="client.ts" />
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-3">Erreurs d'authentification</h2>
          <CodeBlock code={errorExample} language="json" />
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-3">Les mêmes clés pour le serveur MCP</h2>
          <p className="text-sm text-muted-foreground leading-relaxed mb-3">
            Le serveur MCP (<code className="text-primary bg-primary/10 px-1.5 py-0.5 rounded text-xs font-mono">https://www.roehai.com/mcp</code>)
            utilise les mêmes clés API que l'API REST. Votre assistant la présente dans l'en-tête{" "}
            <code className="text-primary bg-primary/10 px-1.5 py-0.5 rounded text-xs font-mono">Authorization: Bearer</code>{" "}
            ou <code className="text-primary bg-primary/10 px-1.5 py-0.5 rounded text-xs font-mono">x-roehai-token</code>,
            jamais dans une adresse ni en paramètre d'outil.
          </p>
          <ul className="text-sm text-muted-foreground space-y-1.5">
            <li><strong className="text-foreground">Permissions appliquées :</strong> une clé avec la permission « read » consulte le compte ; les appels, achats et modifications exigent « write ». Une clé limitée ne peut pas dépasser son périmètre.</li>
            <li><strong className="text-foreground">Expiration :</strong> chaque clé expire 12 mois après sa création. Le tableau de bord affiche la date et permet de la remplacer avant l'échéance.</li>
            <li><strong className="text-foreground">Plafond :</strong> 10 clés actives par compte.</li>
            <li><strong className="text-foreground">Limites de débit :</strong> des limites de débit s'appliquent par compte sur le serveur MCP ; les tentatives avec une clé invalide sont journalisées.</li>
            <li><strong className="text-foreground">Révocation :</strong> immédiate depuis le tableau de bord, l'assistant perd l'accès à la requête suivante.</li>
          </ul>
        </section>

        <section>
          <div className="p-4 rounded-xl border border-border bg-card">
            <div className="flex items-center gap-2 mb-3">
              <Shield size={15} className="text-primary" />
              <h3 className="text-sm font-semibold text-foreground">Gérer vos clés API</h3>
            </div>
            <ul className="text-sm text-muted-foreground space-y-1.5">
              <li>Créez des clés dans <strong className="text-foreground">Dashboard, Paramètres, Clés API</strong></li>
              <li>Révoquez immédiatement une clé compromise depuis le dashboard</li>
              <li>Utilisez une clé différente par environnement, comme dev, staging et prod</li>
              <li>Les clés commencent par <code className="text-primary bg-primary/10 px-1 rounded text-xs font-mono">sk_</code></li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
