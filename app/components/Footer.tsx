import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold text-lg mb-3">Equilíbrio em Pontos</h3>
            <p className="text-green-200 text-sm">
              Plataforma de autocuidado digital baseada nos princípios da Medicina Tradicional Chinesa.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-3">Navegação</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/entender" className="text-green-200 hover:text-white transition-colors text-sm">
                  Entender a Ansiedade
                </Link>
              </li>
              <li>
                <Link href="/conhecer" className="text-green-200 hover:text-white transition-colors text-sm">
                  Conhecer seus Padrões
                </Link>
              </li>
              <li>
                <Link href="/praticar" className="text-green-200 hover:text-white transition-colors text-sm">
                  Praticar Autocuidado
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-3">Precisa de Ajuda?</h3>
            <p className="text-green-200 text-sm mb-2">
              Em caso de crise, procure ajuda profissional.
            </p>
            <Link
              href="/emergencia"
              className="inline-block px-4 py-2 bg-danger rounded-xl text-white text-sm hover:bg-red-700 transition-colors"
            >
              Guia de Emergência
            </Link>
          </div>
        </div>
        <div className="border-t border-green-700 mt-8 pt-6 text-center text-green-200 text-sm">
          <p>© {new Date().getFullYear()} Equilíbrio em Pontos. Autocuidado consciente.</p>
        </div>
      </div>
    </footer>
  );
}