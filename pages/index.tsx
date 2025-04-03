import React from "react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <div className="flex flex-col items-center justify-center text-center px-6 py-24">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Proteja sua reputação no mundo das IAs.
        </h1>
        <p className="text-lg text-gray-400 mb-8 max-w-xl">
          Detectia identifica deepfakes e falsificações em poucos cliques.
        </p>
        <a
          href="/"
          className="bg-[#01FF97] text-black font-bold py-3 px-6 rounded-full hover:opacity-90 transition"
        >
          Testar Detectia agora
        </a>
      </div>

      <div className="px-6 py-12 bg-[#111] text-center">
        <h2 className="text-2xl font-semibold mb-6">Por que usar a Detectia?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-[#1a1a1a] p-6 rounded-xl">
            <h3 className="text-lg font-bold mb-2">Análise instantânea</h3>
            <p className="text-gray-400">Receba o resultado em segundos, sem complicações.</p>
          </div>
          <div className="bg-[#1a1a1a] p-6 rounded-xl">
            <h3 className="text-lg font-bold mb-2">Relatório em PDF</h3>
            <p className="text-gray-400">Baixe um documento com o score de autenticidade.</p>
          </div>
          <div className="bg-[#1a1a1a] p-6 rounded-xl">
            <h3 className="text-lg font-bold mb-2">Interface minimalista</h3>
            <p className="text-gray-400">Foco total na experiência do usuário.</p>
          </div>
        </div>
      </div>

      <footer className="text-center text-gray-500 text-sm py-6">
        © {new Date().getFullYear()} Detectia. Todos os direitos reservados.
      </footer>
    </div>
  );
}
