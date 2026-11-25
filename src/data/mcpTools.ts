// Généré depuis la liste réelle du serveur MCP (version 2.6.0, 21 novembre 2026).
// À régénérer à chaque évolution du serveur pour garder la référence exacte.

export interface McpToolDoc {
  name: string;
  description: string;
  params: string[];
  access: "Lecture" | "Écriture";
  destructive?: boolean;
}

export const MCP_FAMILIES: { title: string; intro: string; tools: McpToolDoc[] }[] = [
  {
    title: "Démarrage",
    intro: "Le premier outil que tout assistant connecté appelle : le playbook officiel RoehAI, qui décrit le parcours complet et les règles du compte.",
    tools: [
      { name: "get_roehai_mcp_skill", description: "Charge le skill opérationnel roehai-mcp-operations et ses règles d'usage des outils.", params: [], access: "Lecture" },
    ],
  },
  {
    title: "Agents et voix",
    intro: "Créer et configurer les agents vocaux du compte : identité, salutations, instructions entrantes et sortantes, voix et configuration téléphonique.",
    tools: [
      { name: "create_agent", description: "Crée un NOUVEL agent vocal, séparé des agents existants (qui ne sont pas modifiés). L'agent est créé sans numéro : il pourra appeler et recevoir une fois un numéro rattaché. Retourne son agent_id, à passer ensuite à configure_voice_agent...", params: ["agent_name", "voice_provider", "business_name", "business_sector", "language"], access: "Écriture" },
      { name: "list_agents", description: "Liste les agents vocaux du compte, avec leur agent_id, leur moteur et leur voix actuelle. Lecture seule.", params: [], access: "Lecture" },
      { name: "get_agent_config", description: "Récupère la configuration complète d'un agent vocal Aria (par agent_id, ou l'agent le plus récemment modifié).", params: ["agent_id"], access: "Lecture" },
      { name: "configure_voice_agent", description: "Configure UN agent vocal Aria (agent_id, ou le plus récemment modifié) : identité, entreprise, moteur, messages d'accueil et prompts téléphoniques entrant/sortant.", params: ["agent_name", "custom_name", "business_name", "business_sector", "system_prompt", "phone_system_prompt", "greeting_inbound", "greeting_outbound", "agent_id", "voice_provider", "inbound_prompt", "outbound_prompt"], access: "Écriture" },
      { name: "update_system_prompt", description: "Met à jour le prompt système de votre agent vocal Aria.", params: ["system_prompt", "phone_system_prompt", "agent_id"], access: "Écriture", destructive: true },
      { name: "patch_inbound_prompt", description: "Corrige un passage précis du prompt entrant, sans réécrire tout le prompt. Refus automatique si le texte recherché est absent ou présent plusieurs fois. Aperçu avec contexte avant application, nouvelle vérification au moment de l'écritur...", params: ["search_text", "replacement_text", "change_reason", "preview_only", "agent_id", "expected_hash", "confirm"], access: "Écriture" },
      { name: "update_inbound_prompt", description: "Met à jour le prompt dédié aux appels entrants sans modifier le prompt sortant. Sauvegarde automatiquement l’ancienne version dans l’audit.", params: ["inbound_prompt", "change_reason", "confirm", "agent_id"], access: "Écriture" },
      { name: "update_greetings", description: "Met à jour les messages d'accueil pour les appels entrants/sortants.", params: ["greeting_inbound", "greeting_outbound", "agent_id"], access: "Écriture", destructive: true },
      { name: "update_agent_identity", description: "Met à jour l'identité de l'agent (nom, entreprise, secteur).", params: ["agent_name", "custom_name", "business_name", "business_sector", "agent_id"], access: "Écriture", destructive: true },
      { name: "list_voices", description: "Catalogue des voix disponibles par moteur (Vector 2.1 et Vector 2.0), avec genre, caractère et description, à présenter à l'utilisateur pour qu'il choisisse. Lecture seule.", params: ["provider"], access: "Lecture" },
      { name: "set_agent_voice", description: "Règle la voix d'UN agent précis (agent_id). La voix doit exister dans le catalogue du moteur de l'agent (voir list_voices) ; elle est appliquée à ce seul agent.", params: ["agent_id", "voice"], access: "Écriture" },
      { name: "get_phone_config", description: "Récupère la configuration téléphonique de l'agent.", params: [], access: "Lecture" },
    ],
  },
  {
    title: "Appels",
    intro: "Passer des appels immédiats ou planifiés, suivre leur statut, consulter la file et l'historique, et récupérer les transcriptions.",
    tools: [
      { name: "trigger_call_now", description: "Déclenche immédiatement un appel sortant Aria vers un prospect. L'utilisateur doit confirmer cette action dans ChatGPT.", params: ["phone_number", "business_name", "contact_name", "pain_point", "context"], access: "Écriture", destructive: true },
      { name: "schedule_call", description: "Planifie un appel sortant Aria pour un prospect.", params: ["prospect_name", "phone_number", "email", "scheduled_at", "pain_point", "source"], access: "Écriture" },
      { name: "get_call_status", description: "Récupère le statut d'un appel Aria à partir d'un call_log_id, call_control_id ou call_session_id.", params: ["call_log_id", "call_control_id", "call_session_id"], access: "Lecture" },
      { name: "get_call_transcript", description: "Récupère la transcription, le résumé et le rapport du dernier appel pour un contact.", params: ["phone_number"], access: "Lecture" },
      { name: "get_call_queue", description: "Récupère la file d'attente des appels sortants.", params: ["status", "limit"], access: "Lecture" },
      { name: "get_call_logs", description: "Récupère l'historique des appels téléphoniques récents.", params: ["limit"], access: "Lecture" },
    ],
  },
  {
    title: "Missions commerciales",
    intro: "Les campagnes d'appels sortants : création et pilotage des missions, prospects, instructions temporaires approuvées et appels de prospection.",
    tools: [
      { name: "create_sales_mission", description: "Crée une mission de vente à l'état brouillon.", params: ["name", "sector", "location", "objective", "offer", "agent_id", "timezone", "max_prospects", "max_calls", "cooldown_minutes", "working_hours_start", "working_hours_end", "working_days"], access: "Écriture" },
      { name: "list_sales_missions", description: "Liste les missions de vente de l'utilisateur, de la plus récente à la plus ancienne.", params: [], access: "Lecture" },
      { name: "research_sales_mission", description: "Lance la recherche de prospects pour une mission approuvée.", params: ["mission_id"], access: "Écriture" },
      { name: "approve_sales_mission", description: "Approuve une révision donnée d'une mission de vente.", params: ["mission_id", "revision"], access: "Écriture" },
      { name: "start_sales_mission", description: "Démarre une mission de vente déjà approuvée.", params: ["mission_id"], access: "Écriture" },
      { name: "pause_sales_mission", description: "Met en pause une mission de vente en cours.", params: ["mission_id"], access: "Écriture" },
      { name: "get_mission_progress", description: "Renvoie le détail d'une mission, sa file d'appels, ses événements, ses variantes de script et ses résultats.", params: ["mission_id"], access: "Lecture" },
      { name: "get_mission_prospects", description: "Liste les prospects liés à une mission de vente, avec la mission elle-même.", params: ["mission_id"], access: "Lecture" },
      { name: "add_prospect", description: "Ajoute un prospect à la file d'attente des appels sortants.", params: ["prospect_name", "phone_number", "email", "pain_point", "source"], access: "Écriture" },
      { name: "prioritize_mission_prospect", description: "Place un prospect en tête de la file d'appels de sa mission.", params: ["mission_id", "mission_prospect_id"], access: "Écriture" },
      { name: "call_mission_prospect", description: "Déclenche un appel vers un prospect d'une mission. L'utilisateur doit confirmer cette action, chaque appel est facturable.", params: ["mission_id", "mission_prospect_id"], access: "Écriture", destructive: true },
      { name: "create_outbound_prompt", description: "Crée un prompt sortant temporaire à l'état brouillon, lié ou non à une mission et à un prospect.", params: ["phone_number", "prompt", "mission_id", "mission_prospect_id", "context"], access: "Écriture" },
      { name: "get_outbound_prompt", description: "Relit un prompt sortant temporaire enregistré.", params: ["prompt_id"], access: "Lecture" },
      { name: "update_outbound_prompt", description: "Modifie un prompt sortant temporaire à l'état brouillon. Un prompt approuvé ne peut plus être modifié.", params: ["prompt_id", "prompt", "context"], access: "Écriture" },
      { name: "approve_outbound_prompt", description: "Approuve un prompt sortant temporaire à l'état brouillon.", params: ["prompt_id"], access: "Écriture" },
      { name: "launch_outbound_call_with_prompt", description: "Lance un appel avec exactement un prompt sortant approuvé. Seul le lancement place l'appel et consomme des crédits.", params: ["prompt_id"], access: "Écriture" },
    ],
  },
  {
    title: "SMS",
    intro: "Envoyer des textos depuis les numéros du compte et suivre les conversations, les modèles et le quota.",
    tools: [
      { name: "send_sms", description: "Envoie un SMS via le réseau téléphonique RoehAI. Le numéro expéditeur est résolu depuis la configuration de l'utilisateur (repli sur le numéro de messagerie RoehAI), le quota du plan est vérifié et l'envoi est journalisé. La livrai...", params: ["to", "message", "from"], access: "Écriture" },
      { name: "list_sms_conversations", description: "Liste les conversations SMS de l'utilisateur, triées par dernier message, avec le compteur de non lus.", params: ["limit"], access: "Lecture" },
      { name: "list_sms_messages", description: "Liste les messages SMS récents de l'utilisateur (envoyés et reçus), du plus récent au plus ancien. Filtre optionnel par numéro de téléphone.", params: ["phone_number", "limit"], access: "Lecture" },
      { name: "list_sms_templates", description: "Liste les modèles de SMS enregistrés de l'utilisateur (nom, contenu, variables, catégorie, actif ou non).", params: [], access: "Lecture" },
      { name: "get_sms_quota_status", description: "Renvoie le quota SMS du plan de l'utilisateur : plan, quota en segments, segments utilisés et restants, exemption éventuelle.", params: [], access: "Lecture" },
    ],
  },
  {
    title: "Numéros de téléphone",
    intro: "Chercher des numéros disponibles, les acheter pour un agent et suivre l'activation.",
    tools: [
      { name: "search_phone_numbers", description: "Recherche des numéros de téléphone disponibles à l'achat dans l'inventaire de numéros RoehAI, avec les prix RoehAI (frais d'activation et coût mensuel) calculés comme dans le tableau de bord. Lecture seule, aucun achat n'est déclenché.", params: ["country_code", "area_code", "region", "city", "features", "limit"], access: "Lecture" },
      { name: "list_my_phone_numbers", description: "Liste les numéros de téléphone du compte RoehAI de l'utilisateur authentifié, avec leur statut (actif, statut d'achat, coûts).", params: [], access: "Lecture" },
      { name: "purchase_phone_number", description: "Prépare l'achat d'un numéro choisi avec search_phone_numbers, en deux modes de paiement. Mode lien (défaut) : crée une page de paiement sécurisée (frais d'activation + première période, carte sauvegardée pour les renouvellements) et retourn...", params: ["phone_number", "country_code", "region_name", "billing_period", "payment_mode", "confirm_charge", "quote_token", "agent_id"], access: "Écriture", destructive: true },
      { name: "get_phone_purchase_status", description: "Renvoie le statut d'achat et d'activation d'un numéro du compte : en attente de paiement ou de provisioning, en cours, actif, ou échec. À utiliser après le paiement pour confirmer à l'utilisateur que son numéro est actif.", params: ["phone_number"], access: "Lecture" },
    ],
  },
  {
    title: "Crédits",
    intro: "Le solde de minutes d'appel du compte et l'achat de crédits prépayés.",
    tools: [
      { name: "get_credit_balance", description: "Renvoie le solde de crédits d'appels du compte (minutes prépayées pay-as-you-go) : tokens achetés, tokens bonus (essai, démo, promo), total et équivalent en minutes d'appels, plus les 5 derniers achats. À consulter avant de passer des ap...", params: [], access: "Lecture" },
      { name: "purchase_credits", description: "Achète des minutes d'appels prépayées (crédits Aria, pay-as-you-go, sans abonnement) pour le compte : de 10 à 500 minutes par achat, prix calculés côté serveur avec la même grille que le tableau de bord (60 min = 30 USD, 120 = 55, 250 =...", params: ["minutes", "payment_mode", "confirm_charge", "quote_token"], access: "Écriture", destructive: true },
      { name: "get_credit_purchase_status", description: "Renvoie le statut d'un achat de crédits : session_id pour un achat par lien, payment_intent_id pour un débit sur carte enregistrée. Statut completed = crédits ajoutés au solde.", params: ["session_id", "payment_intent_id"], access: "Lecture" },
    ],
  },
  {
    title: "Rendez-vous",
    intro: "Les rendez-vous pris par les agents du compte.",
    tools: [
      { name: "get_bookings", description: "Récupère les rendez-vous pris via l'agent vocal.", params: ["status", "limit"], access: "Lecture" },
    ],
  },
];

export const MCP_TOOL_COUNT = MCP_FAMILIES.reduce((n, f) => n + f.tools.length, 0);
