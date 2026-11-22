import { Link } from "react-router-dom";

// Icônes sociales au trait, comme les anciennes icônes Lucide du site
// (retirées des versions récentes de lucide-react, dessinées ici en SVG).
const strokeProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

const Twitter = ({ className }: { className?: string }) => (
  <svg {...strokeProps} className={className}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const Facebook = ({ className }: { className?: string }) => (
  <svg {...strokeProps} className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const Instagram = ({ className }: { className?: string }) => (
  <svg {...strokeProps} className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const Linkedin = ({ className }: { className?: string }) => (
  <svg {...strokeProps} className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4V8h4v1.5A6 6 0 0 1 16 8z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

// Footer identique à celui du site principal (www.roehai.com) :
// carte en verre, mêmes colonnes et liens (absolus vers le site),
// badges de sécurité, barre du bas et filigrane animé.
const SITE = "https://www.roehai.com";

type FooterLink = { label: string; href: string; internal?: boolean };

function FooterColumn({ title, links, className = "" }: { title: string; links: FooterLink[]; className?: string }) {
  return (
    <div className={`space-y-4 ${className}`}>
      <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        {title}
      </h4>
      <ul className="space-y-2.5">
        {links.map((link) => (
          <li key={link.href + link.label}>
            {link.internal ? (
              <Link to={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors leading-snug">
                {link.label}
              </Link>
            ) : (
              <a href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors leading-snug">
                {link.label}
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

const FEATURE_LINKS: FooterLink[] = [
  { label: "Réponse aux appels IA", href: `${SITE}/automatisation-appels-entreprise` },
  { label: "Appels sortants automatiques", href: `${SITE}/automatisation-appels-entreprise` },
  { label: "Qualification de leads", href: `${SITE}/agent-vocal-ia-canada` },
  { label: "Prise de rendez-vous", href: `${SITE}/ia-prise-rendez-vous` },
  { label: "Intégrations CRM", href: "/quickstart", internal: true },
  { label: "Voix personnalisée", href: `${SITE}/agent-vocal-ia-canada` },
  { label: "Disponibilité 24/7", href: `${SITE}/agent-vocal-ia-canada` },
  { label: "Analyses et rapports", href: `${SITE}/agent-vocal-ia-canada` },
];

const INDUSTRY_LINKS: FooterLink[] = [
  { label: "Cliniques médicales", href: `${SITE}/agent-vocal-ia-cliniques-medicales` },
  { label: "Garages automobiles", href: `${SITE}/agent-vocal-ia-canada` },
  { label: "Restaurants", href: `${SITE}/agent-vocal-ia-canada` },
  { label: "Assurances", href: `${SITE}/agent-vocal-ia-canada` },
  { label: "Immobilier", href: `${SITE}/agent-vocal-ia-canada` },
  { label: "Services juridiques", href: `${SITE}/agent-vocal-ia-canada` },
  { label: "Fitness et bien-être", href: `${SITE}/agent-vocal-ia-canada` },
  { label: "Beauté et spa", href: `${SITE}/agent-vocal-ia-canada` },
  { label: "→ Tous les secteurs", href: `${SITE}/agent-vocal-ia-canada` },
];

const RESOURCE_LINKS: FooterLink[] = [
  { label: "Réceptionniste IA Canada", href: `${SITE}/receptionniste-ia-canada` },
  { label: "ROI Agent Vocal IA", href: `${SITE}/blog/roi-agent-vocal-ia` },
  { label: "Blog", href: `${SITE}/blog` },
  { label: "Tarifs", href: `${SITE}/pricing` },
  { label: "Guide d’intégration", href: "/quickstart", internal: true },
  { label: "Documentation", href: "/", internal: true },
  { label: "Support", href: `${SITE}/support` },
  { label: "Téléchargement Mac", href: `${SITE}/telechargement` },
];

const COMPANY_LINKS: FooterLink[] = [
  { label: "Contact", href: `${SITE}/contact` },
  { label: "Devenir partenaire", href: `${SITE}/devenir-partenaire` },
  { label: "Statuts", href: `${SITE}/status` },
  { label: "Confidentialité", href: `${SITE}/privacy` },
  { label: "Conditions", href: `${SITE}/terms` },
  { label: "Cookies", href: `${SITE}/cookies` },
];

const POPULAR_LINKS: FooterLink[] = [
  { label: "Agent Vocal IA Canada", href: `${SITE}/agent-vocal-ia-canada` },
  { label: "Réceptionniste IA Canada", href: `${SITE}/receptionniste-ia-canada` },
  { label: "Agent Vocal IA Québec", href: `${SITE}/agent-vocal-ia-quebec` },
  { label: "Réceptionniste IA Ontario", href: `${SITE}/ai-receptionist-ontario` },
  { label: "Automatisation des appels", href: `${SITE}/automatisation-appels-entreprise` },
];

const BADGES = [
  { key: "soc2-type-i", label: "SOC 2 Type I", src: `${SITE}/badges/soc2-type-i.png`, height: 58 },
  { key: "soc2-type-ii", label: "SOC 2 Type II", src: `${SITE}/badges/soc2-type-ii.png`, height: 64 },
  { key: "gdpr", label: "GDPR", src: `${SITE}/badges/gdpr.png`, height: 64 },
  { key: "ccpa", label: "CCPA", src: `${SITE}/badges/ccpa.png`, height: 64 },
  { key: "pipeda", label: "PIPEDA", src: `${SITE}/badges/pipeda.png`, height: 62 },
] as const;

const SOCIALS = [
  { href: "https://twitter.com/roehai", Icon: Twitter, label: "Twitter" },
  { href: "https://www.facebook.com/share/17wsnDS7d1/?mibextid=wwXIfr", Icon: Facebook, label: "Facebook" },
  { href: "https://www.instagram.com/roeh.a.i?igsh=bXhwdm1zbHNkaWRp", Icon: Instagram, label: "Instagram" },
  { href: "https://www.linkedin.com/company/roehai", Icon: Linkedin, label: "LinkedIn" },
];

export function DocFooter() {
  return (
    <footer className="w-full pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="glass glass-hover rounded-2xl p-6 md:p-10">

          {/* ── Grille principale ── */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 mb-10 md:gap-8 lg:grid-cols-5">

            {/* Marque */}
            <div className="space-y-4 col-span-2 lg:col-span-1">
              <div className="flex items-center gap-2">
                <img src="/logo-roehai.png" alt="RoehAI Logo" className="h-8" width={32} height={32} />
                <span className="font-bold text-base">RoehAI</span>
                <span className="text-[11px] font-medium bg-primary/10 text-primary border border-primary/20 px-1.5 py-0.5 rounded-md leading-none">
                  Developers
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
                Le futur de la relation client est vocal et intelligent. Augmentez votre taux de conversion avec nos agents IA disponibles 24/7.
              </p>
              <div className="text-xs text-muted-foreground space-y-1">
                <p>Créé pour le monde entier</p>
                <p className="flex items-center gap-1.5 pt-1">
                  <span className="font-semibold text-foreground">Tél :</span>
                  <a href="tel:+14387952926" className="hover:text-primary transition-colors font-medium">
                    +1 (438) 795-2926
                  </a>
                </p>
              </div>

              {/* Réseaux sociaux */}
              <div className="flex gap-2">
                {SOCIALS.map(({ href, Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-8 h-8 rounded-lg glass flex items-center justify-center hover:text-primary transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            <FooterColumn title="Fonctionnalités" links={FEATURE_LINKS} />
            <FooterColumn title="Industries" links={INDUSTRY_LINKS} />
            <FooterColumn title="Ressources" links={RESOURCE_LINKS} />
            <FooterColumn title="Entreprise" links={COMPANY_LINKS} />
            <FooterColumn title="Pages populaires :" links={POPULAR_LINKS} className="col-span-2 sm:col-span-1 lg:col-span-1" />
          </div>

          {/* ── Badges de sécurité, comme sur le site ── */}
          <div className="mt-8 pt-8 border-t border-border/70">
            <div className="flex flex-col items-center gap-4">
              <h4 className="text-sm font-medium text-muted-foreground">
                Sécurité & conformité
              </h4>
              <div className="flex flex-wrap items-center justify-center gap-5 w-full">
                {BADGES.map((badge) => (
                  <img
                    key={badge.key}
                    src={badge.src}
                    alt={`${badge.label} badge`}
                    className="block object-contain w-auto"
                    style={{ height: badge.height }}
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                  />
                ))}
              </div>
              <p className="text-xs text-muted-foreground text-center max-w-2xl">
                Vos données sont protégées par des contrôles de sécurité et des pratiques de conformité reconnues.
              </p>
            </div>
          </div>

          {/* ── Barre du bas ── */}
          <div className="border-t border-border/40 mt-6 pt-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
            <span>© 2026 RoehAI Inc. Tous droits réservés.</span>
            <span className="flex items-center gap-4">
              <a href={`${SITE}/privacy`} className="hover:text-primary transition-colors">Confidentialité</a>
              <a href={`${SITE}/terms`} className="hover:text-primary transition-colors">Conditions</a>
              <a href={`${SITE}/cookies`} className="hover:text-primary transition-colors">Cookies</a>
            </span>
          </div>

        </div>
      </div>

      {/* ── Filigrane de marque animé, comme sur le site ── */}
      <div className="w-full overflow-hidden mt-2 relative" aria-hidden="true">
        <p
          className="select-none text-center font-black leading-none tracking-tighter relative z-10 animate-text-shimmer"
          style={{
            fontSize: "clamp(5rem, 18vw, 18rem)",
            color: "transparent",
            WebkitTextStroke: "1px hsl(var(--foreground) / 0.04)",
            background: "linear-gradient(110deg, hsl(var(--foreground) / 0.06) 40%, hsl(var(--foreground) / 0.15) 50%, hsl(var(--foreground) / 0.06) 60%)",
            backgroundSize: "200% 100%",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            marginBottom: "-0.1em",
            letterSpacing: "-0.03em",
          }}
        >
          RoehAI
        </p>
      </div>
    </footer>
  );
}
