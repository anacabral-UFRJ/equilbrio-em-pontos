import Link from "next/link";
import Card from "./components/Card";
import Button from "./components/Button";

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-primary to-secondary text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Equilíbrio em Pontos
          </h1>
          <p className="text-xl sm:text-2xl text-green-100 mb-8 max-w-2xl mx-auto">
            Autocuidado digital para ansiedade baseado na Medicina Tradicional Chinesa
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button href="/entender" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
              Começar a Entender
            </Button>
            <Button href="/chat" variant="accent" size="lg" className="bg-accent hover:bg-amber-600">
              Falar com o Chat
            </Button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-background" style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }} />
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-primary mb-4">
            O que é a Medicina Tradicional Chinesa?
          </h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12 text-lg">
            A TCM看待健康 de forma holística, entendendo que nossas emoções e órgãos estão
            conectados. A ansiedade não é apenas um problema mental — é um desequilíbrio que
            pode ser trabalhado através de técnicas milenares de autocuidado.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card hover>
              <div className="text-4xl mb-4">🌿</div>
              <h3 className="text-xl font-semibold text-primary mb-2">Entender</h3>
              <p className="text-gray-600 mb-4">
                Compreenda como a ansiedade se manifesta segundo a Medicina Tradicional Chinesa.
              </p>
              <Link href="/entender" className="text-secondary hover:text-teal-600 font-medium">
                Saiba mais →
              </Link>
            </Card>

            <Card hover>
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-primary mb-2">Conhecer</h3>
              <p className="text-gray-600 mb-4">
                Descubra seu padrão emocional único através de um quiz guiado pelos 5 elementos.
              </p>
              <Link href="/conhecer" className="text-secondary hover:text-teal-600 font-medium">
                Descobrir →
              </Link>
            </Card>

            <Card hover>
              <div className="text-4xl mb-4">🧘</div>
              <h3 className="text-xl font-semibold text-primary mb-2">Praticar</h3>
              <p className="text-gray-600 mb-4">
                Aprenda técnicas de respiração, acupressão e movimento para equilibrar seu Qi.
              </p>
              <Link href="/praticar" className="text-secondary hover:text-teal-600 font-medium">
                Praticar →
              </Link>
            </Card>

            <Card hover>
              <div className="text-4xl mb-4">🌅</div>
              <h3 className="text-xl font-semibold text-primary mb-2">Integrar</h3>
              <p className="text-gray-600 mb-4">
                Crie rotinas diárias e noturnas para manter o equilíbrio entre corpo e mente.
              </p>
              <Link href="/integrar" className="text-secondary hover:text-teal-600 font-medium">
                Integrar →
              </Link>
            </Card>

            <Card hover>
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-xl font-semibold text-primary mb-2">Chat</h3>
              <p className="text-gray-600 mb-4">
                Converse sobre seus sentimentos e receba orientações baseadas nos princípios da TCM.
              </p>
              <Link href="/chat" className="text-secondary hover:text-teal-600 font-medium">
                Conversar →
              </Link>
            </Card>

            <Card hover>
              <div className="text-4xl mb-4">🆘</div>
              <h3 className="text-xl font-semibold text-danger mb-2">Emergência</h3>
              <p className="text-gray-600 mb-4">
                Precisa de ajuda imediata? Acesse nosso guia de crise com técnicas calmantes.
              </p>
              <Link href="/emergencia" className="text-danger hover:text-red-700 font-medium">
                Ver guia →
              </Link>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-green-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary mb-6">
            Como a TCM看待 a Ansiedade
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Na Medicina Tradicional Chinesa, a ansiedade está frequentemente ligada à
            <strong> estagnação do Qi do Fígado</strong> e ao <strong>desbalanço do Coração</strong>.
            Quando o fluxo de energia está comprometido, emoções como preocupação, medo e
            inquietação podem se manifestar.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { element: "🌊", name: "Água", organ: "Rins", emotion: "Medo" },
              { element: "🌳", name: "Madeira", organ: "Fígado", emotion: "Raiva" },
              { element: "🔥", name: "Fogo", organ: "Coração", emotion: "Ansiedade" },
              { element: "🌍", name: "Terra", organ: "Baço", emotion: "Preocupação" },
              { element: "⚪", name: "Metal", organ: "Pulmões", emotion: "Tristeza" },
            ].map((item) => (
              <div key={item.name} className="bg-white rounded-2xl p-4 shadow-sm">
                <div className="text-3xl mb-2">{item.element}</div>
                <h4 className="font-semibold text-primary">{item.name}</h4>
                <p className="text-sm text-gray-600">{item.organ}</p>
                <p className="text-sm text-secondary font-medium">{item.emotion}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary mb-6">
            Comece Seu Caminho de Autocuidado
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Não espere sentir-se completamente pronto. O primeiro passo é sempre o mais importante.
          </p>
          <Button href="/entender" size="lg" className="bg-accent hover:bg-amber-600">
            Iniciar Jornada
          </Button>
        </div>
      </section>
    </div>
  );
}