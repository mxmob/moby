import type { MockupKey, SLang } from "@/content/sectors";

/*
 * Mockups estilizados de pantallas reales de Moby (widget de reservas, agenda de Bridge, tarjeta de
 * fidelización, reseñas…). Solo HTML/CSS: sin imágenes que descargar ni saltos de maquetación (cada
 * mockup tiene una altura fija). Datos de ejemplo, nombres ficticios.
 */

type L = Record<SLang, string>;
const tx = (lang: SLang, m: L) => m[lang];

function Frame({ children, title }: { children: React.ReactNode; title: string }) {
  return (
    <div className="w-full max-w-[420px] mx-auto rounded-2xl bg-[#0b0b1d] border border-white/10 shadow-2xl shadow-cyan-500/5 overflow-hidden" aria-hidden="true">
      <div className="flex items-center gap-1.5 px-4 h-9 border-b border-white/5 bg-white/[0.02]">
        <span className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
        <span className="ml-3 text-[11px] text-white/40 truncate">{title}</span>
      </div>
      <div className="h-[300px] p-4 overflow-hidden">{children}</div>
    </div>
  );
}

const SERVICES = [
  { n: { es: "Corte caballero", ca: "Tall cavaller", en: "Men’s haircut" }, d: "30 min", p: "15 €" },
  { n: { es: "Corte + barba", ca: "Tall + barba", en: "Cut + beard" }, d: "45 min", p: "22 €" },
  { n: { es: "Arreglo de barba", ca: "Arranjament de barba", en: "Beard trim" }, d: "20 min", p: "10 €" },
];

function Booking({ lang }: { lang: SLang }) {
  const slots = ["10:00", "10:30", "11:15", "12:00", "16:30", "17:15", "18:00", "19:30"];
  return (
    <Frame title={tx(lang, { es: "Reservar cita · Barbería de ejemplo", ca: "Reservar cita · Barberia d’exemple", en: "Book · Sample barbershop" })}>
      <p className="text-[11px] uppercase tracking-wide text-cyan-400 mb-2">1 · {tx(lang, { es: "Servicio", ca: "Servei", en: "Service" })}</p>
      <div className="space-y-1.5 mb-3">
        {SERVICES.map((s, i) => (
          <div key={i} className={`flex items-center justify-between rounded-lg px-3 py-2 text-xs ${i === 1 ? "bg-cyan-500/15 border border-cyan-400/40 text-white" : "bg-white/[0.03] border border-white/5 text-white/70"}`}>
            <span>{s.n[lang]}</span>
            <span className="text-white/50">{s.d} · {s.p}</span>
          </div>
        ))}
      </div>
      <p className="text-[11px] uppercase tracking-wide text-cyan-400 mb-2">2 · {tx(lang, { es: "Día y hora", ca: "Dia i hora", en: "Date & time" })}</p>
      <div className="flex gap-1.5 mb-2">
        {["Ma 18", "Mi 19", "Ju 20", "Vi 21", "Sá 22"].map((d, i) => (
          <span key={d} className={`flex-1 text-center rounded-md py-1 text-[11px] ${i === 2 ? "bg-violet-500/30 text-white" : "bg-white/[0.03] text-white/50"}`}>{d}</span>
        ))}
      </div>
      <div className="grid grid-cols-4 gap-1.5">
        {slots.map((s, i) => (
          <span key={s} className={`text-center rounded-md py-1.5 text-[11px] ${i === 3 ? "bg-gradient-to-r from-cyan-500 to-violet-600 text-white" : "bg-white/[0.03] text-white/60"}`}>{s}</span>
        ))}
      </div>
    </Frame>
  );
}

function Agenda({ lang }: { lang: SLang }) {
  const staff = ["Àlex", "Marc", "Laia"];
  const blocks: [number, number, number, string][] = [
    [0, 0, 2, "bg-cyan-500/30"], [0, 3, 1, "bg-violet-500/30"], [0, 5, 2, "bg-cyan-500/30"],
    [1, 1, 1, "bg-emerald-500/30"], [1, 2, 2, "bg-cyan-500/30"], [1, 6, 1, "bg-violet-500/30"],
    [2, 0, 1, "bg-violet-500/30"], [2, 2, 3, "bg-amber-500/30"], [2, 6, 1, "bg-cyan-500/30"],
  ];
  return (
    <Frame title={tx(lang, { es: "Bridge · Agenda de hoy", ca: "Bridge · Agenda d’avui", en: "Bridge · Today’s diary" })}>
      <div className="grid grid-cols-[36px_1fr_1fr_1fr] gap-1 text-[10px] text-white/40 mb-1">
        <span />
        {staff.map((s) => <span key={s} className="text-center text-white/70 font-medium">{s}</span>)}
      </div>
      <div className="relative grid grid-cols-[36px_1fr_1fr_1fr] gap-1">
        <div className="flex flex-col">
          {["10", "11", "12", "13", "16", "17", "18"].map((h) => <span key={h} className="h-[34px] text-[10px] text-white/30">{h}:00</span>)}
        </div>
        {staff.map((_, col) => (
          <div key={col} className="relative h-[238px] rounded-md bg-white/[0.02] border border-white/5">
            {blocks.filter((b) => b[0] === col).map(([, start, len, color], i) => (
              <div key={i} className={`absolute left-1 right-1 rounded ${color} border border-white/10 px-1 py-0.5`} style={{ top: start * 34 + 2, height: len * 34 - 4 }}>
                <div className="h-1.5 w-3/4 rounded bg-white/50 mt-0.5" />
                <div className="h-1 w-1/2 rounded bg-white/25 mt-1" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </Frame>
  );
}

function Stamps({ lang }: { lang: SLang }) {
  return (
    <Frame title={tx(lang, { es: "Tarjeta de fidelización", ca: "Targeta de fidelització", en: "Loyalty card" })}>
      <div className="rounded-2xl p-5 bg-gradient-to-br from-[#111827] to-[#1e1b4b] border border-white/10 h-[190px] flex flex-col">
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-white">Club Barber</span>
          <span className="text-[10px] text-white/50">Google Wallet</span>
        </div>
        <p className="text-[11px] text-white/50 mt-1">{tx(lang, { es: "10 sellos = corte gratis", ca: "10 segells = tall gratis", en: "10 stamps = free haircut" })}</p>
        <div className="grid grid-cols-5 gap-2 mt-4">
          {Array.from({ length: 10 }).map((_, i) => (
            <span key={i} className={`aspect-square rounded-full flex items-center justify-center text-xs ${i < 7 ? "bg-cyan-400 text-[#050510]" : "border border-dashed border-white/25 text-white/25"}`}>✂</span>
          ))}
        </div>
        <div className="mt-auto flex items-end justify-between">
          <div>
            <p className="text-[10px] text-white/40">{tx(lang, { es: "Puntos", ca: "Punts", en: "Points" })}</p>
            <p className="text-lg font-bold text-white">340</p>
          </div>
          <div className="w-12 h-12 rounded bg-white p-1 grid grid-cols-4 gap-px">
            {Array.from({ length: 16 }).map((_, i) => <span key={i} className={(i * 7) % 3 ? "bg-black" : "bg-white"} />)}
          </div>
        </div>
      </div>
      <div className="mt-3 flex gap-2 text-[11px]">
        <span className="flex-1 rounded-lg bg-white/[0.03] border border-white/5 px-3 py-2 text-white/70">🎂 {tx(lang, { es: "Cumpleaños: +50 pts", ca: "Aniversari: +50 pts", en: "Birthday: +50 pts" })}</span>
        <span className="flex-1 rounded-lg bg-white/[0.03] border border-white/5 px-3 py-2 text-white/70">🤝 {tx(lang, { es: "Trae a un amigo", ca: "Porta un amic", en: "Refer a friend" })}</span>
      </div>
    </Frame>
  );
}

function Reviews({ lang }: { lang: SLang }) {
  const bars = [62, 21, 9, 5, 3];
  return (
    <Frame title={tx(lang, { es: "Bridge · Reseñas", ca: "Bridge · Ressenyes", en: "Bridge · Reviews" })}>
      <div className="flex gap-4">
        <div className="w-28 shrink-0 rounded-xl bg-white p-2 flex flex-col items-center">
          <div className="w-20 h-20 grid grid-cols-6 gap-px">
            {Array.from({ length: 36 }).map((_, i) => <span key={i} className={(i * 5 + (i % 4)) % 3 ? "bg-black" : "bg-white"} />)}
          </div>
          <p className="text-[9px] text-black/70 mt-1 text-center leading-tight">{tx(lang, { es: "¿Qué tal tu corte? Déjanos tu opinión", ca: "Què tal el tall? Deixa’ns la teva opinió", en: "How was your cut? Leave a review" })}</p>
        </div>
        <div className="flex-1">
          <p className="text-3xl font-bold text-white">4,8 <span className="text-base text-amber-400">★★★★★</span></p>
          <div className="space-y-1 mt-2">
            {bars.map((w, i) => (
              <div key={i} className="flex items-center gap-2 text-[10px] text-white/40">
                <span>{5 - i}</span>
                <span className="flex-1 h-1.5 rounded bg-white/5"><span className="block h-full rounded bg-amber-400/80" style={{ width: `${w}%` }} /></span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2 text-center">
        {[["38", tx(lang, { es: "invitaciones", ca: "invitacions", en: "invitations" })], ["21", tx(lang, { es: "clics a Google", ca: "clics a Google", en: "Google clicks" })], ["6", tx(lang, { es: "opiniones privadas", ca: "opinions privades", en: "private notes" })]].map(([n, l]) => (
          <div key={l} className="rounded-lg bg-white/[0.03] border border-white/5 py-2">
            <p className="text-lg font-semibold text-white">{n}</p>
            <p className="text-[10px] text-white/40">{l}</p>
          </div>
        ))}
      </div>
      <p className="mt-3 text-[10px] text-white/30">{tx(lang, { es: "Este mes · datos de ejemplo", ca: "Aquest mes · dades d’exemple", en: "This month · sample data" })}</p>
    </Frame>
  );
}

function Reactivation({ lang }: { lang: SLang }) {
  return (
    <Frame title={tx(lang, { es: "Automatización · Reactivación", ca: "Automatització · Reactivació", en: "Automation · Win-back" })}>
      <div className="flex items-center gap-2 text-[11px] text-white/60 mb-3">
        <span className="px-2 py-1 rounded-md bg-violet-500/20 text-violet-200">{tx(lang, { es: "Sin venir 45 días", ca: "Sense venir 45 dies", en: "No visit in 45 days" })}</span>
        <span>→</span>
        <span className="px-2 py-1 rounded-md bg-cyan-500/20 text-cyan-200">Email</span>
        <span>→</span>
        <span className="px-2 py-1 rounded-md bg-emerald-500/20 text-emerald-200">{tx(lang, { es: "Reserva", ca: "Reserva", en: "Booking" })}</span>
      </div>
      <div className="rounded-xl bg-white text-[#111] p-4 h-[200px]">
        <p className="text-[10px] text-black/40">{tx(lang, { es: "Asunto", ca: "Assumpte", en: "Subject" })}</p>
        <p className="text-sm font-semibold">{tx(lang, { es: "Jordi, ¿repasamos ese corte? ✂️", ca: "Jordi, repassem aquest tall? ✂️", en: "Jordi, time for a fresh cut? ✂️" })}</p>
        <p className="text-xs text-black/60 mt-2 leading-relaxed">{tx(lang, { es: "Hace 6 semanas que no te vemos. Tienes 340 puntos: te faltan 3 sellos para el corte gratis.", ca: "Fa 6 setmanes que no et veiem. Tens 340 punts: et falten 3 segells per al tall gratis.", en: "We haven’t seen you for 6 weeks. You have 340 points — 3 stamps to go for a free haircut." })}</p>
        <span className="inline-block mt-3 px-4 py-2 rounded-full bg-[#06b6d4] text-white text-xs font-semibold">{tx(lang, { es: "Reservar mi cita", ca: "Reservar la meva cita", en: "Book my appointment" })}</span>
        <p className="text-[9px] text-black/30 mt-3">{tx(lang, { es: "Darse de baja", ca: "Donar-se de baixa", en: "Unsubscribe" })}</p>
      </div>
    </Frame>
  );
}

function Vouchers({ lang }: { lang: SLang }) {
  return (
    <Frame title={tx(lang, { es: "Moby Vales · Tienda", ca: "Moby Vals · Botiga", en: "Moby Vouchers · Shop" })}>
      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-xl p-4 h-[130px] bg-gradient-to-br from-cyan-500 to-violet-600 flex flex-col">
          <span className="text-[10px] uppercase tracking-wide text-white/80">{tx(lang, { es: "Vale regalo", ca: "Val regal", en: "Gift card" })}</span>
          <span className="mt-auto text-2xl font-bold text-white">50 €</span>
        </div>
        <div className="rounded-xl p-4 h-[130px] bg-gradient-to-br from-[#1f2937] to-[#111827] border border-white/10 flex flex-col">
          <span className="text-[10px] uppercase tracking-wide text-white/60">{tx(lang, { es: "Bono", ca: "Bo", en: "Pack" })}</span>
          <span className="text-sm text-white mt-1">{tx(lang, { es: "5 cortes", ca: "5 talls", en: "5 haircuts" })}</span>
          <div className="mt-auto flex gap-1">{[1, 1, 0, 0, 0].map((u, i) => <span key={i} className={`h-2 flex-1 rounded ${u ? "bg-cyan-400" : "bg-white/15"}`} />)}</div>
        </div>
      </div>
      <div className="mt-3 rounded-xl bg-white/[0.03] border border-white/5 p-3 text-xs text-white/70 space-y-1.5">
        <div className="flex justify-between"><span>{tx(lang, { es: "Vale regalo 50 €", ca: "Val regal 50 €", en: "Gift card €50" })}</span><span className="text-white">50,00 €</span></div>
        <div className="flex justify-between text-white/40"><span>{tx(lang, { es: "Para", ca: "Per a", en: "To" })}: Pau</span><span>PDF</span></div>
        <span className="block text-center mt-2 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-semibold">{tx(lang, { es: "Pagar con tarjeta", ca: "Pagar amb targeta", en: "Pay by card" })}</span>
      </div>
    </Frame>
  );
}

function Panel({ lang }: { lang: SLang }) {
  const bars = [40, 55, 48, 62, 70, 58, 75, 80, 66, 85, 78, 90];
  return (
    <Frame title="Bridge · Dashboard">
      <div className="grid grid-cols-3 gap-2 mb-3">
        {[["126", tx(lang, { es: "citas/sem.", ca: "cites/setm.", en: "appts/wk" })], ["4", "no-shows"], ["18", tx(lang, { es: "reseñas/mes", ca: "ressenyes/mes", en: "reviews/mo" })]].map(([n, l]) => (
          <div key={l} className="rounded-lg bg-white/[0.03] border border-white/5 p-2">
            <p className="text-lg font-semibold text-white">{n}</p>
            <p className="text-[10px] text-white/40">{l}</p>
          </div>
        ))}
      </div>
      <div className="rounded-lg bg-white/[0.02] border border-white/5 p-3 h-[140px] flex items-end gap-1.5">
        {bars.map((h, i) => <span key={i} className="flex-1 rounded-t bg-gradient-to-t from-cyan-500/40 to-violet-500/60" style={{ height: `${h}%` }} />)}
      </div>
      <div className="mt-3 flex items-center gap-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20 px-3 py-2 text-[11px] text-cyan-100">
        🔔 {tx(lang, { es: "Nueva reserva: Corte + barba, jueves 12:00", ca: "Nova reserva: Tall + barba, dijous 12:00", en: "New booking: Cut + beard, Thursday 12:00" })}
      </div>
    </Frame>
  );
}

function Menu({ lang }: { lang: SLang }) {
  const dishes = [
    { n: { es: "Croquetas caseras", ca: "Croquetes casolanes", en: "Homemade croquettes" }, p: "8,50 €", a: ["🌾", "🥛", "🥚"] },
    { n: { es: "Ensalada de burrata", ca: "Amanida de burrata", en: "Burrata salad" }, p: "11,00 €", a: ["🥛"] },
    { n: { es: "Arroz del día", ca: "Arròs del dia", en: "Rice of the day" }, p: "14,50 €", a: ["🦐"] },
    { n: { es: "Coulant de chocolate", ca: "Coulant de xocolata", en: "Chocolate fondant" }, p: "6,00 €", a: ["🌾", "🥚", "🥛"] },
  ];
  return (
    <Frame title={tx(lang, { es: "Carta digital", ca: "Carta digital", en: "Digital menu" })}>
      <div className="flex gap-2 mb-3 text-[11px]">
        {[tx(lang, { es: "Entrantes", ca: "Entrants", en: "Starters" }), tx(lang, { es: "Principales", ca: "Principals", en: "Mains" }), tx(lang, { es: "Postres", ca: "Postres", en: "Desserts" })].map((c, i) => (
          <span key={c} className={`px-3 py-1 rounded-full ${i === 0 ? "bg-cyan-500/20 text-cyan-100" : "bg-white/[0.03] text-white/50"}`}>{c}</span>
        ))}
      </div>
      <div className="space-y-2">
        {dishes.map((d) => (
          <div key={d.p + d.n.es} className="flex items-center gap-3 rounded-lg bg-white/[0.03] border border-white/5 p-2.5">
            <span className="w-10 h-10 rounded-md bg-gradient-to-br from-amber-500/30 to-rose-500/30 shrink-0" />
            <div className="flex-1 min-w-0">
              <p className="text-xs text-white truncate">{d.n[lang]}</p>
              <p className="text-[11px]">{d.a.join(" ")}</p>
            </div>
            <span className="text-xs text-white/70">{d.p}</span>
          </div>
        ))}
      </div>
    </Frame>
  );
}

function Orders({ lang }: { lang: SLang }) {
  const rows: [string, string, string][] = [
    ["#1042", tx(lang, { es: "Recoger 20:30", ca: "Recollir 20:30", en: "Pickup 20:30" }), "bg-amber-500/20 text-amber-200"],
    ["#1041", tx(lang, { es: "Domicilio 20:45", ca: "Domicili 20:45", en: "Delivery 20:45" }), "bg-cyan-500/20 text-cyan-200"],
    ["#1040", tx(lang, { es: "Recoger 20:15", ca: "Recollir 20:15", en: "Pickup 20:15" }), "bg-emerald-500/20 text-emerald-200"],
  ];
  return (
    <Frame title={tx(lang, { es: "Bridge · Pedidos online", ca: "Bridge · Comandes en línia", en: "Bridge · Online orders" })}>
      <div className="space-y-2">
        {rows.map(([id, when, c]) => (
          <div key={id} className="rounded-lg bg-white/[0.03] border border-white/5 p-3 flex items-center justify-between">
            <div>
              <p className="text-xs text-white font-medium">{id}</p>
              <p className="text-[11px] text-white/50">{when}</p>
            </div>
            <span className={`text-[10px] px-2 py-1 rounded-full ${c}`}>{tx(lang, { es: "Nuevo", ca: "Nova", en: "New" })}</span>
          </div>
        ))}
      </div>
      <p className="mt-4 text-[11px] text-white/40">{tx(lang, { es: "Sin comisión por pedido · pago en local o con tarjeta", ca: "Sense comissió per comanda · pagament al local o amb targeta", en: "No commission per order · pay at venue or by card" })}</p>
    </Frame>
  );
}

function Reservations({ lang }: { lang: SLang }) {
  return (
    <Frame title={tx(lang, { es: "Reserva tu mesa", ca: "Reserva la teva taula", en: "Book a table" })}>
      <p className="text-[11px] text-white/50 mb-2">{tx(lang, { es: "Personas", ca: "Persones", en: "Guests" })}</p>
      <div className="flex gap-1.5 mb-4">{[1, 2, 3, 4, 5, 6].map((n) => <span key={n} className={`flex-1 text-center rounded-md py-1.5 text-xs ${n === 4 ? "bg-cyan-500/30 text-white" : "bg-white/[0.03] text-white/50"}`}>{n}</span>)}</div>
      <p className="text-[11px] text-white/50 mb-2">{tx(lang, { es: "Hora", ca: "Hora", en: "Time" })}</p>
      <div className="grid grid-cols-4 gap-1.5">{["13:00", "13:30", "14:00", "14:30", "20:30", "21:00", "21:30", "22:00"].map((s, i) => <span key={s} className={`text-center rounded-md py-1.5 text-[11px] ${i === 5 ? "bg-gradient-to-r from-cyan-500 to-violet-600 text-white" : "bg-white/[0.03] text-white/60"}`}>{s}</span>)}</div>
    </Frame>
  );
}

function Property({ lang }: { lang: SLang }) {
  return (
    <Frame title={tx(lang, { es: "Ficha de propiedad", ca: "Fitxa de propietat", en: "Listing" })}>
      <div className="h-[120px] rounded-xl bg-gradient-to-br from-sky-500/30 via-indigo-500/20 to-emerald-500/20 border border-white/10 flex items-end p-3">
        <span className="text-[10px] px-2 py-1 rounded-full bg-black/40 text-white">{tx(lang, { es: "Venta", ca: "Venda", en: "For sale" })}</span>
      </div>
      <p className="text-sm text-white font-semibold mt-3">{tx(lang, { es: "Piso de 3 habitaciones con terraza", ca: "Pis de 3 habitacions amb terrassa", en: "3-bedroom flat with terrace" })}</p>
      <p className="text-[11px] text-white/50">Granollers · 92 m² · 3 hab. · 2 baños</p>
      <div className="flex gap-2 mt-3 text-[11px]">
        {["Web", "Dossier PDF", "Instagram", "CRM"].map((c) => <span key={c} className="px-2 py-1 rounded-md bg-white/[0.04] border border-white/10 text-white/70">{c}</span>)}
      </div>
    </Frame>
  );
}

function Dossier({ lang }: { lang: SLang }) {
  return (
    <Frame title="Dossier PDF">
      <div className="flex gap-3">
        <div className="w-[150px] h-[210px] rounded-md bg-white p-2 shrink-0">
          <div className="h-16 rounded bg-gradient-to-br from-sky-400/60 to-indigo-400/60" />
          <div className="h-2 w-3/4 bg-black/70 rounded mt-2" />
          <div className="h-1.5 w-1/2 bg-black/30 rounded mt-1" />
          {Array.from({ length: 6 }).map((_, i) => <div key={i} className="h-1 bg-black/15 rounded mt-1.5" style={{ width: `${90 - i * 8}%` }} />)}
        </div>
        <div className="flex-1 space-y-2 text-[11px]">
          {[tx(lang, { es: "Hoja de visita", ca: "Full de visita", en: "Viewing sheet" }), tx(lang, { es: "Encargo de venta", ca: "Encàrrec de venda", en: "Sales mandate" }), tx(lang, { es: "Oferta de compra", ca: "Oferta de compra", en: "Purchase offer" })].map((d) => (
            <div key={d} className="rounded-lg bg-white/[0.03] border border-white/5 px-3 py-2 text-white/70">📄 {d}</div>
          ))}
          <div className="rounded-lg bg-cyan-500/10 border border-cyan-500/20 px-3 py-2 text-cyan-100">🔗 {tx(lang, { es: "Enlace para compartir", ca: "Enllaç per compartir", en: "Share link" })}</div>
        </div>
      </div>
    </Frame>
  );
}

function Pipeline({ lang }: { lang: SLang }) {
  const cols = [
    [tx(lang, { es: "Nuevo", ca: "Nou", en: "New" }), 3],
    [tx(lang, { es: "Visita", ca: "Visita", en: "Viewing" }), 2],
    [tx(lang, { es: "Oferta", ca: "Oferta", en: "Offer" }), 2],
    [tx(lang, { es: "Cerrado", ca: "Tancat", en: "Closed" }), 1],
  ] as const;
  return (
    <Frame title="Bridge · CRM">
      <div className="grid grid-cols-4 gap-2 h-full">
        {cols.map(([name, n]) => (
          <div key={name} className="rounded-lg bg-white/[0.02] border border-white/5 p-1.5">
            <p className="text-[10px] text-white/60 mb-1.5">{name} · {n}</p>
            {Array.from({ length: n }).map((_, i) => (
              <div key={i} className="rounded bg-white/[0.05] border border-white/10 p-1.5 mb-1.5">
                <div className="h-1.5 w-4/5 rounded bg-white/50" />
                <div className="h-1 w-1/2 rounded bg-white/25 mt-1" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </Frame>
  );
}

function Social({ lang }: { lang: SLang }) {
  return (
    <Frame title="Moby Social">
      <div className="grid grid-cols-7 gap-1 text-center text-[10px] text-white/40 mb-1">{["L", "M", "X", "J", "V", "S", "D"].map((d) => <span key={d}>{d}</span>)}</div>
      <div className="grid grid-cols-7 gap-1">
        {Array.from({ length: 28 }).map((_, i) => (
          <div key={i} className="h-[52px] rounded bg-white/[0.02] border border-white/5 p-0.5">
            {[2, 5, 9, 12, 16, 19, 23, 26].includes(i) && <div className="h-full rounded bg-gradient-to-br from-pink-500/40 to-violet-500/40" />}
          </div>
        ))}
      </div>
      <p className="mt-2 text-[10px] text-white/30">{tx(lang, { es: "Calendario de publicaciones · ejemplo", ca: "Calendari de publicacions · exemple", en: "Post calendar · sample" })}</p>
    </Frame>
  );
}

const MAP: Record<MockupKey, (p: { lang: SLang }) => React.ReactElement> = {
  booking: Booking,
  agenda: Agenda,
  stamps: Stamps,
  reviews: Reviews,
  reactivation: Reactivation,
  vouchers: Vouchers,
  panel: Panel,
  menu: Menu,
  orders: Orders,
  reservations: Reservations,
  property: Property,
  dossier: Dossier,
  pipeline: Pipeline,
  social: Social,
};

export function Mockup({ kind, lang }: { kind: MockupKey; lang: SLang }) {
  const C = MAP[kind];
  return <C lang={lang} />;
}
