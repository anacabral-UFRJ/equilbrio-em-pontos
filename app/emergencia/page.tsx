import Card from "../components/Card";

export default function Emergencia() {
  return (
    <div className="min-h-screen">
      <section className="bg-danger text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Guia de Emergência</h1>
          <p className="text-xl text-red-100">
            Você não está sozinho(a). Vamos passar por isso juntos.
          </p>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <Card className="mb-8 border-2 border-danger/20">
            <div className="flex items-start gap-4">
              <span className="text-4xl">🆘</span>
              <div>
                <h2 className="text-xl font-bold text-danger mb-2">Se você está em crise agora:</h2>
                <p className="text-gray-700 leading-relaxed">
                  Se você está tendo pensamentos de se machucar ou se suicídio, ou se sente em
                  perigo imediato, <strong>procure ajuda profissional agora</strong>.
                </p>
              </div>
            </div>
          </Card>

          <Card className="mb-8">
            <h2 className="text-2xl font-bold text-primary mb-6 text-center">Passo a Passo para Crise</h2>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-secondary text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-1">Pare e Reconheça</h3>
                  <p className="text-gray-600 text-sm mb-2">
                    Pause o que está fazendo. Reconheça que você está em um momento difícil.
                    Isso é temporário e você pode passar por isso.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-secondary text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-1">Respiração 4-7-8</h3>
                  <p className="text-gray-600 text-sm mb-2">
                    Faça esta técnica para ativar o sistema nervoso parassimpático:
                  </p>
                  <ul className="text-sm text-gray-700 space-y-1 ml-4">
                    <li>• Inspire pelo nariz contando até <strong>4</strong></li>
                    <li>• Segure contando até <strong>7</strong></li>
                    <li>• Expire pela boca contando até <strong>8</strong></li>
                    <li>• Repita 4 vezes</li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-secondary text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-1">Estímulo de Ponto de Acupressão</h3>
                  <p className="text-gray-600 text-sm mb-2">
                    Pressione firmemente o ponto <strong>HT7 (Shenmen)</strong> em cada pulso
                    por 1-2 minutos. Isso ajuda a calmar o coração e a mente.
                  </p>
                  <p className="text-xs text-gray-500">
                    Localização: Na dobra do pulso, lado do mindinho, entre os tendões.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-secondary text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-1">Conexão Terreno</h3>
                  <p className="text-gray-600 text-sm mb-2">
                    Sente-se ou deite-se. Sinta o contato do seu corpo com a cadeira ou chão.
                    Permita que a gravidade te ancore. Você está seguro(a) neste momento.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-secondary text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  5
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-1">Peça Ajuda</h3>
                  <p className="text-gray-600 text-sm mb-2">
                    Se a crise continuar, entre em contato com alguém de confiança:
                  </p>
                  <ul className="text-sm text-gray-700 space-y-1 ml-4">
                    <li>• Familiar ou amigo(a) próximo(a)</li>
                    <li>• Profissional de saúde mental</li>
                    <li>• Linha de Apoio Psicológico</li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>

          <Card className="mb-8 bg-red-50 border-2 border-red-200">
            <h2 className="text-xl font-bold text-danger mb-4">Recursos de Ajuda</h2>
            <div className="space-y-4">
              <div className="bg-white rounded-2xl p-4">
                <h3 className="font-semibold text-primary mb-1">CVV - Centro de Valorização da Vida</h3>
                <p className="text-gray-600 text-sm mb-2">
                  Apoio emocional e prevenção ao suicídio - 24 horas
                </p>
                <p className="font-bold text-danger">188 (telefone) | www.cvv.org.br</p>
              </div>
              <div className="bg-white rounded-2xl p-4">
                <h3 className="font-semibold text-primary mb-1">CAPS - Centro de Atenção Psicossocial</h3>
                <p className="text-gray-600 text-sm">
                  Procure o CAPS mais próximo da sua região para atendimento presencial.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-4">
                <h3 className="font-semibold text-primary mb-1">SAMU</h3>
                <p className="text-gray-600 text-sm">
                  Em caso de emergência médica
                </p>
                <p className="font-bold text-danger">192</p>
              </div>
              <div className="bg-white rounded-2xl p-4">
                <h3 className="font-semibold text-primary mb-1">Polícia Militar</h3>
                <p className="text-gray-600 text-sm">
                  Em caso de situação de risco imediato
                </p>
                <p className="font-bold text-danger">190</p>
              </div>
            </div>
          </Card>

          <Card>
            <h2 className="text-xl font-bold text-primary mb-4">Técnica Calmante Rápida</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-secondary mb-2">5-4-3-2-1 - Técnica dos Sentidos</h3>
                <p className="text-gray-600 text-sm mb-2">
                  Use seus sentidos para se ancorar no presente:
                </p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li><strong>5</strong> coisas que você consegue <strong>ver</strong></li>
                  <li><strong>4</strong> coisas que você consegue <strong>tocar</strong></li>
                  <li><strong>3</strong> coisas que você consegue <strong>ouvir</strong></li>
                  <li><strong>2</strong> coisas que você consegue <strong>cheirar</strong></li>
                  <li><strong>1</strong> coisa que você consegue <strong>provar</strong></li>
                </ul>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <h3 className="font-medium text-secondary mb-2">Respiração Box (Caixa)</h3>
                <p className="text-gray-600 text-sm mb-2">
                  Respire no ritmo de uma caixa:
                </p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Inspire contando até <strong>4</strong></li>
                  <li>• Segure contando até <strong>4</strong></li>
                  <li>• Expire contando até <strong>4</strong></li>
                  <li>• Segure vazio contando até <strong>4</strong></li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="py-12 px-4 bg-green-50">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-white rounded-3xl p-8 shadow-md">
            <span className="text-6xl mb-4 block">💚</span>
            <h2 className="text-2xl font-bold text-primary mb-4">Lembre-se</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              A ansiedade intensa passa. Ela atinge um pico e depois diminui.
              Você já passou por momentos difíceis antes e sobreviveu.
              Este momento também vai passar.
            </p>
            <p className="text-gray-600 text-sm">
              Depois que se sentir seguro(a), considere explorar as outras seções desta plataforma
              para encontrar práticas de autocuidado que podem ajudar a prevenir futuras crises.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mt-6">
              <a
                href="/praticar"
                className="px-6 py-3 bg-primary text-white rounded-2xl font-medium hover:bg-green-700 transition-colors"
              >
                Técnicas de Autocuidado
              </a>
              <a
                href="/"
                className="px-6 py-3 border-2 border-primary text-primary rounded-2xl font-medium hover:bg-primary hover:text-white transition-colors"
              >
                Voltar ao Início
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}