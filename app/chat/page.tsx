import ChatBox from "../components/ChatBox";

export default function Chat() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Chat de Autocuidado</h1>
          <p className="text-xl text-green-100">
            Compartilhe como você está se sentindo e receba orientações baseadas na Medicina Tradicional Chinesa
          </p>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <ChatBox />
        </div>
      </section>

      <section className="py-12 px-4 bg-green-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-primary mb-6 text-center">Como o Chat Pode Ajudar</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-3xl p-6 text-center">
              <span className="text-4xl mb-4 block">💬</span>
              <h3 className="font-semibold text-primary mb-2">Escuta Ativa</h3>
              <p className="text-sm text-gray-600">
                Espaço seguro para expressar suas emoções sem julgamento.
              </p>
            </div>
            <div className="bg-white rounded-3xl p-6 text-center">
              <span className="text-4xl mb-4 block">🔍</span>
              <h3 className="font-semibold text-primary mb-2">Conexão TCM</h3>
              <p className="text-sm text-gray-600">
                Orientações personalizadas baseadas nos princípios da Medicina Tradicional Chinesa.
              </p>
            </div>
            <div className="bg-white rounded-3xl p-6 text-center">
              <span className="text-4xl mb-4 block">🧭</span>
              <h3 className="font-semibold text-primary mb-2">Direcionamento</h3>
              <p className="text-sm text-gray-600">
                Sugestões de práticas e técnicas específicas para seu momento atual.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-primary mb-4">Importante</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-3xl p-6 max-w-2xl mx-auto">
            <p className="text-gray-700">
              Este chat oferece <strong>suporte de autocuidado</strong>, não substituição de
              acompanhamento profissional. Se você está enfrentando uma crise ou precisa de
              ajuda especializada, não hesite em buscar profissionais de saúde mental.
            </p>
            <a
              href="/emergencia"
              className="inline-block mt-4 px-6 py-3 bg-danger text-white rounded-2xl font-medium hover:bg-red-700 transition-colors"
            >
              Ver Guia de Emergência
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}