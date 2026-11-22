import { Link, useLocation } from "react-router-dom";
import {
  Menu, X, ChevronDown, ArrowRight, Moon, Sun,
  PhoneCall, Zap, Users, Calendar, Database,
  Mic, Clock, BarChart2, PhoneForwarded, Wand2,
  ShieldCheck, LayoutGrid, LayoutTemplate, Stethoscope, Car,
  UtensilsCrossed, Landmark, Briefcase, Building2,
  Scale, Dumbbell, Scissors, GraduationCap,
  Plane, ShoppingBag,
} from "lucide-react";
import { useEffect, useState, type ElementType } from "react";
import { sidebarSections } from "./Sidebar";

// Header identique à celui du site principal (www.roehai.com) :
// barre fixe qui se condense en pastille au défilement, menus déroulants
// bureau, et panneau mobile accroché sous la barre (pas de tiroir latéral).
const SITE = "https://www.roehai.com";

type NavItem = {
  icon: ElementType;
  label: string;
  href: string;
  internal?: boolean;
};

const FEATURES: NavItem[] = [
  { icon: PhoneCall, label: "Réponse aux appels IA", href: `${SITE}/automatisation-appels-entreprise` },
  { icon: Zap, label: "Appels sortants auto", href: `${SITE}/automatisation-appels-entreprise` },
  { icon: Users, label: "Qualification de leads", href: `${SITE}/agent-vocal-ia-canada` },
  { icon: Calendar, label: "Prise de rendez-vous", href: `${SITE}/ia-prise-rendez-vous` },
  { icon: Database, label: "Intégrations CRM", href: "/quickstart", internal: true },
  { icon: Mic, label: "Voix personnalisée", href: `${SITE}/agent-vocal-ia-canada` },
  { icon: Clock, label: "Disponibilité 24/7", href: `${SITE}/receptionniste-ia-canada` },
  { icon: BarChart2, label: "Analytics & rapports", href: `${SITE}/agent-vocal-ia-canada` },
  { icon: PhoneForwarded, label: "Transfert d'appels", href: `${SITE}/automatisation-appels-entreprise` },
  { icon: Wand2, label: "Voix naturelle (NLP)", href: `${SITE}/agent-vocal-ia-canada` },
  { icon: ShieldCheck, label: "Vérification prospects", href: `${SITE}/comparatif-agent-vocal-ia-receptionniste` },
  { icon: LayoutGrid, label: "Portail libre-service", href: `${SITE}/agent-vocal-ia-canada` },
  { icon: LayoutTemplate, label: "Templates", href: `${SITE}/templates` },
];

const INDUSTRIES: NavItem[] = [
  { icon: Stethoscope, label: "Cliniques médicales", href: `${SITE}/agent-vocal-ia-cliniques-medicales` },
  { icon: Car, label: "Garages automobiles", href: `${SITE}/agent-vocal-ia-garages-automobiles` },
  { icon: UtensilsCrossed, label: "Restaurants", href: `${SITE}/agent-vocal-ia-restaurants` },
  { icon: Landmark, label: "Assurances", href: `${SITE}/agent-vocal-ia-assurances` },
  { icon: Briefcase, label: "Services professionnels", href: `${SITE}/agent-vocal-ia-services-professionnels` },
  { icon: Building2, label: "Immobilier", href: `${SITE}/agent-vocal-ia-immobilier` },
  { icon: Scale, label: "Services juridiques", href: `${SITE}/agent-vocal-ia-services-juridiques` },
  { icon: Dumbbell, label: "Fitness & bien-être", href: `${SITE}/agent-vocal-ia-fitness-bien-etre` },
  { icon: Scissors, label: "Beauté & spa", href: `${SITE}/agent-vocal-ia-beaute-spa` },
  { icon: GraduationCap, label: "Éducation", href: `${SITE}/agent-vocal-ia-education` },
  { icon: Plane, label: "Voyage & tourisme", href: `${SITE}/agent-vocal-ia-voyage-tourisme` },
  { icon: ShoppingBag, label: "Commerce & vente", href: `${SITE}/agent-vocal-ia-commerce-vente` },
];

const SIMPLE_LINKS = [
  { label: "Devenir partenaire", href: `${SITE}/devenir-partenaire` },
  { label: "Prix", href: `${SITE}/pricing` },
  { label: "Blog", href: `${SITE}/blog` },
  { label: "Contact", href: `${SITE}/contact` },
];

function ItemLink({ item, className, onNavigate }: { item: NavItem; className: string; onNavigate?: () => void }) {
  const Icon = item.icon;
  const content = (
    <>
      <Icon className="h-4 w-4 text-muted-foreground group-hover:text-primary shrink-0" />
      <span className="text-sm">{item.label}</span>
    </>
  );
  if (item.internal) {
    return (
      <Link to={item.href} onClick={onNavigate} className={className}>
        {content}
      </Link>
    );
  }
  return (
    <a href={item.href} onClick={onNavigate} className={className}>
      {content}
    </a>
  );
}

/* ── Menu déroulant bureau, comme sur le site ── */
function DesktopDropdown({
  label,
  items,
  viewAllHref,
  viewAllLabel,
}: {
  label: string;
  items: NavItem[];
  viewAllHref: string;
  viewAllLabel: string;
}) {
  const [open, setOpen] = useState(false);
  let timeout: ReturnType<typeof setTimeout>;
  const show = () => { clearTimeout(timeout); setOpen(true); };
  const hide = () => { timeout = setTimeout(() => setOpen(false), 120); };

  return (
    <div className="relative" onMouseEnter={show} onMouseLeave={hide}>
      <button
        className="flex items-center gap-1 text-xs lg:text-sm text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap"
        aria-expanded={open}
        aria-haspopup="true"
        aria-label={`${label} menu`}
      >
        {label}
        <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50 min-w-[480px]">
          <div className="bg-card border border-border rounded-2xl shadow-2xl p-4">
            <div className="grid gap-1 grid-cols-2">
              {items.map((item) => (
                <ItemLink
                  key={item.label}
                  item={item}
                  onNavigate={() => setOpen(false)}
                  className="flex items-center gap-2.5 px-3 py-2 rounded-lg hover:bg-primary/10 hover:text-primary transition-colors group"
                />
              ))}
            </div>
            <div className="border-t border-border/50 mt-3 pt-3">
              <a
                href={viewAllHref}
                onClick={() => setOpen(false)}
                className="flex items-center gap-1.5 text-sm text-primary hover:underline font-medium px-3"
              >
                {viewAllLabel} <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ── Section accordéon du panneau mobile, comme sur le site ── */
function MobileSection({
  label,
  items,
  viewAllHref,
  viewAllLabel,
  onNavigate,
}: {
  label: string;
  items: NavItem[];
  viewAllHref?: string;
  viewAllLabel?: string;
  onNavigate: () => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border/50">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-3.5 text-base font-medium text-foreground hover:text-primary transition-colors"
        aria-expanded={open}
        aria-label={`Basculer la section ${label}`}
      >
        {label}
        <ChevronDown className={`h-4 w-4 text-muted-foreground transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="pb-3 grid grid-cols-2 gap-1">
          {items.map((item) => (
            <ItemLink
              key={item.label + item.href}
              item={item}
              onNavigate={onNavigate}
              className="flex items-center gap-2 px-2 py-2 rounded-lg hover:bg-primary/10 hover:text-primary transition-colors group text-sm"
            />
          ))}
          {viewAllHref && viewAllLabel && (
            <a
              href={viewAllHref}
              onClick={onNavigate}
              className="col-span-2 flex items-center gap-1.5 text-sm text-primary font-medium px-2 pt-1"
            >
              {viewAllLabel} <ArrowRight className="h-3.5 w-3.5" />
            </a>
          )}
        </div>
      )}
    </div>
  );
}

export function DocNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window === "undefined") return "dark";
    const savedTheme = window.localStorage.getItem("theme");
    if (savedTheme === "light" || savedTheme === "dark") return savedTheme;
    return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  });
  const isDark = theme === "dark";

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    window.localStorage.setItem("theme", theme);
  }, [isDark, theme]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const closeMobile = () => setIsMobileMenuOpen(false);

  const themeButton = (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="w-8 h-8 flex items-center justify-center rounded-lg border border-border bg-muted/60 text-muted-foreground hover:text-foreground hover:bg-accent transition-colors shrink-0"
      aria-label={isDark ? "Activer le mode clair" : "Activer le mode sombre"}
      title={isDark ? "Mode clair" : "Mode sombre"}
    >
      {isDark ? <Sun size={15} /> : <Moon size={15} />}
    </button>
  );

  return (
    <header
      className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-300 top-3.5 ${
        isScrolled
          ? "h-12 sm:h-14 rounded-xl bg-background/40 backdrop-blur-xl border border-border scale-95 w-[95%] sm:w-[92%] lg:w-[90%] xl:w-[88%] max-w-7xl"
          : "h-12 sm:h-14 rounded-none bg-background border-y border-border w-[94%] sm:w-[96%] lg:w-[calc(100%-4rem)] xl:w-[calc(100%-6rem)] max-w-7xl lg:max-w-none 2xl:w-full 2xl:max-w-[1440px]"
      } ${isMobileMenuOpen && !isScrolled ? "max-xl:rounded-b-none" : ""}`}
    >
      <div className="mx-auto h-full px-3 sm:px-4 md:px-6 lg:px-4 xl:px-6">
        <nav className="flex items-center justify-between h-full">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0" onClick={closeMobile}>
            <img src="/logo-roehai.png" alt="RoehAI Logo" className="h-8 mr-1" width={32} height={32} />
            <span className="font-bold text-base">RoehAI</span>
            <span className="text-[11px] font-medium bg-primary/10 text-primary border border-primary/20 px-1.5 py-0.5 rounded-md leading-none">
              Developers
            </span>
          </Link>

          {/* ── Navigation bureau ── */}
          <div className="hidden xl:flex min-w-0 items-center gap-3 xl:gap-4 2xl:gap-5">
            <DesktopDropdown
              label="Fonctionnalités"
              items={FEATURES}
              viewAllHref={`${SITE}/agent-vocal-ia-canada`}
              viewAllLabel="Voir toutes les fonctionnalités"
            />
            <DesktopDropdown
              label="Secteurs d'activité"
              items={INDUSTRIES}
              viewAllHref={`${SITE}/agent-vocal-ia-canada`}
              viewAllLabel="Voir tous les secteurs"
            />

            {SIMPLE_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap"
              >
                {item.label}
              </a>
            ))}

            <Link to="/" className="text-sm text-primary font-medium hover:text-primary/80 transition-colors whitespace-nowrap">
              Développeurs
            </Link>

            {themeButton}

            <a href={`${SITE}/auth`} className="button-gradient text-sm px-4 h-9 shrink-0 font-medium">
              Commencer
            </a>
          </div>

          {/* ── Bouton mobile ── */}
          <div className="xl:hidden flex items-center gap-2">
            {themeButton}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`h-10 w-10 inline-flex items-center justify-center rounded-md text-foreground transition-colors ${
                isScrolled
                  ? "border border-border bg-background/40 backdrop-blur-xl"
                  : "border border-transparent bg-transparent"
              }`}
              aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

        </nav>
      </div>

      {/* ── Panneau mobile, accroché sous la barre comme sur le site ── */}
      {isMobileMenuOpen && (
        <div className={`xl:hidden absolute left-0 right-0 top-full bg-card border border-border shadow-2xl ${isScrolled ? "mt-2 rounded-xl" : "-mt-px rounded-b-xl"} overflow-y-auto max-h-[calc(100dvh-7rem)] animate-in fade-in duration-200`}>
          <div className="p-5 space-y-0">

            {/* Documentation du portail, mêmes sections que la barre latérale bureau */}
            {sidebarSections.map((section) => (
              <MobileSection
                key={section.title}
                label={section.title}
                items={section.items.map((item) => ({
                  icon: item.icon,
                  label: item.label,
                  href: item.to,
                  internal: true,
                }))}
                onNavigate={closeMobile}
              />
            ))}

            {/* Sections du site principal */}
            <MobileSection
              label="Fonctionnalités"
              items={FEATURES}
              viewAllHref={`${SITE}/agent-vocal-ia-canada`}
              viewAllLabel="Voir toutes les fonctionnalités"
              onNavigate={closeMobile}
            />
            <MobileSection
              label="Secteurs d'activité"
              items={INDUSTRIES}
              viewAllHref={`${SITE}/agent-vocal-ia-canada`}
              viewAllLabel="Voir tous les secteurs"
              onNavigate={closeMobile}
            />

            {SIMPLE_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMobile}
                className="block py-3.5 text-base font-medium text-foreground hover:text-primary transition-colors border-b border-border/50"
              >
                {item.label}
              </a>
            ))}
            <Link
              to="/"
              onClick={closeMobile}
              className="block py-3.5 text-base font-medium text-primary border-b border-border/50"
            >
              Développeurs →
            </Link>

            {/* Appels à l'action */}
            <div className="pt-4 space-y-3">
              <a
                href={`${SITE}/dashboard`}
                onClick={closeMobile}
                className="w-full h-11 inline-flex items-center justify-center rounded-md border border-border bg-background text-sm font-medium hover:bg-accent transition-colors"
              >
                Tableau de bord
              </a>
              <a href={`${SITE}/auth`} onClick={closeMobile} className="button-gradient w-full h-11 text-sm font-medium">
                Commencer
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
