import Card from "../components/Card";
import Button from "../components/Button";

const breathingTechniques = [
  {
    id: "breathing-1",
    title: "Respiração 4-7-8",
    description: "Técnica poderosa para acalmar o sistema nervoso e reduzir a ansiedade aguda.",
    duration: "5 minutos",
    difficulty: "Fácil",
    steps: [
      "Sente-se confortavelmente com a coluna ereta",
      "Expire completamente pela boca",
      "Inspire pelo nariz contando até 4",
      "Segure o ar contando até 7",
      "Expire lentamente pela boca contando até 8",
      "Repita 4 a 8 ciclos",
    ],
    benefit: "Ativa o sistema parassimpático, reduzindo a resposta de luta ou fuga.",
  },
  {
    id: "breathing-2",
    title: "Respiração Diafragmática",
    description: "Técnica fundamental para fortalecer o Qi e promover a calma interior.",
    duration: "10 minutos",
    difficulty: "Fácil",
    steps: [
      "Coloque uma mão no peito e outra no abdômen",
      "Inspire profundamente pelo nariz, expandindo o abdômen",
      "O peito não deve subir muito",
      "Expire lentamente pelo nariz ou boca",
      "Sinta o abdômen contraindo",
      "Pratique por 5-10 minutos",
    ],
    benefit: "Fortalece o Baço e melhora a digestão do Qi (energia).",
  },
  {
    id: "breathing-3",
    title: "Respiração do Fígado (Harding)",
    description: "Especial para liberar a tensão acumulada no Fígado e promover o fluxo de Qi.",
    duration: "3 minutos",
    difficulty: "Intermediário",
    steps: [
      "Inspire expandindo as costelas lateralmente",
      "Segure levemente sem forçar",
      "Expire relaxando completamente o abdômen",
      "Faça uma pausa suave antes da próxima inspiração",
      "Mantenha o ritmo lento e constante",
      "Pratique por 3 minutos",
    ],
    benefit: "Libera a estagnação do Qi do Fígado, reduzindo irritabilidade.",
  },
];

const acupressurePoints = [
  {
    id: "acupressure-1",
    point: "LV3 (Taichong)",
    name: "Grande Corrida",
    location: "No dorso do pé, na depressão entre o 1º e 2º dedo, onde se encontram os ossos",
    function: "Regula o Qi do Fígado, alivia a tensão e a irritabilidade",
    technique: "Pressione com o polegar por 1-2 minutos em cada pé, respirando profundamente",
    indication: "Raiva, frustração, tensão no pescoço, dores de cabeça",
  },
  {
    id: "acupressure-2",
    point: "HT7 (Shenmen)",
    name: "Porta Espiritual",
    location: "Na dobra do pulso, lado ulnar (mindinho), em uma depressão entre os tendões",
    function: "Calma a mente, regula o Shen (espírito) do Coração",
    technique: "Pressione suavemente por 1-2 minutos em cada pulso, com respiração lenta",
    indication: "Ansiedade, insônia, palpitations, inquietação mental",
  },
  {
    id: "acupressure-3",
    point: "PC6 (Neiguan)",
    name: "Passagem Interior",
    location: "3 dedos acima da dobra do pulso, entre os tendões",
    function: "Harmoniza o Qi do Coração, alivia náuseas e ansiedade",
    technique: "Pressione por 1-2 minutos em cada pulso, sentindo a energia fluir",
    indication: "Ansiedade, enjoo, insônia, tensão emocional",
  },
  {
    id: "acupressure-4",
    point: "SP6 (Sanyinjiao)",
    name: "Três Intersecções do Yin",
    location: "3 dedos acima do maléolo interno (osso do tornozelo), atrás do osso",
    function: "Fortalece o Baço, acalma a mente, regula as emoções",
    technique: "Pressione por 1-2 minutos em cada tornozelo, evite na gravidez",
    indication: "Preocupação excessiva, fadiga, insônia, desequilíbrio hormonal",
  },
  {
    id: "acupressure-5",
    point: "KD3 (Taixi)",
    name: "Grande Riacho",
    location: "Na depressão entre o maléolo interno e o tendão de Aquiles",
    function: "Fortalece o Qi dos Rins, acalma o medo e a insegurança",
    technique: "Pressione gentilmente por 1-2 minutos em cada pé, com respiração profunda",
    indication: "Medo, fadiga crônica, insônia, insegurança",
  },
  {
    id: "acupressure-6",
    point: "LU7 (Lieque)",
    name: "Seqüestro Esparso",
    location: "Na face radial do pulso, 1 dedo acima da dobra, no processo estiloide",
    function: "Regula o Qi do Pulmão, fortalece a respiração e a 'deixa ir'",
    technique: "Pressione e massageie em círculo por 1-2 minutos em cada pulso",
    indication: "Tristeza, dificuldade respiratória, necessidade de se proteger",
  },
];

const movementPractices = [
  {
    id: "movement-1",
    title: "Tai Chi Suave",
    description: "Movimentos lentos e fluidos para promover o fluxo livre do Qi",
    duration: "15-20 minutos",
    benefits: ["Melhora o equilíbrio do Qi", "Reduz tensão muscular", "Calma a mente"],
  },
  {
    id: "movement-2",
    title: "Yoga Adaptado",
    description: "Posturas suaves para liberar bloqueios energéticos",
    duration: "20-30 minutos",
    benefits: ["Libera tensão acumulada", "Melhora a respiração", "Conexão mente-corpo"],
  },
  {
    id: "movement-3",
    title: "Alongamento do Fígado",
    description: "Movimentos específicos para liberar a energia do Fígado",
    duration: "5-10 minutos",
    benefits: ["Alivia tensão no pescoço", "Reduz irritabilidade", "Melhora o humor"],
  },
];

export default function Praticar() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Praticar Autocuidado</h1>
          <p className="text-xl text-green-100">
            Técnicas de respiração, acupressão e movimento para equilibrar seu Qi
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-2 text-center">Respiração</h2>
          <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
            A respiração é a ponte entre o corpo e a mente. Na TCM, uma respiração profunda e consciente
            é essencial para manter o fluxo livre do Qi e acalmar as emoções.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
            {breathingTechniques.map((technique) => (
              <Card key={technique.id} hover>
                <div className="flex justify-between items-start mb-4">
                  <span className="px-3 py-1 bg-secondary text-white rounded-full text-xs font-medium">
                    {technique.duration}
                  </span>
                  <span className="px-3 py-1 bg-green-100 text-primary rounded-full text-xs font-medium">
                    {technique.difficulty}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">{technique.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{technique.description}</p>

                <details className="group mb-4">
                  <summary className="cursor-pointer text-secondary font-medium text-sm flex items-center gap-2">
                    <span className="transform group-open:rotate-90 transition-transform">▶</span>
                    Ver passos
                  </summary>
                  <ol className="mt-3 space-y-2 text-sm text-gray-700 pl-4">
                    {technique.steps.map((step, index) => (
                      <li key={index} className="flex gap-2">
                        <span className="text-secondary font-medium">{index + 1}.</span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </details>

                <div className="p-3 bg-green-50 rounded-xl">
                  <p className="text-xs text-gray-600">
                    <strong className="text-primary">Benefício:</strong> {technique.benefit}
                  </p>
                </div>
              </Card>
            ))}
          </div>

          <h2 className="text-3xl font-bold text-primary mb-2 text-center">Acupressão</h2>
          <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
            A acupressão é uma técnica milenar que utiliza a pressão em pontos específicos do corpo
            para promover o equilíbrio energético. Esses pontos podem ser estimulados por você mesmo.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {acupressurePoints.map((point) => (
              <Card key={point.id} hover>
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center text-white text-2xl flex-shrink-0">
                    ✨
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-lg font-semibold text-primary">{point.point}</h3>
                      <span className="text-xs text-gray-500">({point.name})</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">
                      <strong className="text-secondary">Localização:</strong> {point.location}
                    </p>
                    <p className="text-sm text-gray-600 mb-2">
                      <strong className="text-secondary">Indicação:</strong> {point.indication}
                    </p>
                    <div className="p-3 bg-green-50 rounded-xl">
                      <p className="text-xs text-gray-600">
                        <strong className="text-primary">Técnica:</strong> {point.technique}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <h2 className="text-3xl font-bold text-primary mb-2 text-center">Movimento</h2>
          <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
            O movimento consciente ajuda a liberar a energia estagnada e promove o fluxo natural do Qi.
            Pratique com suavidade e sem forçar.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {movementPractices.map((practice) => (
              <Card key={practice.id} hover>
                <h3 className="text-xl font-semibold text-primary mb-2">{practice.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{practice.description}</p>
                <p className="text-xs text-secondary font-medium mb-3">{practice.duration}</p>
                <ul className="space-y-2">
                  {practice.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="text-secondary">✓</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-green-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">Integrar à Rotina</h2>
          <p className="text-lg text-gray-600 mb-8">
            A prática consistente é mais eficaz que a intensidade. Comece devagar e construa seus hábitos.
          </p>
          <Button href="/integrar" size="lg">
            Ver Rotinas Diárias
          </Button>
        </div>
      </section>
    </div>
  );
}