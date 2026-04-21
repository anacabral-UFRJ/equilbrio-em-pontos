import Link from "next/link";

export default function EmergencyButton() {
  return (
    <Link
      href="/emergencia"
      className="fixed bottom-6 right-6 z-50 bg-danger text-white px-6 py-4 rounded-2xl shadow-lg hover:bg-red-700 hover:shadow-xl transition-all duration-200 flex items-center gap-3 group"
    >
      <span className="text-2xl group-hover:animate-pulse">🆘</span>
      <div className="hidden sm:block">
        <p className="font-semibold text-sm">Emergência</p>
        <p className="text-xs text-red-200">Precisa de ajuda?</p>
      </div>
    </Link>
  );
}