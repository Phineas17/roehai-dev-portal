# RoehAI Developers, portail développeurs

Le portail public des développeurs RoehAI, publié à [dev.roehai.com](https://dev.roehai.com).
C'est la référence officielle pour intégrer RoehAI : le serveur MCP des agents (48 outils),
l'API REST, le SDK JavaScript et les webhooks.

## Contenu

- **Guide Assistants IA** (`/guides/llm`) : donner un numéro de téléphone à Muse, Claude ou ChatGPT via le serveur MCP `https://www.roehai.com/mcp`, connexion par clé API et parcours guidé.
- **Référence MCP** (`/reference/mcp`) : les 48 outils du serveur, par famille, avec paramètres et permissions. Les données de la page sont générées depuis la liste réelle du serveur (`src/data/mcpTools.ts`) : à régénérer à chaque évolution du serveur.
- **Référence API REST** : Aria (appels vocaux), Léa (WhatsApp) et les webhooks.
- **SDK** : installation et référence du package `roehai-sdk` (dépôt séparé : Phineas17/roehai-sdk).
- **Changelog** : l'historique des versions de la plateforme développeur.

## Règles éditoriales

- Aucune adresse d'infrastructure dans la documentation : uniquement les domaines publics (roehai.com, dev.roehai.com).
- Rien n'est présenté comme disponible avant d'être en production et prouvé. Les fonctions à venir vont dans la roadmap ou une section « Bientôt ».
- À chaque évolution du serveur MCP : régénérer la référence des outils, mettre à jour le guide si le parcours change, et ajouter une entrée au changelog, dans le même lot.

## Développement

```bash
npm install
npm run dev
```

Application Vite + React + TypeScript. Déploiement automatique sur Vercel à chaque push sur `main` (projet roehai-dev-portal, domaine dev.roehai.com). Un seul push groupé par lot de changements, jamais une série de petits pushes.
