import Card from "../components/Card";
import Button from "../components/Button";

const morningRoutine = [
  {
    time: "6:00 - 6:30",
    activity: "Despertar Consciente",
    description: "Antes de pegar o celular, reserve 30 minutos para você.",
    practices: [
      "Respiração 4-7-8 (5 ciclos)",
      "Alongamento suave do pescoço e ombros",
      "Estímulo do ponto LV3 (1 min cada pé)",
      "Beber água morna com limão",
    ],
    tcmBenefit: "Fortalece o Qi do Fígado e prepara o corpo para o dia",
  },
  {
    time: "6:30 - 7:00",
    activity: "Movimento Suave",
    description: "Ative o corpo com movimentos que promovam o fluxo de Qi.",
    practices: [
      "Tai Chi ou Yoga suave (15 min)",
      "Caminhada ao ar livre se possível (15 min)",
      "Alongamentos específicos para o padrão identificado",
    ],
    tcmBenefit: "Promove a circulação do Qi e ativa o sistema nervoso parassimpático",
  },
  {
    time: "7:00 - 7:30",
    activity: "Alimentação Consciente",
    description: "O café da manhã é essencial na perspectiva da TCM.",
    practices: [
      "Alimentos quentes e cozidos (evitar crus em excesso)",
      "Concentrar-se na refeição sem telas",
      "Mastigar bem cada bite",
    ],
    tcmBenefit: "Fortalece o Qi do Baço e a digestão",
  },
];

const eveningRoutine = [
  {
    time: "20:00 - 20:30",
    activity: "Transição para o Repouso",
    description: "Prepare-se mentalmente para o descanso.",
    practices: [
      "Desligar telas 30 min antes de dormir",
      "Luz suave e temperatura fresca",
      "Respiração Diafragmática (5 min)",
      "Stimulação do ponto HT7 (1 min cada pulso)",
    ],
    tcmBenefit: "Acalma o Shen (espírito) e prepara o Coração para o sono",
  },
  {
    time: "20:30 - 21:00",
    activity: "Prática Noturna",
    description: "Técnicas específicas para o período Yin.",
    practices: [
      "Meditação guiada ou sons da natureza",
      "Alongamentos leves em caso de tensão",
      "Aplicar calor suave no abdômen (se Baço enfraquecido)",
      "Escrita gratidão ou journaling (se preocupação excessiva)",
    ],
    tcmBenefit: "Reduz a atividade mental Yang e promove o sono reparador",
  },
  {
    time: "21:00",
    activity: "Hora de Dormir",
    description: "O sono antes da meia-noite é o mais reparador.",
    practices: [
      "Deitar preferencialmente antes das 22h",
      "Evitar refeições pesadas após as 20h",
      "Criar escuridão total no quarto",
      "Temperatura entre 18-21°C",
    ],
    tcmBenefit: "Maximiza a produção de Qi dos Rins durante o sono profundo",
  },
];

const weeklyPractices = [
  {
    day: "Segunda",
    focus: "Fígado - Liberar a Tensão",
    practice: "Respiração do Fígado + alongamento lateral",
    color: "bg-green-100 border-green-300",
  },
  {
    day: "Terça",
    focus: "Vesícula Biliar - Decisões",
    practice: "Caminhada consciente + auto-massagem",
    color: "bg-green-100 border-green-300",
  },
  {
    day: "Quarta",
    focus: "Coração - Calma Mental",
    practice: "Meditação + HT7 acupressão",
    color: "bg-red-100 border-red-300",
  },
  {
    day: "Quinta",
    focus: "Intestino Delgado - Liberar Emoções",
    practice: "Yoga suave + respiração completa",
    color: "bg-orange-100 border-orange-300",
  },
  {
    day: "Sexta",
    focus: "Baço/Pâncreas - Digestão Emocional",
    practice: "Macações + auto-massagem abdominal",
    color: "bg-amber-100 border-amber-300",
  },
  {
    day: "Sábado",
    focus: "Pulmões - Largar o Luto",
    practice: "Respiração profunda + tempo na natureza",
    color: "bg-gray-100 border-gray-300",
  },
  {
    day: "Domingo",
    focus: "Rins - Enraizamento",
    practice: "Descanso, banhos quentes, HK3 acupressão",
    color: "bg-blue-100 border-blue-300",
  },
];

export default function Integrar() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Integrar à Rotina</h1>
          <p className="text-xl text-green-100">
            Crie hábitos diários e noturnos para manter o equilíbrio entre corpo e mente
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Rotina Matinal</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A manhã é o momento de energizar o corpo e preparar o Qi para o dia. As práticas matinais
              ajudam a estabilizar as emoções e aumentar a resiliência.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
            {morningRoutine.map((block, index) => (
              <Card key={index}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-accent text-white rounded-full text-sm font-medium">
                    {block.time}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">{block.activity}</h3>
                <p className="text-gray-600 text-sm mb-4">{block.description}</p>
                <ul className="space-y-2 mb-4">
                  {block.practices.map((practice, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-secondary mt-0.5">●</span>
                      {practice}
                    </li>
                  ))}
                </ul>
                <div className="p-3 bg-green-50 rounded-xl">
                  <p className="text-xs text-gray-600">
                    <strong className="text-primary">Benefício TCM:</strong> {block.tcmBenefit}
                  </p>
                </div>
              </Card>
            ))}
          </div>

          <div className="bg-secondary/10 rounded-3xl p-8 mb-16">
            <div className="max-w-xl mx-auto text-center">
              <span className="text-6xl mb-4 block">☀️</span>
              <h3 className="text-2xl font-bold text-primary mb-4">Dica Matinal</h3>
              <p className="text-gray-700 leading-relaxed">
                Na TCM, as primeiras horas da manhã são dominated pelo Fígado e Vesícula Biliar
                (elemento Madeira). Este é o melhor momento para praticar atividades que
                <strong> libertam a energia estagnada</strong> e preparam o corpo para agir
                com clareza e decisão ao longo do dia.
              </p>
            </div>
          </div>

          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Rotina Noturna</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A noite é o momento de restaurar e regenerar. As práticas noturnas acalmam a mente,
              preparam o corpo para o sono e fortalecem os Rins e o Coração.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
            {eveningRoutine.map((block, index) => (
              <Card key={index}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-primary text-white rounded-full text-sm font-medium">
                    {block.time}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">{block.activity}</h3>
                <p className="text-gray-600 text-sm mb-4">{block.description}</p>
                <ul className="space-y-2 mb-4">
                  {block.practices.map((practice, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-secondary mt-0.5">●</span>
                      {practice}
                    </li>
                  ))}
                </ul>
                <div className="p-3 bg-green-50 rounded-xl">
                  <p className="text-xs text-gray-600">
                    <strong className="text-primary">Benefício TCM:</strong> {block.tcmBenefit}
                  </p>
                </div>
              </Card>
            ))}
          </div>

          <div className="bg-primary/10 rounded-3xl p-8 mb-16">
            <div className="max-w-xl mx-auto text-center">
              <span className="text-6xl mb-4 block">🌙</span>
              <h3 className="text-2xl font-bold text-primary mb-4">Dica Noturna</h3>
              <p className="text-gray-700 leading-relaxed">
                O período da noite é dominado pelo elemento Água (Rins e Bexiga). Este é o momento
                de <strong>conectar-se com o interior</strong>, praticar introspecção e permitir
                que o corpo se regenera. Evite atividades estimulantes e invista em práticas
                que acalmam o Shen (espírito).
              </p>
            </div>
          </div>

          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Práticas Semanais</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Cada dia da semana pode ser alinhado com um órgão específico, criando um ciclo
              restaurador de 7 dias.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-8">
            {weeklyPractices.map((day) => (
              <div
                key={day.day}
                className={`p-4 rounded-2xl border-2 ${day.color}`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-primary">{day.day}</span>
                </div>
                <p className="text-sm text-secondary font-medium mb-1">{day.focus}</p>
                <p className="text-xs text-gray-600">{day.practice}</p>
              </div>
            ))}
          </div>

          <Card className="bg-accent/10">
            <h3 className="text-xl font-semibold text-primary mb-4">Princípios Fundamentais</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🌅</span>
                <div>
                  <h4 className="font-medium text-primary">Consistência &gt; Intensidade</h4>
                  <p className="text-sm text-gray-600">
                    10 minutos diários são mais eficazes que 1 hora uma vez por semana.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🔥</span>
                <div>
                  <h4 className="font-medium text-primary">Aquecido &gt; Frio</h4>
                  <p className="text-sm text-gray-600">
                    Na TCM, o calor promove o fluxo de Qi. Evite bebidas geladas durante as práticas.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🌿</span>
                <div>
                  <h4 className="font-medium text-primary">Suavidade &gt; Esforço</h4>
                  <p className="text-sm text-gray-600">
                    Forçar o corpo cria tensão oposta ao objetivo. Pratique com gentileza.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">💭</span>
                <div>
                  <h4 className="font-medium text-primary">Presença &gt; Quantidade</h4>
                  <p className="text-sm text-gray-600">
                    Esteja presente em cada respiração. A qualidade da prática supera a quantidade.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="py-16 px-4 bg-green-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">Comece Hoje</h2>
          <p className="text-lg text-gray-600 mb-8">
            Não precisa ser perfeito. Escolha uma prática para começar e built from there.
          </p>
          <Button href="/praticar" size="lg">
            Ver Técnicas Detalhadas
          </Button>
        </div>
      </section>
    </div>
  );
}