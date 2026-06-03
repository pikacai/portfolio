import { ScanLine, Nfc, BadgeCheck, Search, Radio, Flame, ChevronLeft, Check } from "lucide-react";

const RED = "#E4002B";
const BLUE = "#1763E5";

/** Shared gear rows used inside the phone mockups. */
const gear = [
  { icon: Radio, name: "Handheld Radio", id: "RAD-2291", status: "Out" },
  { icon: Flame, name: "Thermal Camera", id: "TIC-0148", status: "In" },
  { icon: BadgeCheck, name: "SCBA Mask", id: "SCB-7732", status: "In" },
];

function StatusBar() {
  return (
    <div className="flex items-center justify-between px-4 pt-2 text-[9px] font-semibold text-neutral-800">
      <span>9:41</span>
      <span className="flex items-center gap-1">
        <span className="h-1.5 w-3 rounded-sm bg-neutral-800" />
        <span className="h-1.5 w-1.5 rounded-full bg-neutral-800" />
      </span>
    </div>
  );
}

function PhoneShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-[220px] overflow-hidden rounded-[2rem] border-[6px] border-neutral-900 bg-white shadow-[0_24px_50px_-20px_rgba(0,0,0,0.45)]">
      <StatusBar />
      {children}
    </div>
  );
}

function GearRow({ item, highlight }: { item: typeof gear[number]; highlight?: boolean }) {
  const Icon = item.icon;
  const out = item.status === "Out";
  return (
    <div
      className={`flex items-center gap-2 rounded-xl border p-2 ${
        highlight ? "border-transparent" : "border-neutral-100"
      }`}
      style={highlight ? { background: "rgba(228,0,43,0.06)", borderColor: "rgba(228,0,43,0.3)" } : undefined}
    >
      <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg text-white" style={{ background: out ? RED : BLUE }}>
        <Icon className="h-3.5 w-3.5" />
      </span>
      <div className="min-w-0 flex-1">
        <p className="truncate text-[10px] font-semibold text-neutral-900">{item.name}</p>
        <p className="text-[8px] text-neutral-400">{item.id}</p>
      </div>
      <span
        className={`rounded-full px-1.5 py-0.5 text-[8px] font-bold ${
          out ? "text-white" : "bg-emerald-50 text-emerald-600"
        }`}
        style={out ? { background: RED } : undefined}
      >
        {item.status}
      </span>
    </div>
  );
}

/**
 * Coded EquipGo app screen.
 * variant: "list" (assignment overview), "nfc" (tap to check-in), "barcode" (scan).
 */
export function EquipPhone({ variant = "list" }: { variant?: "list" | "nfc" | "barcode" }) {
  return (
    <PhoneShell>
      {/* app header */}
      <div className="px-3 pb-3 pt-1 text-white" style={{ background: `linear-gradient(150deg, ${RED} 0%, #B80020 100%)` }}>
        <div className="flex items-center justify-between">
          <span className="text-sm font-bold tracking-tight">EquipGo</span>
          <span className="grid h-6 w-6 place-items-center rounded-lg bg-white/15">
            <ScanLine className="h-3.5 w-3.5" />
          </span>
        </div>
        <div className="mt-2 flex items-center gap-1.5 rounded-lg bg-white/15 px-2 py-1.5 text-[9px] text-white/80">
          <Search className="h-3 w-3" /> Search equipment…
        </div>
      </div>

      {variant === "list" && (
        <div className="space-y-1.5 p-3">
          <p className="text-[9px] font-semibold uppercase tracking-wider text-neutral-400">Assigned to you</p>
          {gear.map((g) => <GearRow key={g.id} item={g} />)}
        </div>
      )}

      {variant === "nfc" && (
        <div className="flex flex-col items-center gap-3 p-5 pb-7 text-center">
          <span className="grid h-16 w-16 place-items-center rounded-full text-white" style={{ background: BLUE }}>
            <Nfc className="h-8 w-8" />
          </span>
          <p className="text-[11px] font-bold text-neutral-900">Tap to check in</p>
          <p className="text-[9px] leading-snug text-neutral-400">Hold the tagged item near the top of your phone.</p>
          <span className="rounded-full px-3 py-1.5 text-[9px] font-semibold text-white" style={{ background: RED }}>Cancel</span>
        </div>
      )}

      {variant === "barcode" && (
        <div className="flex flex-col items-center gap-3 p-4 pb-6">
          <div className="relative grid h-28 w-full place-items-center overflow-hidden rounded-xl bg-neutral-900">
            <div className="flex h-12 items-end gap-[2px]">
              {[3, 1, 2, 4, 1, 3, 1, 2, 1, 4, 2, 1, 3].map((w, i) => (
                <span key={i} className="h-full bg-white/90" style={{ width: `${w}px` }} />
              ))}
            </div>
            <span className="absolute left-3 right-3 h-[2px] shadow-[0_0_10px_rgba(228,0,43,0.9)]" style={{ background: RED }} />
          </div>
          <p className="text-[10px] font-semibold text-neutral-900">Scan a barcode</p>
          <div className="w-full">
            <GearRow item={gear[0]} highlight />
          </div>
        </div>
      )}
    </PhoneShell>
  );
}

/** Coded "pen & paper" current-solution mock. variant: "log" | "sheet" | "board". */
export function PaperMock({ variant = "log" }: { variant?: "log" | "sheet" | "board" }) {
  if (variant === "board") {
    return (
      <div className="flex aspect-square w-full flex-col gap-2 rounded-xl border border-neutral-200 bg-[#0e5c3a] p-3 shadow-inner">
        <p className="text-[10px] font-bold text-white/90">Out today</p>
        {["Radio · Eng 211", "TIC · Lt. Cruz", "Saw · Truck 9"].map((t) => (
          <p key={t} className="rounded bg-white/10 px-2 py-1 text-[9px] text-white/85">{t}</p>
        ))}
      </div>
    );
  }
  return (
    <div className="aspect-square w-full overflow-hidden rounded-xl border border-neutral-200 bg-[#fffdf5] p-3 shadow-soft">
      <div className="mb-2 flex items-center justify-between border-b border-neutral-200 pb-1.5">
        <span className="text-[10px] font-bold text-neutral-700">{variant === "sheet" ? "Sign-out sheet" : "Equipment log"}</span>
        <span className="text-[8px] text-neutral-400">{new Date().getFullYear()}</span>
      </div>
      <div className="space-y-1.5">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="flex items-center gap-2">
            <span className="text-[8px] text-neutral-300">{i + 1}.</span>
            <span className="h-2 flex-1 rounded-sm bg-neutral-200/80" style={{ width: `${60 + (i % 3) * 12}%` }} />
            {variant === "sheet" && <span className="h-3 w-6 rounded-sm border border-neutral-300" />}
          </div>
        ))}
      </div>
    </div>
  );
}

/** Coded mini reference app-screen for the market-research grid. */
export function RefScreen({ i }: { i: number }) {
  const tints = ["#EEF2FF", "#FEF2F2", "#F0FDF4", "#FFF7ED", "#F5F3FF", "#ECFEFF", "#FDF2F8", "#F8FAFC"];
  const accents = [BLUE, RED, "#16a34a", "#f59e0b", "#7c3aed", "#0891b2", "#db2777", "#475569"];
  const tint = tints[i % tints.length];
  const accent = accents[i % accents.length];
  return (
    <div className="aspect-[3/5] w-full overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-soft">
      <div className="h-7 w-full" style={{ background: accent }} />
      <div className="space-y-1.5 p-2" style={{ background: tint, minHeight: "100%" }}>
        <div className="h-10 rounded-md bg-white shadow-sm" />
        <div className="grid grid-cols-2 gap-1.5">
          {Array.from({ length: 4 }).map((_, k) => (
            <div key={k} className="h-6 rounded-md bg-white/80 shadow-sm" />
          ))}
        </div>
        <div className="h-2 w-2/3 rounded bg-white/90" />
        <div className="h-2 w-1/2 rounded bg-white/70" />
      </div>
    </div>
  );
}

/** Coded compact phone for the edge-case grid. */
export function EdgeScreen({ label }: { label: string }) {
  return (
    <div className="overflow-hidden rounded-2xl border-[5px] border-neutral-900 bg-white shadow-soft">
      <div className="px-2 py-1.5 text-white" style={{ background: RED }}>
        <span className="text-[9px] font-bold">EquipGo</span>
      </div>
      <div className="space-y-1.5 p-2">
        <div className="flex items-center gap-1.5 rounded-md border border-neutral-100 p-1.5">
          <span className="grid h-5 w-5 place-items-center rounded text-white" style={{ background: BLUE }}>
            <Check className="h-3 w-3" />
          </span>
          <span className="h-1.5 flex-1 rounded bg-neutral-200" />
        </div>
        <div className="h-1.5 w-3/4 rounded bg-neutral-200" />
        <div className="h-1.5 w-1/2 rounded bg-neutral-100" />
        <p className="pt-1 text-center text-[8px] font-medium text-neutral-400">{label}</p>
      </div>
    </div>
  );
}

export { ChevronLeft };
