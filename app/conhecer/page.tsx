"use client";

import { useState } from "react";
import Card from "../components/Card";
import Button from "../components/Button";

const patterns = [
  {
    id: "A",
    name: "Estagnação do Fígado",
    element: "🌳 Madeira",
    color: "text-green-600",
    bgColor: "bg-green-50 border-green-200",
    description: "Você sente irritabilidade, tensão no pescoço e ombros, e dificuldade de lidar com frustrações. A energia parece estar 'travada'.",
    symptoms: ["Irritabilidade frequente", "Tensão muscular", "Dores de cabeça", "Sensação de 'preso'", "Dificuldade em relaxar"],
    recommendations: ["Respiração profunda do Fígado", "Alongamento suave", "Acupressão no ponto LR3", "Evitar café em excesso"],
  },
  {
    id: "B",
    name: "Deficiência do Coração",
    element: "🔥 Fogo",
    color: "text-red-600",
    bgColor: "bg-red-50 border-red-200",
    description: "Você experimenta inquietação mental, insônia, palpitações e dificuldade de se acalmar. O coração parece agitado.",
    symptoms: ["Insônia", "Palpitações", "Mente acelerada", "Ansiedade sem causa aparente", "Medo inexplicable"],
    recommendations: ["Meditação do Coração", "Respiração 4-7-8", "Chá de valeriana", "Acupressão no ponto HT7"],
  },
  {
    id: "C",
    name: "Deficiência do Baço",
    element: "🌍 Terra",
    color: "text-amber-600",
    bgColor: "bg-amber-50 border-amber-200",
    description: "Você tende a se preocupar excessivamente, tem dificuldade de concentração e sente fadiga mental constante.",
    symptoms: ["Preocupação excessiva", "Fadiga mental", "Pensamentos repetitivos", "Digestão sensível", "Necessidade de rotinas"],
    recommendations: ["Macações suaves", "Alimentação quente", "Respiração abdominal", "Ponto SP6 regularly"],
  },
  {
    id: "D",
    name: "Deficiência dos Rins",
    element: "🌊 Água",
    color: "text-blue-600",
    bgColor: "bg-blue-50 border-blue-200",
    description: "Você sente medo sem razão aparente, insegurança, fadiga profunda e por vezes desesperança.",
    symptoms: ["Medo sem causa", "Insegurança", "Fadiga crônica", "Sensação de vulnerabilidade", "Desejo de se esconder"],
    recommendations: ["Sessões curtas de meditação", "Chá de valeriana", "alongamentos suaves", "Ponto KD3 regularly"],
  },
  {
    id: "E",
    name: "Deficiência do Pulmão",
    element: "⚪ Metal",
    color: "text-gray-600",
    bgColor: "bg-gray-50 border-gray-200",
    description: "Você sente tristeza, dificuldade de 'respirar fundo', tendência ao isolamento e sensibilidade emocional.",
    symptoms: ["Tristeza", "Isolamento", "Respiração curta", "Sensibilidade à crítica", "Dificuldade de deixar ir"],
    recommendations: ["Respiração profunda", "Atividades ao ar livre", "Chá de lavanda", "Ponto LU7 regularly"],
  },
];

const questions = [
  {
    question: "Quando você se sente ansioso(a), onde percebe isso no corpo?",
    options: [
      { text: "No peito e coração (palpitações, aperto)", pattern: "B" },
      { text: "No pescoço e ombros (tensão, dor)", pattern: "A" },
      { text: "Na cabeça (pensamentos acelerados)", pattern: "C" },
      { text: "No estômago (borborigmos, enjoo)", pattern: "C" },
      { text: "Nas pernas (inquietude, tremor)", pattern: "A" },
    ],
  },
  {
    question: "Qual emoção você sente com mais frequência quando está desequilibrado(a)?",
    options: [
      { text: "Raiva ou frustração", pattern: "A" },
      { text: "Medo ou insegurança", pattern: "D" },
      { text: "Tristeza ou solidão", pattern: "E" },
      { text: "Preocupação ou nervosismo", pattern: "C" },
      { text: "Inquietação ou pânico", pattern: "B" },
    ],
  },
  {
    question: "Como é seu sono geralmente?",
    options: [
      { text: "Dificuldade em adormecer, mente acelerada", pattern: "B" },
      { text: "Acordar no meio da noite com preocupações", pattern: "C" },
      { text: "Sonhar muito, sono leve", pattern: "B" },
      { text: "Dormir demais, dificuldade de levantar", pattern: "D" },
      { text: "Acordar cansado mesmo dormindo horas", pattern: "D" },
    ],
  },
  {
    question: "Quando há um conflito ou desafio, sua primeira reação é:",
    options: [
      { text: "Ficar irritado(a) e tenso(a)", pattern: "A" },
      { text: "Ficar ansioso(a) e apreensivo(a)", pattern: "B" },
      { text: "Ficar pensativo(a) e担心的", pattern: "C" },
      { text: "Querer fugir ou evitar", pattern: "D" },
      { text: "Sentir-se triste ou desanimado(a)", pattern: "E" },
    ],
  },
  {
    question: "Qual dessas atividades mais ajuda você a se sentir melhor?",
    options: [
      { text: "Exercício físico intenso", pattern: "A" },
      { text: "Respiração profunda e meditação", pattern: "B" },
      { text: "Organizar e planejar", pattern: "C" },
      { text: "Descansar e se recolher", pattern: "D" },
      { text: "Conversar com alguém de confiança", pattern: "E" },
    ],
  },
];

export default function Conhecer() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState<Record<string, number>>({ A: 0, B: 0, C: 0, D: 0, E: 0 });
  const [showResult, setShowResult] = useState(false);
  const [selectedPattern, setSelectedPattern] = useState<string | null>(null);

  const handleAnswer = (pattern: string) => {
    const newScores = { ...scores, [pattern]: scores[pattern] + 1 };
    setScores(newScores);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const maxScore = Math.max(...Object.values(newScores));
      const dominantPattern = Object.keys(newScores).find((key) => newScores[key] === maxScore);
      setSelectedPattern(dominantPattern || null);
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScores({ A: 0, B: 0, C: 0, D: 0, E: 0 });
    setShowResult(false);
    setSelectedPattern(null);
  };

  const patternResult = patterns.find((p) => p.id === selectedPattern);

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Conhecer seus Padrões</h1>
          <p className="text-xl text-green-100">
            Descubra seu padrão emocional único segundo os 5 elementos da Medicina Tradicional Chinesa
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto">
          {!showResult ? (
            <Card>
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-500">
                    Pergunta {currentQuestion + 1} de {questions.length}
                  </span>
                  <span className="text-sm text-secondary font-medium">
                    {Math.round(((currentQuestion + 1) / questions.length) * 100)}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-secondary h-2 rounded-full transition-all duration-300"
                    style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                  />
                </div>
              </div>

              <h2 className="text-xl font-semibold text-primary mb-6">
                {questions[currentQuestion].question}
              </h2>

              <div className="space-y-3">
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(option.pattern)}
                    className="w-full text-left p-4 rounded-2xl border-2 border-gray-200 hover:border-secondary hover:bg-green-50 transition-all duration-200"
                  >
                    {option.text}
                  </button>
                ))}
              </div>
            </Card>
          ) : (
            patternResult && (
              <Card className={patternResult.bgColor}>
                <div className="text-center mb-6">
                  <span className="text-6xl block mb-4">{patternResult.element.split(" ")[0]}</span>
                  <span className={`text-sm font-medium ${patternResult.color}`}>
                    {patternResult.element}
                  </span>
                  <h2 className={`text-2xl font-bold ${patternResult.color} mt-2`}>
                    {patternResult.name}
                  </h2>
                </div>

                <p className="text-gray-700 text-center mb-6 leading-relaxed">
                  {patternResult.description}
                </p>

                <div className="mb-6">
                  <h3 className="font-semibold text-primary mb-3">Sintomas comuns:</h3>
                  <div className="flex flex-wrap gap-2">
                    {patternResult.symptoms.map((symptom) => (
                      <span
                        key={symptom}
                        className="px-3 py-1 bg-white rounded-full text-sm text-gray-700 border border-gray-200"
                      >
                        {symptom}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="font-semibold text-primary mb-3">Recomendações personalizadas:</h3>
                  <ul className="space-y-2">
                    {patternResult.recommendations.map((rec) => (
                      <li key={rec} className="flex items-center gap-3 p-2 bg-white rounded-xl">
                        <span className="text-secondary">✓</span>
                        <span className="text-gray-700">{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-3">
                  <Button href="/praticar" className="flex-1">
                    Ver Técnicas
                  </Button>
                  <Button href="/chat" variant="secondary" className="flex-1">
                    Falar sobre isso
                  </Button>
                </div>

                <button
                  onClick={resetQuiz}
                  className="w-full mt-4 py-2 text-gray-500 hover:text-primary transition-colors text-sm"
                >
                  Refazer Quiz
                </button>
              </Card>
            )
          )}
        </div>
      </section>

      <section className="py-16 px-4 bg-green-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-primary mb-8">
            Todos os 5 Padrões
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {patterns.map((pattern) => (
              <Card key={pattern.id} hover className={pattern.bgColor}>
                <span className="text-2xl">{pattern.element.split(" ")[0]}</span>
                <h3 className={`font-semibold mt-2 ${pattern.color}`}>{pattern.name}</h3>
                <p className="text-sm text-gray-600 mt-1">{pattern.element}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}