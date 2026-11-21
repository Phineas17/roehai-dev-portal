export function Changelog() {
  return (
    <div className="max-w-3xl">
      <div className="mb-8">
        <p className="text-sm text-muted-foreground mb-1">Référence</p>
        <h1 className="text-3xl font-bold text-foreground tracking-tight mb-2">Changelog</h1>
        <p className="text-muted-foreground">Historique des versions de l'API et du SDK RoehAI.</p>
      </div>

      <div className="flex flex-col gap-8">
        <div className="flex gap-4">
          <div className="flex flex-col items-center">
            <div className="w-2 h-2 rounded-full bg-primary mt-1.5 shrink-0" />
            <div className="w-px flex-1 bg-border mt-2" />
          </div>
          <div className="flex-1 pb-8">
            <div className="flex items-center gap-3 mb-1">
              <span className="text-sm font-bold text-foreground">v1.1.0</span>
              <span className="text-xs bg-primary/10 text-primary border border-primary/20 px-2 py-0.5 rounded">stable</span>
              <span className="text-xs text-muted-foreground">Novembre 2026</span>
            </div>
            <p className="text-sm text-muted-foreground mb-3">Le serveur MCP devient le centre du portail : 48 outils pour les assistants IA, à l'adresse publique www.roehai.com/mcp.</p>
            <ul className="text-sm text-muted-foreground space-y-1.5">
              <li className="flex gap-2"><span className="text-primary">+</span> Serveur MCP RoehAI (version 2.6.0) : agents et voix, appels, SMS, missions commerciales, numéros de téléphone, crédits et rendez-vous</li>
              <li className="flex gap-2"><span className="text-primary">+</span> Adresse publique unique <code className="text-primary bg-primary/10 px-1 rounded text-xs font-mono">https://www.roehai.com/mcp</code>, sans adresse d'infrastructure exposée</li>
              <li className="flex gap-2"><span className="text-primary">+</span> Parcours guidé en conversation : le playbook officiel (get_roehai_mcp_skill) configure l'agent, le numéro et les crédits, puis prouve l'installation par un appel test</li>
              <li className="flex gap-2"><span className="text-primary">+</span> Crédits prépayés pour les appels des assistants : achats de 10 à 500 minutes, sans abonnement</li>
              <li className="flex gap-2"><span className="text-primary">+</span> Achat de numéros rattachés à un agent précis, avec au moins cinq choix présentés</li>
              <li className="flex gap-2"><span className="text-primary">+</span> Nouvelle page de référence des 48 outils MCP, générée depuis la liste réelle du serveur</li>
              <li className="flex gap-2"><span className="text-primary">+</span> Guide « Assistants IA » réécrit sur la connexion par clé API ; la connexion OAuth est annoncée comme à venir</li>
            </ul>
            <p className="text-sm font-medium text-foreground mt-4 mb-2">Durcissement de sécurité des clés et du MCP (21 novembre 2026)</p>
            <ul className="text-sm text-muted-foreground space-y-1.5">
              <li className="flex gap-2"><span className="text-primary">+</span> Permissions des clés appliquées côté serveur : lecture seule ou écriture, par clé</li>
              <li className="flex gap-2"><span className="text-primary">+</span> Expiration des clés 12 mois après leur création, plafond de 10 clés actives par compte</li>
              <li className="flex gap-2"><span className="text-primary">+</span> Clés stockées hachées uniquement ; la clé ne transite que dans les en-têtes, jamais en paramètre</li>
              <li className="flex gap-2"><span className="text-primary">+</span> Achats protégés par un devis serveur à usage unique, valable 10 minutes, avant tout débit</li>
              <li className="flex gap-2"><span className="text-primary">+</span> Limites de débit : 180 requêtes par minute par compte, 30 liens de paiement par jour ; échecs d'authentification journalisés</li>
              <li className="flex gap-2"><span className="text-primary">+</span> Erreurs du serveur MCP génériques, avec référence de suivi, sans détail interne</li>
              <li className="flex gap-2"><span className="text-primary">+</span> SDK roehai-sdk 1.1.0 : en-tête de version aligné, exemples revérifiés</li>
            </ul>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="flex flex-col items-center">
            <div className="w-2 h-2 rounded-full bg-primary mt-1.5 shrink-0" />
            <div className="w-px flex-1 bg-border mt-2" />
          </div>
          <div className="flex-1 pb-8">
            <div className="flex items-center gap-3 mb-1">
              <span className="text-sm font-bold text-foreground">v1.0.0</span>
              <span className="text-xs text-muted-foreground">Mai 2026</span>
            </div>
            <p className="text-sm text-muted-foreground mb-3">Lancement du portail développeurs et du SDK officiel.</p>
            <ul className="text-sm text-muted-foreground space-y-1.5">
              <li className="flex gap-2"><span className="text-primary">+</span> SDK <code className="text-primary bg-primary/10 px-1 rounded text-xs font-mono">roehai-sdk</code> avec modules Aria, Léa et WebhookRouter</li>
              <li className="flex gap-2"><span className="text-primary">+</span> Endpoint <code className="text-primary bg-primary/10 px-1 rounded text-xs font-mono">POST /trigger-outbound-call</code></li>
              <li className="flex gap-2"><span className="text-primary">+</span> Endpoint <code className="text-primary bg-primary/10 px-1 rounded text-xs font-mono">POST /ingest-lead</code></li>
              <li className="flex gap-2"><span className="text-primary">+</span> Endpoint <code className="text-primary bg-primary/10 px-1 rounded text-xs font-mono">POST /lea-whatsapp-send</code></li>
              <li className="flex gap-2"><span className="text-primary">+</span> Webhooks : <code className="text-primary bg-primary/10 px-1 rounded text-xs font-mono">call.completed</code>, <code className="text-primary bg-primary/10 px-1 rounded text-xs font-mono">call.failed</code>, <code className="text-primary bg-primary/10 px-1 rounded text-xs font-mono">whatsapp.*</code></li>
              <li className="flex gap-2"><span className="text-primary">+</span> Authentification par clé API (<code className="text-primary bg-primary/10 px-1 rounded text-xs font-mono">sk_*</code>)</li>
              <li className="flex gap-2"><span className="text-primary">+</span> Portail dev.roehai.com avec référence complète</li>
            </ul>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-card border border-border text-sm text-muted-foreground">
          <p className="font-medium text-foreground mb-1">Roadmap</p>
          <ul className="space-y-1">
            <li>Connexion OAuth en un clic pour le serveur MCP (remplace le collage de la clé)</li>
            <li>Mise à niveau du protocole MCP vers les révisions récentes, en gardant la compatibilité</li>
            <li>Endpoint <code className="text-primary bg-primary/10 px-1 rounded text-xs font-mono">GET /calls/:id</code> avec méthode HTTP GET native</li>
            <li>SDK Python officiel</li>
            <li>Console API Playground dans le portail</li>
            <li>Signature des webhooks HMAC-SHA256</li>
            <li>Support agent Maya dans le SDK</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
