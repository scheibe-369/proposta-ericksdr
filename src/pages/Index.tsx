import { useState } from "react";
import {
  HeroSection,
  MarqueeTicker,
  MomentoAtualSection,
  EcossistemaSection,
  FeatureTabsSection,
  JornadaSection,
  InvestimentoSection,
  PrecosSection,
  ContinuidadeSection,
  CTASection,
  Footer,
} from "@/modules/proposta";
import { proposta } from "@/modules/proposta/data/proposta.config";

const Index = () => {
  const pacotes = proposta.precos.planos;
  const continuidades = proposta.continuidade?.planos ?? [];

  const [pacoteId, setPacoteId] = useState<string | undefined>(
    pacotes.find((p) => p.destaque)?.id ?? pacotes[0]?.id,
  );
  const [continuidadeId, setContinuidadeId] = useState<string | undefined>(
    continuidades.find((p) => p.destaque)?.id ?? continuidades[0]?.id,
  );

  const pacoteNome = pacotes.find((p) => p.id === pacoteId)?.nome;
  const continuidadeNome = continuidades.find((p) => p.id === continuidadeId)?.nome;

  // Monta a mensagem do WhatsApp com a escolha do cliente, reaproveitando o número do config.
  const waNumber = proposta.cta.botaoLink?.match(/wa\.me\/(\d+)/)?.[1] ?? "5521991083870";
  const partes = [
    pacoteNome && `o pacote ${pacoteNome}`,
    continuidadeNome && `o plano ${continuidadeNome}`,
  ].filter(Boolean);
  const texto = partes.length
    ? `Olá! Quero avançar com a proposta. Escolhi ${partes.join(" e ")}.`
    : "Olá! Quero avançar com a proposta do sistema unificado.";
  const botaoLink = `https://wa.me/${waNumber}?text=${encodeURIComponent(texto)}`;
  const resumo = partes.length
    ? `Sua escolha: ${[pacoteNome, continuidadeNome].filter(Boolean).join(" · ")}`
    : undefined;

  const ctaData = { ...proposta.cta, botaoLink, resumo };

  return (
    <main className="min-h-screen bg-background text-foreground">
      <HeroSection data={proposta.hero} />

      {proposta.momentoAtual && <MomentoAtualSection data={proposta.momentoAtual} />}

      <MarqueeTicker data={proposta.marquee} />

      <EcossistemaSection data={proposta.ecossistema} />

      <FeatureTabsSection data={proposta.featureTabs} />

      <JornadaSection data={proposta.jornada} />

      <MarqueeTicker data={proposta.marquee} reverse />

      {proposta.investimento && <InvestimentoSection data={proposta.investimento} />}

      <PrecosSection data={proposta.precos} selectedId={pacoteId} onSelect={setPacoteId} />

      {proposta.continuidade && (
        <ContinuidadeSection
          data={proposta.continuidade}
          selectedId={continuidadeId}
          onSelect={setContinuidadeId}
        />
      )}

      <CTASection data={ctaData} />

      {proposta.footer && <Footer data={proposta.footer} />}
    </main>
  );
};

export default Index;
