import Card from "../components/Card";

export default function Entender() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Entender a Ansiedade</h1>
          <p className="text-xl text-green-100">
            Compreenda como a ansiedade se manifesta na perspectiva da Medicina Tradicional Chinesa
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="mb-8">
            <h2 className="text-2xl font-bold text-primary mb-4">O que é Ansiedade na TCM?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Na Medicina Tradicional Chinesa, a ansiedade não é vista apenas como um distúrbio mental,
              mas como um <strong>desequilíbrio energético</strong> que afeta todo o corpo. Cada emoção
              está associada a um órgão específico, e quando há bloqueio ou fraqueza, manifestam-se
              sintomas físicos e emocionais.
            </p>
            <p className="text-gray-700 leading-relaxed">
              O conceito central é o <strong>Qi (Chi)</strong>, a energia vital que flui pelo corpo
              através de meridianos. Quando esse fluxo é interrompido, surgem os sintomas de ansiedade.
            </p>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card>
              <div className="text-4xl mb-4">🫁</div>
              <h3 className="text-xl font-semibold text-primary mb-3">Pulmões e oMetal</h3>
              <p className="text-gray-600 mb-4">
                O pulmão governa a respiração e está ligado à tristeza e ao luto. Quando enfraquecido,
                pode causar sentimentos de vulnerabilidade e dificuldade de "respirar fundo".
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Sensação de aperto no peito</li>
                <li>• Respiração superficial</li>
                <li>• Tendência a se isolar</li>
              </ul>
            </Card>

            <Card>
              <div className="text-4xl mb-4">❤️</div>
              <h3 className="text-xl font-semibold text-primary mb-3">Coração e o Fogo</h3>
              <p className="text-gray-600 mb-4">
                O coração abriga o Shen (espírito) e controla a mente. O excesso de pensamentos ou
                emoções intensas pode perturbá-lo, causando inquietação mental e insônia.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Insônia ou sono agitado</li>
                <li>• Palpitações</li>
                <li>• Dificuldade de se acalmar</li>
              </ul>
            </Card>

            <Card>
              <div className="text-4xl mb-4">🍽️</div>
              <h3 className="text-xl font-semibold text-primary mb-3">Baço e a Terra</h3>
              <p className="text-gray-600 mb-4">
                O baço transforma alimentos em energia (Qi) e está ligado à preocupação excessiva.
                Uma alimentação desregulada enfraquece o baço e aumenta a ansiedade.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Pensamentos repetitivos</li>
                <li>• Fadiga mental</li>
                <li>• Necessidade de "ruminar" problemas</li>
              </ul>
            </Card>

            <Card>
              <div className="text-4xl mb-4">🌳</div>
              <h3 className="text-xl font-semibold text-primary mb-3">Fígado e a Madeira</h3>
              <p className="text-gray-600 mb-4">
                O fígado garante o fluxo suave do Qi. Quando está estagnado, a energia não circula
                bem, causing frustration, irritability and feeling "stuck".
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Irritabilidade fácil</li>
                <li>• Tensão no pescoço e ombros</li>
                <li>• Sensação de estar "preso"</li>
              </ul>
            </Card>
          </div>

          <Card className="bg-secondary text-white mb-8">
            <h3 className="text-xl font-semibold mb-4">💡 A Visão Holística</h3>
            <p className="leading-relaxed">
              A grande diferença da TCM é tratar a pessoa como um todo. Não separamos mente e corpo.
              Quando você trabalha a ansiedade, está também fortalecendo órgãos, regulando emoções
              e restaurando o fluxo natural de energia. Cada técnica de autocuidado que você pratica
              tem efeito em todo o sistema.
            </p>
          </Card>

          <Card>
            <h2 className="text-2xl font-bold text-primary mb-4">Sinais de Desequilíbrio</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Dificuldade para dormir",
                "Pensamentos acelerados",
                "Tensão muscular",
                "Irritabilidade",
                "Preocupação excessiva",
                "Fadiga sem causa",
                "Dificuldade de concentração",
                "Sensação de aperto no peito",
              ].map((sign) => (
                <div key={sign} className="flex items-center gap-3 p-3 bg-green-50 rounded-xl">
                  <span className="text-secondary">●</span>
                  <span className="text-gray-700">{sign}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      <section className="py-16 px-4 bg-green-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">Próximo Passo</h2>
          <p className="text-lg text-gray-600 mb-8">
            Agora que você entende como a ansiedade funciona na TCM, descubra seu padrão emocional único.
          </p>
          <a
            href="/conhecer"
            className="inline-block px-8 py-4 bg-primary text-white rounded-2xl font-semibold hover:bg-green-700 transition-colors"
          >
            Conhecer Meu Padrão
          </a>
        </div>
      </section>
    </div>
  );
}