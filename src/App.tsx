import React, { useEffect, useRef, type ReactNode } from 'react';
import {
  Bike, ArrowRight, AlertTriangle, Banknote, GraduationCap, Gauge,
  Play, CheckCircle2, CheckCheck, Laptop, PlayCircle, Infinity as InfinityIcon,
  RefreshCw, Smartphone, Download, MessageCircle, AlertCircle, CreditCard,
  Landmark, Lock, ShieldCheck, X, Check, Wrench, Video, HelpCircle,
  AlertOctagon, Hammer, Clock, MonitorPlay, ChevronDown, TrendingDown,
  TrendingUp, Globe, Share2, Mail, Menu, XIcon
} from 'lucide-react';

/* ───────────────────────── Intersection Observer Hook ───────────────────────── */
function useFadeIn() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('animate-fade-in-up');
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}

function FadeIn({ children, className = '', delay = '' }: { children: ReactNode; className?: string; delay?: string; key?: React.Key }) {
  const ref = useFadeIn();
  return (
    <div ref={ref} className={`opacity-0 ${delay} ${className}`}>
      {children}
    </div>
  );
}

/* ───────────────────────── Mobile Menu Hook ───────────────────────── */
function useMobileMenu() {
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return { open, toggle: () => setOpen(v => !v), close: () => setOpen(false) };
}

/* ───────────────────────── Constants ───────────────────────── */
const CHECKOUT_URL = 'https://pay.hotmart.com/A100995866R';

const NAV_LINKS = [
  { label: 'Método', href: '#evolution' },
  { label: 'Conteúdo', href: '#deliverables' },
  { label: 'Garantia', href: '#garantia' },
  { label: 'FAQ', href: '#faq' },
];

const PAIN_POINTS = [
  { icon: AlertTriangle, title: "Custo Elevado", desc: "Uma revisão simples custa entre R$200 e R$250 em oficinas especializadas." },
  { icon: Banknote, title: "Falta de Vagas", desc: "A oficina nem sempre tem vaga imediata, deixando você sem bike por dias." },
  { icon: GraduationCap, title: "Insegurança no Pedal", desc: "O medo de uma quebra no meio do caminho que estrague seu treino ou passeio." },
  { icon: Gauge, title: "Dependência Total", desc: "Ficar refém de mecânicos para ajustes básicos que você mesmo poderia fazer." }
];

const VIDEO_ITEMS = [
  "Como resolver os principais problemas da sua bike em casa",
  "Como evitar gastos desnecessários",
  "Como criar uma rotina simples de manutenção",
  "Como parar de depender da oficina para o básico"
];

const PHASES = [
  { phase: "01", title: "Fase 1 — Entender sua bike", items: ["Partes da bike", "Função de cada componente", "Tipos de bicicleta", "Base sólida para perder o medo"], note: "" },
  { phase: "02", title: "Fase 2 — Resolver o básico", items: ["Troca de pneu", "Troca de câmara", "Calibragem correta", "Ajustes simples"], note: "Aqui o curso já começa a se pagar." },
  { phase: "03", title: "Fase 3 — Prevenção inteligente", items: ["Limpeza correta", "Lubrificação adequada", "Identificação de desgaste"], note: "Prevenir sempre custa menos do que consertar." },
  { phase: "04", title: "Fase 4 — Ajustes essenciais", items: ["Ajuste de freios", "Ajuste de marchas", "Pequenos reparos", "Avaliação de componentes"], note: "Você deixa de depender da oficina para tudo." },
  { phase: "05", title: "Fase 5 — Rotina de manutenção", items: ["Checagem pré-pedal", "Manutenção preventiva", "Bike sempre pronta"], note: "Sem surpresa. Sem gasto inesperado.", highlight: true }
];

const AUDIENCE = [
  "Para quem quer economizar dinheiro",
  "Para quem quer parar de depender de oficina",
  "Para quem já perdeu pedal por problema simples",
  "Para quem tem bike cara e quer cuidar melhor dela",
  "Para quem mora longe de mecânico",
  "Para iniciantes, intermediários e avançados"
];

const DELIVERABLES = [
  { icon: Laptop, title: "Curso 100% online", desc: "Aprenda de onde estiver, no seu próprio ritmo." },
  { icon: PlayCircle, title: "Aulas gravadas passo a passo", desc: "Detalhes minuciosos para você não perder nada." },
  { icon: InfinityIcon, title: "Acesso vitalício", desc: "Pague uma vez e tenha o conteúdo para sempre.", highlight: true },
  { icon: RefreshCw, title: "Atualizações constantes", desc: "Novas aulas avançadas adicionadas regularmente.", highlight: true },
  { icon: Smartphone, title: "Assista pelo celular", desc: "Interface otimizada para dispositivos móveis." },
  { icon: Download, title: "Aulas Offline", desc: "Baixe as aulas e assista até mesmo na trilha sem internet." }
];

const AUTONOMY_CARDS = [
  { img: "/seguranca.png", title: "Segurança", desc: "Liberdade para pedalar sem medo de imprevistos." },
  { img: "/precisao.png", title: "Precisão", desc: "O controle total da sua performance em suas mãos." },
  { img: "/autonimia.png", title: "Autonomia", desc: "Manutenção profissional feita por você, no seu tempo." },
  { img: "/prontidao.png", title: "Prontidão", desc: "Sua bike sempre pronta para o próximo desafio." }
];

const COMPARISON_NEG = [
  "Gastos recorrentes com mão de obra",
  "Bike parada semanas na oficina",
  "Medo de quebras no meio do pedal",
  "Peças trocadas sem necessidade"
];

const COMPARISON_POS = [
  "Economia real em todas as revisões",
  "Sua bike pronta quando você quiser",
  "Confiança total no seu equipamento",
  "Conhecimento técnico pra toda vida"
];

const OBJECTIONS = [
  { icon: HelpCircle, title: "\u201CNão entendo nada.\u201D", desc: "O curso começa do zero." },
  { icon: AlertOctagon, title: "\u201CMinha bike é cara, tenho medo.\u201D", desc: "Você aprende técnica correta, não improviso." },
  { icon: Hammer, title: "\u201CNão tenho ferramenta.\u201D", desc: "Você recebe a lista certa para começar." },
  { icon: Clock, title: "\u201CNão tenho tempo.\u201D", desc: "As aulas são objetivas e podem ser assistidas pelo celular." },
  { icon: MonitorPlay, title: "\u201CTem vídeo no YouTube.\u201D", desc: "No YouTube é conteúdo solto. Aqui existe método, sequência e suporte." }
];

const FAQ_ITEMS = [
  { q: "Serve para qualquer bike?", a: "MTB, Speed, Urbana e parte mecânica da E-bike." },
  { q: "O acesso é vitalício?", a: "Sim." },
  { q: "Tem atualização?", a: "Sim. Novos módulos são adicionados conforme demanda." },
  { q: "É para iniciante?", a: "Sim. Começa do absoluto básico." }
];

const TESTIMONIAL_IMAGES = [
  "/testimonial-1.jpg",
  "/testimonial-2.jpg",
  "/testimonial-3.jpg",
  "/testimonial-5.jpg"
];

/* ───────────────────────── CTA Button ───────────────────────── */
function CTAButton({ children, className = '', large = false }: { children: ReactNode; className?: string; large?: boolean }) {
  return (
    <a
      href={CHECKOUT_URL}
      aria-label="Garantir acesso ao curso Bike na Linha"
      className={`
        inline-flex items-center justify-center gap-2 bg-primary text-black font-black uppercase
        rounded-2xl transition-all duration-300 hover:scale-[1.02] animate-pulse-glow cursor-pointer
        ${large
          ? 'w-full py-8 text-2xl md:text-3xl shadow-[0_20px_40px_rgba(212,255,0,0.2)] hover:shadow-[0_25px_50px_rgba(212,255,0,0.3)]'
          : 'px-8 py-4 text-lg rounded-xl shadow-[0_0_20px_rgba(212,255,0,0.3)] hover:shadow-[0_0_30px_rgba(212,255,0,0.5)]'
        }
        ${className}
      `}
    >
      {children}
    </a>
  );
}

/* ───────────────────────── Custom YouTube Player ───────────────────────── */
const SPEED_MULTIPLIER = 1.15; // barra avança 15% mais rápido que o vídeo real

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: (() => void) | undefined;
  }
}

function CustomYouTubePlayer({ videoId }: { videoId: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<any>(null);
  const intervalRef = useRef<number | null>(null);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [progress, setProgress] = React.useState(0);
  const [hasStarted, setHasStarted] = React.useState(false);
  const [needsInteraction, setNeedsInteraction] = React.useState(false);

  // Load YouTube IFrame API
  useEffect(() => {
    if (window.YT && window.YT.Player) {
      initPlayer();
      return;
    }

    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.head.appendChild(tag);

    window.onYouTubeIframeAPIReady = () => {
      initPlayer();
    };

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  function initPlayer() {
    if (!containerRef.current || playerRef.current) return;

    playerRef.current = new window.YT.Player(containerRef.current, {
      videoId,
      playerVars: {
        autoplay: 1,
        mute: 0,
        controls: 0,
        disablekb: 1,
        fs: 0,
        iv_load_policy: 3,
        modestbranding: 1,
        rel: 0,
        showinfo: 0,
        playsinline: 1,
      },
      events: {
        onReady: (event: any) => {
          event.target.playVideo();
          // Check after a short delay if the browser blocked autoplay with sound
          setTimeout(() => {
            const state = event.target.getPlayerState();
            // -1 = unstarted, meaning browser blocked it
            if (state === -1 || state === 5) {
              setNeedsInteraction(true);
            }
          }, 500);
        },
        onStateChange: (event: any) => {
          const YT = window.YT;
          if (event.data === YT.PlayerState.PLAYING) {
            setIsPlaying(true);
            setHasStarted(true);
            setNeedsInteraction(false);
            startProgressTracker();
          } else if (event.data === YT.PlayerState.PAUSED) {
            setIsPlaying(false);
            stopProgressTracker();
          } else if (event.data === YT.PlayerState.ENDED) {
            setIsPlaying(false);
            setProgress(100);
            stopProgressTracker();
          }
        },
      },
    });
  }

  function startProgressTracker() {
    stopProgressTracker();
    intervalRef.current = window.setInterval(() => {
      if (!playerRef.current?.getCurrentTime || !playerRef.current?.getDuration) return;
      const current = playerRef.current.getCurrentTime();
      const duration = playerRef.current.getDuration();
      if (duration > 0) {
        const realProgress = (current / duration) * 100;
        const accelerated = Math.min(realProgress * SPEED_MULTIPLIER, 100);
        setProgress(accelerated);
      }
    }, 250);
  }

  function stopProgressTracker() {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }

  function togglePlay() {
    if (!playerRef.current) return;
    if (needsInteraction) {
      // First interaction — start playing with sound
      playerRef.current.playVideo();
      setNeedsInteraction(false);
      return;
    }
    if (isPlaying) {
      playerRef.current.pauseVideo();
    } else {
      playerRef.current.playVideo();
    }
  }

  return (
    <div className="relative rounded-3xl overflow-hidden border-2 border-primary/20 shadow-[0_0_40px_rgba(212,255,0,0.15)] bg-black">
      {/* YouTube Player Container */}
      <div className="aspect-video relative">
        <div ref={containerRef} className="absolute inset-0 w-full h-full" />

        {/* Transparent overlay to block YouTube click-to-pause and interaction */}
        <div
          className="absolute inset-0 z-10 cursor-pointer"
          onClick={togglePlay}
        />

        {/* Play/Pause Button Overlay */}
        {(!isPlaying || !hasStarted || needsInteraction) && (
          <div
            className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black/50 cursor-pointer transition-all"
            onClick={togglePlay}
          >
            <div className="w-20 h-20 md:w-24 md:h-24 bg-primary rounded-full flex items-center justify-center text-black hover:scale-110 transition-transform shadow-[0_0_30px_rgba(212,255,0,0.5)]">
              <Play className="w-10 h-10 md:w-12 md:h-12 ml-1" fill="currentColor" />
            </div>
            {needsInteraction && (
              <p className="text-white font-bold mt-4 text-lg uppercase tracking-wide animate-pulse">▶ Clique para assistir com som</p>
            )}
          </div>
        )}

        {/* Small pause indicator when playing */}
        {isPlaying && hasStarted && (
          <div
            className="absolute bottom-14 right-4 z-20 bg-black/60 backdrop-blur-sm rounded-full p-2 cursor-pointer hover:bg-black/80 transition-colors"
            onClick={togglePlay}
          >
            <div className="w-5 h-5 flex items-center justify-center gap-0.5">
              <div className="w-1.5 h-4 bg-primary rounded-sm"></div>
              <div className="w-1.5 h-4 bg-primary rounded-sm"></div>
            </div>
          </div>
        )}
      </div>

      {/* Custom Progress Bar */}
      <div className="h-1.5 bg-white/10 relative">
        <div
          className="absolute inset-y-0 left-0 bg-primary transition-all duration-300 ease-linear"
          style={{ width: `${progress}%` }}
        />
        <div
          className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-primary rounded-full shadow-[0_0_8px_rgba(212,255,0,0.6)] transition-all duration-300 ease-linear"
          style={{ left: `calc(${progress}% - 6px)` }}
        />
      </div>
    </div>
  );
}

/* ───────────────────────── Testimonial Carousel ───────────────────────── */
function TestimonialCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = React.useState(0);

  function scrollTo(index: number) {
    if (!scrollRef.current) return;
    const children = scrollRef.current.children;
    if (children[index]) {
      (children[index] as HTMLElement).scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      setActive(index);
    }
  }

  function handleScroll() {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    const index = Math.round(scrollLeft / clientWidth);
    setActive(index);
  }

  return (
    <div className="relative">
      {/* Carousel track */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
      >
        {TESTIMONIAL_IMAGES.map((src, i) => (
          <div
            key={i}
            className="shrink-0 w-[280px] md:w-[320px] snap-center"
          >
            <img
              src={src}
              alt={`Depoimento de aluno ${i + 1}`}
              className="w-full rounded-2xl border border-white/10 shadow-lg"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {TESTIMONIAL_IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              active === i ? 'bg-primary w-8' : 'bg-white/20 hover:bg-white/40'
            }`}
            aria-label={`Ver depoimento ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

/* ═══════════════════════════ MAIN APP ═══════════════════════════ */
export default function App() {
  const { open, toggle, close } = useMobileMenu();

  return (
    <div className="min-h-screen bg-background-dark font-display text-slate-100 antialiased">
      {/* ═══ HEADER ═══ */}
      <header className="fixed top-0 w-full z-50 bg-background-dark/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 shrink-0" aria-label="Bike na Linha — Início">
            <Bike className="text-primary w-8 h-8" />
            <span className="text-xl font-black tracking-tighter uppercase italic hidden sm:inline">Bike na <span className="text-primary">Linha</span></span>
          </a>

          <span className="text-primary font-bold italic text-base md:text-lg text-center">apenas 12x de R$ 10,03</span>

          <a href={CHECKOUT_URL} className="bg-primary text-black px-4 md:px-6 py-2.5 rounded-lg font-bold uppercase hover:scale-105 transition-transform text-sm md:text-base shrink-0">
            Quero fazer parte
          </a>
        </div>
      </header>

      <main className="pt-20">
        {/* ═══ HERO ═══ */}
        <section id="hero" className="relative py-16 md:py-24 overflow-hidden" aria-label="Seção principal">
          <div className="max-w-7xl mx-auto px-4">
            <FadeIn>
              <div className="text-center mb-10">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-none mb-6 italic uppercase">
                  Pare de gastar dinheiro com <span className="text-primary">oficina</span> e aprenda a <span className="text-primary">cuidar da sua bike em casa</span>
                </h1>
                <p className="text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed text-xl md:text-2xl">
                  Assista ao vídeo e descubra como economizar dinheiro todo mês, evitar imprevistos no pedal e ter sua bike sempre pronta — mesmo começando do zero.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay="delay-200">
              <div className="relative max-w-4xl mx-auto">
                <div className="absolute -inset-4 bg-primary/20 rounded-3xl blur-3xl opacity-20"></div>
                <CustomYouTubePlayer videoId="rD3rFDZJVpI" />
              </div>
            </FadeIn>

            <FadeIn delay="delay-300">
              <div className="text-center mt-10">
                <CTAButton>
                  Quero começar minha evolução <ArrowRight className="w-6 h-6" />
                </CTAButton>
                <p className="text-slate-400 mt-4 text-sm font-medium">Acesso imediato • 30 dias de garantia • 12x de R$ 10,03</p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ═══ VIDEO HIGHLIGHTS ═══ */}
        <section id="video-highlights" className="py-12 bg-surface-dark/50 border-y border-white/5" aria-label="O que você vai aprender">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {VIDEO_ITEMS.map((text, i) => (
                <FadeIn key={i} delay={`delay-${(i + 1) * 100}`}>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="text-primary w-5 h-5 shrink-0 mt-0.5" />
                    <span className="font-semibold text-sm md:text-base text-slate-200">{text}</span>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ PAIN POINTS ═══ */}
        <section id="pain-points" className="py-24 bg-surface-dark/30" aria-label="Problemas que ciclistas enfrentam">
          <div className="max-w-7xl mx-auto px-4">
            <FadeIn>
              <h2 className="text-3xl font-black uppercase italic mb-12 text-center">Se você pedala com frequência, <span className="text-primary">sabe que...</span></h2>
            </FadeIn>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {PAIN_POINTS.map((item, i) => (
                <FadeIn key={i} delay={`delay-${(i + 1) * 100}`}>
                  <div className="bg-surface-dark p-8 rounded-2xl border border-white/5 hover:border-primary/30 transition-colors group h-full">
                    <item.icon className="text-primary w-10 h-10 mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-slate-300 leading-relaxed text-base">{item.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* CTA intermediário */}
        <div className="py-10 text-center">
          <FadeIn>
            <CTAButton>
              Quero cuidar da minha bike <ArrowRight className="w-6 h-6" />
            </CTAButton>
          </FadeIn>
        </div>

        {/* ═══ 5-PHASE EVOLUTION ═══ */}
        <section className="py-24 bg-surface-dark/50" id="evolution" aria-label="Método em 5 fases">
          <div className="max-w-7xl mx-auto px-4">
            <FadeIn>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-black uppercase italic mb-4">Como o método <span className="text-primary">funciona</span></h2>
                <p className="text-slate-300 max-w-2xl mx-auto">O Bike na Linha não é um curso aleatório. Ele segue uma Trilha de Evolução do Ciclista, organizada para gerar autonomia real.</p>
              </div>
            </FadeIn>
            <div className="relative">
              <div className="absolute top-1/2 left-0 w-full h-1 bg-white/10 -translate-y-1/2 hidden lg:block"></div>
              <div className="grid lg:grid-cols-5 gap-8">
                {PHASES.map((step, i) => (
                  <FadeIn key={i} delay={`delay-${(i + 1) * 100}`}>
                    <div className={`relative p-6 rounded-2xl text-center group h-full ${step.highlight ? 'bg-primary text-black shadow-[0_0_20px_rgba(212,255,0,0.3)]' : 'bg-surface-dark border border-white/5'}`}>
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center font-black mx-auto mb-4 border transition-colors ${step.highlight ? 'bg-black/10 border-black/20' : 'bg-white/10 border-white/10 group-hover:border-primary'}`}>
                        {step.phase}
                      </div>
                      <h4 className="font-bold mb-2 uppercase text-base">{step.title}</h4>
                      <p className={`text-base ${step.highlight ? 'text-black/70' : 'text-slate-300'}`}>
                        {step.items.map((item, j) => <React.Fragment key={j}>• {item}<br/></React.Fragment>)}
                        {step.note && <span className={`block mt-2 ${step.highlight ? 'text-black/60' : 'opacity-80'}`}>{step.note}</span>}
                      </p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA intermediário */}
        <div className="py-10 text-center">
          <FadeIn>
            <CTAButton>
              Quero acesso ao método completo <ArrowRight className="w-6 h-6" />
            </CTAButton>
          </FadeIn>
        </div>

        {/* ═══ AUDIENCE / BENEFITS ═══ */}
        <section className="py-24" id="benefits" aria-label="Para quem é o curso">
          <div className="max-w-7xl mx-auto px-4 gap-12 flex flex-col items-center">
            <FadeIn>
              <div className="bg-primary/5 rounded-3xl p-12 border border-primary/10 max-w-2xl w-full">
                <h3 className="text-2xl font-black uppercase italic mb-6 text-center">Para quem é o Bike na Linha?</h3>
                <ul className="space-y-4 flex flex-col items-center">
                  {AUDIENCE.map((text, i) => (
                    <li key={i} className="flex items-center gap-3 w-full max-w-md">
                      <CheckCheck className="text-primary w-6 h-6 shrink-0" />
                      <span className="font-medium">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ═══ DELIVERABLES ═══ */}
        <section className="py-24 bg-surface-dark/30" id="deliverables" aria-label="O que você recebe">
          <div className="max-w-7xl mx-auto px-4">
            <FadeIn>
              <h2 className="text-4xl font-black uppercase italic mb-12 text-center">O que você <span className="text-primary">recebe</span></h2>
            </FadeIn>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {DELIVERABLES.map((item, i) => (
                <FadeIn key={i} delay={`delay-${(i + 1) * 100}`}>
                  <div className={`p-8 rounded-2xl flex flex-col items-center text-center group h-full ${item.highlight ? 'bg-primary border border-primary/50 text-black shadow-[0_0_20px_rgba(212,255,0,0.2)]' : 'bg-background-dark border border-white/5'}`}>
                    <item.icon className={`w-10 h-10 mb-4 ${item.highlight ? 'text-black font-bold' : 'text-primary'}`} />
                    <h4 className={`uppercase ${item.highlight ? 'font-black' : 'font-bold'}`}>{item.title}</h4>
                    <p className={`mt-2 text-base ${item.highlight ? 'text-black/80 font-medium' : 'text-slate-300'}`}>{item.desc}</p>
                  </div>
                </FadeIn>
              ))}
              <FadeIn className="lg:col-span-3" delay="delay-400">
                <div className="bg-primary p-8 rounded-2xl border border-primary/50 flex flex-col items-center text-center text-black shadow-[0_0_20px_rgba(212,255,0,0.2)]">
                  <MessageCircle className="text-black w-10 h-10 mb-4 font-bold" />
                  <h4 className="font-black uppercase text-2xl">Suporte via WhatsApp</h4>
                  <p className="text-black/80 mt-2 text-2xl font-bold">Dúvida técnica? Fale diretamente conosco para resolver rápido.</p>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* CTA intermediário */}
        <div className="py-10 text-center bg-surface-dark/30">
          <FadeIn>
            <CTAButton>
              Garantir meu acesso agora <ArrowRight className="w-6 h-6" />
            </CTAButton>
          </FadeIn>
        </div>

        {/* ═══ OFFER / PRICING ═══ */}
        <section className="py-24 bg-background-dark relative" id="offer" aria-label="Oferta e preço">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-black italic uppercase mb-12 text-white">
                Acesso completo ao <span className="text-primary">Bike na Linha</span> por:
              </h2>
            </FadeIn>
            <FadeIn delay="delay-100">
              <div className="max-w-4xl mx-auto mb-8">
                <div className="bg-primary text-black p-6 rounded-2xl shadow-[0_10px_30px_rgba(212,255,0,0.2)] flex items-center gap-4 border-2 border-white/20">
                  <AlertCircle className="w-10 h-10 shrink-0" />
                  <p className="font-black uppercase italic text-lg leading-tight text-left">
                    Aproveite que em breve o valor será ajustado, e adquirindo agora você terá acesso vitalício incluindo os novos módulos avançados que estão sendo adicionados na plataforma
                  </p>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay="delay-200">
              <div className="bg-surface-dark border-2 border-primary/20 rounded-[2.5rem] p-8 md:p-20 shadow-[0_0_50px_rgba(212,255,0,0.1)] relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-primary text-black px-6 py-1.5 uppercase font-black text-xs italic tracking-widest">
                  Oferta por tempo limitado
                </div>
                <div className="mb-10">
                  <p className="text-slate-300 uppercase tracking-widest font-bold mb-4 text-base">Investimento:</p>
                  <div className="flex flex-col items-center justify-center">
                    <div className="flex items-baseline gap-2">
                      <span className="text-primary text-4xl font-bold">12x</span>
                      <span className="text-primary text-2xl font-bold uppercase">de</span>
                    </div>
                    <div className="flex items-start justify-center gap-1">
                      <span className="text-primary text-4xl font-black mt-4">R$</span>
                      <span className="text-9xl md:text-[12rem] font-black text-primary tracking-tighter leading-none">10,03</span>
                    </div>
                    <p className="text-2xl font-bold text-white mt-4 italic uppercase">Ou apenas R$97 à vista</p>
                  </div>
                </div>
                <div className="max-w-md mx-auto mb-10">
                  <div className="bg-background-dark/50 p-6 rounded-2xl border border-white/5">
                    <p className="text-slate-300 text-lg italic leading-relaxed">
                      "Lembre: Uma única revisão custa entre R$200 e R$250. O curso pode se pagar na primeira aplicação."
                    </p>
                  </div>
                </div>
                <CTAButton large>
                  Quero meu acesso agora
                </CTAButton>
                <div className="mt-10 flex flex-col items-center gap-4">
                  <div className="flex items-center justify-center gap-6 text-slate-400">
                    <Banknote className="w-10 h-10" />
                    <CreditCard className="w-10 h-10" />
                    <Landmark className="w-10 h-10" />
                  </div>
                  <p className="text-slate-400 uppercase font-bold tracking-widest flex items-center gap-2 text-base">
                    <Lock className="w-4 h-4" /> Pagamento 100% Seguro
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ═══ GUARANTEE ═══ */}
        <section className="py-24 bg-surface-dark/30" id="garantia" aria-label="Garantia incondicional">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <FadeIn>
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-8 border border-primary/20">
                <ShieldCheck className="text-primary w-12 h-12" />
              </div>
              <h2 className="text-4xl font-black uppercase italic mb-6">Garantia <span className="text-primary">Incondicional</span> <span className="text-primary block">de 30 dias</span></h2>
              <div className="bg-background-dark/50 p-8 md:p-12 rounded-[2.5rem] border border-white/5 shadow-xl">
                <p className="text-xl text-slate-300 leading-relaxed mb-6">
                  Você tem 30 dias de garantia incondicional. Se achar que o curso não é para você, basta solicitar o reembolso.
                </p>
                <div className="inline-block bg-primary text-black px-8 py-2 rounded-full font-black uppercase italic tracking-widest">
                  Sem risco.
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ═══ AUTONOMY IN PRACTICE ═══ */}
        <section className="py-24 bg-background-dark" id="autonomia-pratica" aria-label="Autonomia na prática">
          <div className="max-w-7xl mx-auto px-4">
            <FadeIn>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-black uppercase italic mb-4">
                  Autonomia na <span className="text-primary">Prática</span>
                </h2>
                <p className="text-slate-300 max-w-2xl mx-auto text-lg">
                  Veja como é simples assumir o comando da sua bicicleta e garantir que ela esteja sempre em perfeito estado.
                </p>
              </div>
            </FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {AUTONOMY_CARDS.map((item, i) => (
                <FadeIn key={i} delay={`delay-${(i + 1) * 100}`}>
                  <div className="group relative overflow-hidden rounded-2xl bg-surface-dark border border-white/5 h-full">
                    <div className="aspect-[3/4] overflow-hidden">
                      <img alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" src={item.img} />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent flex flex-col justify-end p-6">
                      <p className="text-primary font-bold text-sm uppercase mb-2">{item.title}</p>
                      <p className="text-white font-medium text-base">{item.desc}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
            <FadeIn delay="delay-300">
              <p className="text-center text-primary text-3xl md:text-4xl font-black mt-12 uppercase italic">Mais de 100 alunos já utilizaram e aprovaram o método Bike na Linha.</p>
            </FadeIn>
          </div>
        </section>

        {/* CTA intermediário */}
        <div className="py-10 text-center">
          <FadeIn>
            <CTAButton>
              Quero essa autonomia pra mim <ArrowRight className="w-6 h-6" />
            </CTAButton>
          </FadeIn>
        </div>

        {/* ═══ COMPARISON ═══ */}
        <section className="py-24 bg-surface-dark/20" id="comparison" aria-label="Compare os caminhos">
          <div className="max-w-4xl mx-auto px-4">
            <FadeIn>
              <h2 className="text-4xl font-black uppercase italic mb-12 text-center">Compare os <span className="text-primary">Caminhos</span></h2>
            </FadeIn>
            <FadeIn delay="delay-200">
              <div className="grid md:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-white/10">
                <div className="bg-background-dark p-8 border-r border-white/10">
                  <h4 className="text-xl font-bold mb-6 text-red-500">Sem Bike na Linha</h4>
                  <ul className="space-y-4 text-slate-300 text-base">
                    {COMPARISON_NEG.map((text, i) => (
                      <li key={i} className="flex items-center gap-2"><X className="text-red-500 w-5 h-5 shrink-0" /> {text}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-surface-dark p-8">
                  <h4 className="text-xl font-bold mb-6 text-primary">Com Bike na Linha</h4>
                  <ul className="space-y-4 text-slate-100 text-base">
                    {COMPARISON_POS.map((text, i) => (
                      <li key={i} className="flex items-center gap-2"><Check className="text-primary w-5 h-5 shrink-0" /> {text}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ═══ BONUS ═══ */}
        <section className="py-20 bg-background-dark" id="bonus" aria-label="Bônus inclusos">
          <div className="max-w-4xl mx-auto px-4">
            <FadeIn>
              <div className="relative bg-surface-dark border-2 border-dashed border-primary/50 p-8 md:p-12 rounded-3xl">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-primary text-black px-8 py-2 font-black italic uppercase rounded-full text-2xl tracking-widest">BÔNUS</div>
                <div className="grid gap-8 mt-4">
                  <div className="col-span-full bg-primary/10 border border-primary/30 p-8 rounded-2xl flex flex-col md:flex-row items-center gap-8">
                    <div className="w-24 h-24 bg-primary text-black rounded-full flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(212,255,0,0.4)]">
                      <Wrench className="w-12 h-12 font-bold" />
                    </div>
                    <div className="text-center md:text-left">
                      <h4 className="text-2xl font-black uppercase italic mb-2 text-primary">Kit Básico de Ferramentas (PDF)</h4>
                      <p className="text-slate-300 text-lg leading-relaxed">Um PDF com o Kit Básico de Ferramentas. Esqueça as ferramentas ruins da internet. Eu já te dou o link direto dos produtos com o melhor custo-benefício. Você compra o que funciona e gasta o mínimo possível.</p>
                    </div>
                  </div>
                  <div className="col-span-full bg-primary/10 border border-primary/30 p-8 rounded-2xl flex flex-col md:flex-row items-center gap-8">
                    <div className="w-24 h-24 bg-primary text-black rounded-full flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(212,255,0,0.4)]">
                      <Video className="w-12 h-12 font-bold" />
                    </div>
                    <div className="text-center md:text-left">
                      <h4 className="text-2xl font-black uppercase italic mb-2 text-primary">Aulas Avançadas</h4>
                      <p className="text-slate-300 text-lg leading-relaxed">Aulas avançadas sendo adicionadas ao curso continuamente, sem nenhum custo adicional para você.</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ═══ TESTIMONIALS ═══ */}
        <section className="py-24 bg-background-dark" id="testimonials" aria-label="Depoimentos de alunos">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <FadeIn>
              <h2 className="text-4xl font-black uppercase italic mb-12">Resultados de <span className="text-primary">Alunos</span></h2>
            </FadeIn>
            <FadeIn delay="delay-200">
              <TestimonialCarousel />
            </FadeIn>
          </div>
        </section>

        {/* CTA intermediário */}
        <div className="py-10 text-center">
          <FadeIn>
            <CTAButton>
              Quero começar hoje <ArrowRight className="w-6 h-6" />
            </CTAButton>
          </FadeIn>
        </div>

        {/* ═══ AUTHORITY / BIO ═══ */}
        <section className="py-24" id="instructor" aria-label="Sobre o instrutor">
          <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
            <FadeIn className="order-2 md:order-1">
              <h2 className="text-4xl font-black uppercase italic mb-6">Quem irá te <span className="text-primary">ensinar</span></h2>
              <h3 className="text-2xl font-bold mb-4">Thiago2Rodas</h3>
              <div className="text-slate-300 space-y-4 leading-relaxed text-lg">
                <p>Ele não ensina só mecânica de bike. Ele ensina autonomia sobre duas rodas.</p>
                <p>Thiago Mariano, mais conhecido como Thiago2Rodas, é mecânico profissional de bicicletas há mais de 7 anos — e ciclista apaixonado desde a infância.</p>
                <p>Foi com a bike que ele ia pra escola. Foi com ela que buscava a namorada (hoje esposa). E foi com ela também que ele cruzou caminhos que mudaram sua vida.</p>
                <p>De lá pra cá, abriu a própria oficina em São João del Rei (MG), atendeu centenas de ciclistas — de iniciantes a atletas com bikes de alto nível — e acumulou mais de 9 mil seguidores no Instagram, compartilhando dicas práticas e diretas sobre manutenção.</p>
                <p>Mas seu maior prazer está em ensinar o básico que todo ciclista deveria saber: como cuidar da própria bike e não depender de ninguém pra seguir pedalando.</p>
                <p>Foi daí que nasceu o curso Bike na Linha — a manutenção que todo ciclista deveria saber. Um conteúdo feito pra quem quer mais independência, segurança e economia no pedal.</p>
                <p>Thiago resume sua missão em uma frase:</p>
                <p className="italic font-bold text-white">"Hoje não é só mais um dia, é mais uma oportunidade de ser melhor."</p>
              </div>
            </FadeIn>
            <FadeIn className="order-1 md:order-2" delay="delay-200">
              <div className="relative group">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl opacity-20"></div>
                <div className="relative aspect-square rounded-3xl overflow-hidden border-2 border-primary/20">
                  <img
                    className="w-full h-full object-cover transition-all duration-700 rounded-3xl"
                    alt="Thiago Mariano, mecânico profissional de bicicletas e instrutor do Bike na Linha"
                    loading="lazy"
                    src="/thiago.jpeg"
                  />
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ═══ OBJECTIONS ═══ */}
        <section className="py-24 bg-surface-dark/30" id="objections" aria-label="Quebrando objeções">
          <div className="max-w-4xl mx-auto px-4">
            <FadeIn>
              <h2 className="text-4xl font-black uppercase italic mb-12 text-center text-primary">O que falta para você continuar?</h2>
            </FadeIn>
            <div className="grid gap-6">
              {OBJECTIONS.map((item, i) => (
                <FadeIn key={i} delay={`delay-${(i + 1) * 100}`}>
                  <div className="bg-background-dark p-6 rounded-2xl border border-white/5 flex items-start gap-4">
                    <item.icon className="text-primary w-8 h-8 shrink-0" />
                    <div>
                      <h4 className="font-bold uppercase text-white">{item.title}</h4>
                      <p className="text-slate-300 mt-1 text-base">{item.desc}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ FAQ ═══ */}
        <section className="py-24 bg-background-dark" id="faq" aria-label="Perguntas frequentes">
          <div className="max-w-3xl mx-auto px-4">
            <FadeIn>
              <h2 className="text-4xl font-black uppercase italic mb-12 text-center">Perguntas frequentes</h2>
            </FadeIn>
            <div className="space-y-4">
              {FAQ_ITEMS.map((faq, i) => (
                <FadeIn key={i} delay={`delay-${(i + 1) * 100}`}>
                  <details className="group bg-surface-dark rounded-2xl border border-white/5 open:border-primary/30 transition-all overflow-hidden">
                    <summary className="flex items-center justify-between p-6 cursor-pointer list-none font-bold">
                      {faq.q} <ChevronDown className="transition-transform group-open:rotate-180 w-5 h-5" />
                    </summary>
                    <div className="p-6 pt-0 text-slate-300 leading-relaxed">{faq.a}</div>
                  </details>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ FINAL CTA ═══ */}
        <section className="py-24 bg-surface-dark border-t border-white/5 relative overflow-hidden" id="final-cta" aria-label="Chamada final para ação">
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-[120px]"></div>
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <FadeIn>
              <h2 className="text-4xl md:text-6xl font-black uppercase italic mb-12">
                A decisão é <span className="text-primary">simples</span>
              </h2>
            </FadeIn>
            <FadeIn delay="delay-100">
              <div className="grid md:grid-cols-2 gap-8 mb-16">
                <div className="bg-background-dark/50 p-8 rounded-2xl border border-white/5 opacity-50">
                  <TrendingDown className="w-10 h-10 mb-4 mx-auto" />
                  <p className="text-xl font-bold uppercase">Continuar pagando oficina</p>
                </div>
                <div className="bg-primary/10 p-8 rounded-2xl border border-primary/30">
                  <TrendingUp className="text-primary w-10 h-10 mb-4 mx-auto" />
                  <p className="text-xl font-bold uppercase text-primary">Ou aprender de uma vez</p>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay="delay-200">
              <div className="space-y-6">
                <p className="text-primary font-black uppercase tracking-widest flex items-center justify-center gap-2 italic">
                  🚴‍♂️ Entre agora no Bike na Linha
                </p>
                <CTAButton large className="max-w-2xl mx-auto block">
                  Quero parar de gastar com oficina
                </CTAButton>
                <p className="text-slate-400 font-medium text-base">Acesso imediato • 30 dias de garantia</p>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>

      {/* ═══ FOOTER ═══ */}
      <footer className="bg-background-dark border-t border-white/5 py-12">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
          <a href="#" className="flex items-center gap-3" aria-label="Bike na Linha — Início">
            <Bike className="text-primary w-6 h-6" />
            <span className="text-lg font-black tracking-tighter uppercase italic">Bike na <span className="text-primary">Linha</span></span>
          </a>
          <div className="text-slate-400 text-center md:text-left">
            © 2026 Bike na Linha. Todos os direitos reservados.
          </div>
          <div className="flex gap-6">
            <a className="text-slate-400 hover:text-primary transition-colors" href="#" aria-label="Website">
              <Globe className="w-5 h-5" />
            </a>
            <a className="text-slate-400 hover:text-primary transition-colors" href="#" aria-label="Compartilhar">
              <Share2 className="w-5 h-5" />
            </a>
            <a className="text-slate-400 hover:text-primary transition-colors" href="#" aria-label="Email">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
