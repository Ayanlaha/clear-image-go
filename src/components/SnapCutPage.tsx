import { useRef, useState, type ChangeEvent, type DragEvent } from "react";
import {
  ArrowRight,
  Check,
  Clock3,
  CloudUpload,
  Code2,
  Download,
  Eye,
  Github,
  ImageIcon,
  Instagram,
  Layers3,
  LoaderCircle,
  LockKeyhole,
  Menu,
  MousePointerClick,
  RotateCcw,
  ShieldCheck,
  Sparkles,
  Twitter,
  Upload,
  X,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import logoAsset from "@/assets/snapcut-logo.png.asset.json";

type WorkspaceState = "idle" | "processing" | "result";

const features = [
  { icon: MousePointerClick, title: "One-click removal", text: "Clean backgrounds without brushes, masks, or complex editing tools." },
  { icon: Layers3, title: "Transparent output", text: "Export crisp, high-resolution PNG files ready for any new backdrop." },
  { icon: ShieldCheck, title: "Secure by default", text: "Uploaded images are encrypted in transit and automatically deleted." },
  { icon: Zap, title: "Fast processing", text: "Our optimized AI pipeline delivers polished results in just seconds." },
  { icon: CloudUpload, title: "Drag and drop", text: "Drop PNG, JPG, or WEBP images directly into your workspace." },
  { icon: Eye, title: "Instant preview", text: "Compare your original and transparent result before downloading." },
];

const plans = [
  { name: "Free", price: "₹0", suffix: "forever", description: "For quick everyday edits", features: ["5 credits every day", "Standard resolution", "Instant preview"], cta: "Start for free" },
  { name: "Creator Pack", price: "₹299", suffix: "one time", description: "For creators and small shops", features: ["100 image credits", "High-resolution PNG", "No watermark", "Credits never expire"], cta: "Buy 100 credits", popular: true },
  { name: "Pro Unlimited", price: "₹999", suffix: "per month", description: "For teams with steady volume", features: ["Unlimited removals", "High-resolution PNG", "Priority processing", "API access"], cta: "Choose Pro" },
];

const faqs = [
  ["Which images work best?", "Sharp, well-lit photos with a clearly visible subject produce the cleanest edges."],
  ["Are my uploads private?", "Yes. Images are handled securely and are set to be automatically deleted after processing."],
  ["Can I use the results commercially?", "Yes. Your downloaded results can be used in product listings, campaigns, and creative projects."],
  ["Does this page charge real money?", "Not yet. The checkout shown here is a safe preview until Razorpay is connected and verified."],
];

export function SnapCutPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [checkoutPlan, setCheckoutPlan] = useState<string | null>(null);

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <Navbar open={menuOpen} onToggle={() => setMenuOpen((value) => !value)} />
      <Hero />
      <ToolWorkspace />
      <Features />
      <Pricing onCheckout={setCheckoutPlan} />
      <Faq />
      <Footer />
      <CheckoutPreview plan={checkoutPlan} onOpenChange={(open) => !open && setCheckoutPlan(null)} />
    </main>
  );
}

function Navbar({ open, onToggle }: { open: boolean; onToggle: () => void }) {
  const links = [["Features", "#features"], ["Pricing", "#pricing"], ["API Docs", "#api"], ["FAQ", "#faq"]];
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8" aria-label="Main navigation">
        <a href="#top" aria-label="SnapCut AI home" className="flex items-center">
          <img src={logoAsset.url} alt="SnapCut AI" className="h-10 w-auto max-w-[184px] object-contain object-left" />
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {links.map(([label, href]) => <a key={label} href={href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">{label}</a>)}
        </div>
        <div className="hidden md:block"><Button variant="hero" onClick={() => document.querySelector("#workspace")?.scrollIntoView({ behavior: "smooth" })}>Get started <ArrowRight /></Button></div>
        <Button variant="ghost" size="icon" className="md:hidden" aria-label={open ? "Close menu" : "Open menu"} onClick={onToggle}>{open ? <X /> : <Menu />}</Button>
      </nav>
      {open && <div className="border-t border-border bg-background px-5 py-5 md:hidden">{links.map(([label, href]) => <a key={label} href={href} className="block border-b border-border py-3 text-sm font-medium" onClick={onToggle}>{label}</a>)}</div>}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative px-5 pb-16 pt-32 sm:pt-40">
      <div className="hero-grid absolute inset-0 opacity-45" aria-hidden="true" />
      <div className="relative mx-auto max-w-5xl text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-xs font-semibold text-accent sm:text-sm"><Sparkles className="size-4" /> Powered by advanced AI <span className="text-muted-foreground">•</span> Instant results</div>
        <h1 className="mx-auto max-w-4xl text-balance text-5xl font-bold leading-[1.08] tracking-normal sm:text-6xl lg:text-7xl">Remove image backgrounds <span className="text-gradient">in one click</span></h1>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-7 text-muted-foreground sm:text-lg">Professional-quality background removal for e-commerce, creators, and developers. Fast, simple, and affordable.</p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <Button variant="hero" size="xl" onClick={() => document.querySelector("#workspace")?.scrollIntoView({ behavior: "smooth" })}><Upload /> Upload image — free</Button>
          <Button variant="glass" size="xl" onClick={() => document.querySelector("#pricing")?.scrollIntoView({ behavior: "smooth" })}>Explore pricing <ArrowRight /></Button>
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground"><span className="flex items-center gap-1.5"><Check className="size-3.5 text-accent" /> No signup required</span><span className="flex items-center gap-1.5"><LockKeyhole className="size-3.5 text-accent" /> Auto-deleted uploads</span><span className="flex items-center gap-1.5"><Zap className="size-3.5 text-accent" /> Results in seconds</span></div>
      </div>
    </section>
  );
}

function ToolWorkspace() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [state, setState] = useState<WorkspaceState>("idle");
  const [image, setImage] = useState<string | null>(null);
  const [fileName, setFileName] = useState("snapcut-result.png");
  const [error, setError] = useState("");

  const processFile = (file?: File) => {
    if (!file) return;
    if (!(["image/png", "image/jpeg", "image/webp"].includes(file.type)) || file.size > 10 * 1024 * 1024) {
      setError("Choose a PNG, JPG, or WEBP file under 10MB."); return;
    }
    setError("");
    setFileName(`${file.name.replace(/\.[^.]+$/, "")}-transparent.png`);
    const reader = new FileReader();
    reader.onload = () => { setImage(String(reader.result)); setState("processing"); window.setTimeout(() => setState("result"), 1800); };
    reader.readAsDataURL(file);
  };
  const onDrop = (event: DragEvent<HTMLDivElement>) => { event.preventDefault(); processFile(event.dataTransfer.files[0]); };
  const reset = () => { setState("idle"); setImage(null); setError(""); if (inputRef.current) inputRef.current.value = ""; };
  const download = () => {
    if (!image) return;
    const source = new Image();
    source.onload = () => { const canvas = document.createElement("canvas"); canvas.width = source.naturalWidth; canvas.height = source.naturalHeight; canvas.getContext("2d")?.drawImage(source, 0, 0); const link = document.createElement("a"); link.href = canvas.toDataURL("image/png"); link.download = fileName; link.click(); };
    source.src = image;
  };

  return (
    <section id="workspace" className="scroll-mt-24 px-5 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 text-center"><p className="section-label">Try it now</p><h2 className="mt-3 text-3xl font-bold sm:text-4xl">Your image. No background.</h2><p className="mt-3 text-muted-foreground">Upload one image and watch SnapCut AI do the precision work.</p></div>
        <div className="workspace-shell">
          {state === "idle" && (
            <div role="button" tabIndex={0} onClick={() => inputRef.current?.click()} onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && inputRef.current?.click()} onDragOver={(e) => e.preventDefault()} onDrop={onDrop} className="group flex min-h-[380px] cursor-pointer flex-col items-center justify-center rounded-md border-2 border-dashed border-border bg-surface/45 p-8 text-center transition-all hover:border-accent hover:bg-accent/5">
              <input ref={inputRef} className="sr-only" type="file" accept="image/png,image/jpeg,image/webp" onChange={(e: ChangeEvent<HTMLInputElement>) => processFile(e.target.files?.[0])} />
              <div className="mb-6 flex size-16 items-center justify-center rounded-md bg-primary/15 text-accent ring-1 ring-primary/30 transition-transform group-hover:-translate-y-1"><CloudUpload className="size-8" /></div>
              <h3 className="text-xl font-semibold">Drag and drop your image here</h3><p className="mt-2 text-sm text-muted-foreground">or <span className="font-semibold text-accent">browse your files</span></p><p className="mt-6 text-xs text-muted-foreground">PNG, JPG, WEBP • Up to 10MB</p>{error && <p className="mt-4 text-sm text-destructive">{error}</p>}
            </div>
          )}
          {state === "processing" && <div className="flex min-h-[380px] flex-col items-center justify-center text-center"><div className="relative mb-7"><div className="absolute inset-0 animate-ping rounded-full bg-accent/20" /><div className="relative flex size-20 items-center justify-center rounded-full border border-accent/40 bg-accent/10"><LoaderCircle className="size-9 animate-spin text-accent" /></div></div><h3 className="text-xl font-semibold">AI is processing your image…</h3><p className="mt-2 text-sm text-muted-foreground">Detecting edges and separating the subject</p><div className="mt-8 h-1.5 w-52 overflow-hidden rounded-full bg-muted"><div className="processing-bar h-full rounded-full bg-gradient-brand" /></div></div>}
          {state === "result" && image && (
            <div><div className="mb-5 flex flex-col justify-between gap-3 sm:flex-row sm:items-center"><div><p className="section-label">Complete</p><h3 className="mt-1 text-xl font-semibold">Your result is ready</h3></div><Button variant="ghost" onClick={reset}><RotateCcw /> Try another</Button></div><div className="grid overflow-hidden rounded-md border border-border md:grid-cols-2"><Preview label="Original" src={image} /><Preview label="Background removed" src={image} transparent /></div><div className="mt-6 flex flex-col items-center justify-between gap-4 sm:flex-row"><p className="text-sm text-muted-foreground"><Check className="mr-2 inline size-4 text-accent" />High-resolution PNG prepared</p><Button variant="hero" size="xl" onClick={download}><Download /> Download transparent PNG</Button></div></div>
          )}
        </div>
      </div>
    </section>
  );
}

function Preview({ label, src, transparent = false }: { label: string; src: string; transparent?: boolean }) {
  return <div className={transparent ? "checkerboard relative min-h-72 border-t border-border md:border-l md:border-t-0" : "relative min-h-72 bg-surface"}><span className="absolute left-3 top-3 z-10 rounded-sm bg-background/85 px-2.5 py-1 text-xs font-semibold backdrop-blur">{label}</span><img src={src} alt={`${label} preview`} className="h-72 w-full object-contain p-5" /></div>;
}

function Features() {
  return <section id="features" className="scroll-mt-20 border-y border-border bg-surface/30 px-5 py-24"><div className="mx-auto max-w-7xl"><div className="max-w-2xl"><p className="section-label">Built for better cutouts</p><h2 className="mt-3 text-3xl font-bold sm:text-4xl">Everything you need. Nothing you don’t.</h2><p className="mt-4 leading-7 text-muted-foreground">A focused workflow that turns tedious editing into one clean, fast action.</p></div><div className="mt-12 grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">{features.map(({ icon: Icon, title, text }) => <article key={title} className="bg-card p-7"><div className="mb-6 flex size-10 items-center justify-center rounded-md bg-accent/10 text-accent"><Icon className="size-5" /></div><h3 className="font-semibold">{title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p></article>)}</div></div></section>;
}

function Pricing({ onCheckout }: { onCheckout: (plan: string) => void }) {
  return <section id="pricing" className="scroll-mt-20 px-5 py-24"><div className="mx-auto max-w-7xl"><div className="text-center"><p className="section-label">Simple pricing</p><h2 className="mt-3 text-3xl font-bold sm:text-4xl">Start free. Scale when you’re ready.</h2><p className="mt-4 text-muted-foreground">No complicated credit math. Choose what fits your workflow.</p></div><div className="mt-12 grid items-stretch gap-5 lg:grid-cols-3">{plans.map((plan) => <article key={plan.name} className={`relative flex flex-col rounded-md border p-7 ${plan.popular ? "border-accent bg-card shadow-brand" : "border-border bg-card"}`}>{plan.popular && <span className="absolute -top-3 right-5 rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground">Most popular</span>}<h3 className="text-lg font-semibold">{plan.name}</h3><p className="mt-2 text-sm text-muted-foreground">{plan.description}</p><div className="mt-7 flex items-end gap-2"><span className="text-4xl font-bold">{plan.price}</span><span className="pb-1 text-sm text-muted-foreground">{plan.suffix}</span></div><ul className="my-8 space-y-3">{plan.features.map((feature) => <li key={feature} className="flex items-center gap-2.5 text-sm"><Check className="size-4 text-accent" />{feature}</li>)}</ul><Button className="mt-auto w-full" variant={plan.popular ? "hero" : "glass"} size="xl" onClick={() => plan.name === "Free" ? document.querySelector("#workspace")?.scrollIntoView({ behavior: "smooth" }) : onCheckout(plan.name)}>{plan.cta} {plan.name !== "Free" && <ArrowRight />}</Button></article>)}</div><p className="mt-6 text-center text-xs text-muted-foreground"><LockKeyhole className="mr-1 inline size-3" /> Paid checkout is currently a safe Razorpay preview. No real payment is collected.</p></div></section>;
}

function Faq() {
  return <section id="faq" className="scroll-mt-20 border-y border-border bg-surface/30 px-5 py-24"><div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[.8fr_1.2fr]"><div><p className="section-label">FAQ</p><h2 className="mt-3 text-3xl font-bold">Good questions.<br />Clear answers.</h2><p className="mt-4 text-muted-foreground">Everything you need to know before your first cutout.</p></div><div className="divide-y divide-border border-y border-border">{faqs.map(([question, answer]) => <details key={question} className="group py-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-semibold">{question}<span className="text-accent transition-transform group-open:rotate-45">+</span></summary><p className="max-w-2xl pt-3 text-sm leading-6 text-muted-foreground">{answer}</p></details>)}</div></div></section>;
}

function Footer() {
  return <footer id="api" className="px-5 py-10"><div className="mx-auto flex max-w-7xl flex-col gap-8"><div className="flex flex-col justify-between gap-6 border-b border-border pb-8 sm:flex-row sm:items-center"><img src={logoAsset.url} alt="SnapCut AI" className="h-11 w-auto max-w-[200px] object-contain object-left" /><div className="flex items-center gap-2"><Button variant="ghost" size="icon" aria-label="GitHub"><Github /></Button><Button variant="ghost" size="icon" aria-label="Twitter"><Twitter /></Button><Button variant="ghost" size="icon" aria-label="Instagram"><Instagram /></Button></div></div><div className="flex flex-col justify-between gap-4 text-xs text-muted-foreground sm:flex-row"><p>© 2026 SnapCut AI. All rights reserved.</p><div className="flex gap-5"><a href="#top" className="hover:text-foreground">Privacy policy</a><a href="#top" className="hover:text-foreground">Terms of service</a><a href="#top" className="hover:text-foreground">API status</a></div></div></div></footer>;
}

function CheckoutPreview({ plan, onOpenChange }: { plan: string | null; onOpenChange: (open: boolean) => void }) {
  return <Dialog open={Boolean(plan)} onOpenChange={onOpenChange}><DialogContent className="max-w-md border-border bg-card"><DialogHeader><div className="mb-3 flex size-11 items-center justify-center rounded-md bg-primary/15 text-accent"><LockKeyhole /></div><DialogTitle>Razorpay checkout preview</DialogTitle><DialogDescription>This demo is ready for the secure order flow, but it will not charge you.</DialogDescription></DialogHeader><div className="rounded-md border border-border bg-surface p-4"><div className="flex items-center justify-between"><span className="text-sm text-muted-foreground">Selected plan</span><span className="font-semibold">{plan}</span></div><div className="mt-3 flex items-center justify-between border-t border-border pt-3"><span className="text-sm text-muted-foreground">Amount</span><span className="text-lg font-bold">{plan === "Creator Pack" ? "₹299" : "₹999"}</span></div></div><Button variant="hero" size="xl" className="w-full" disabled><ShieldCheck /> Secure checkout coming soon</Button><p className="text-center text-xs text-muted-foreground">Razorpay keys and server verification are required to accept real payments.</p></DialogContent></Dialog>;
}