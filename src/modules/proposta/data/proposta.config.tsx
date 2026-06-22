import { Check, MessageCircle, CalendarCheck } from "lucide-react";
import {
  type IconProps,
  WarningOctagon,
  Lightbulb,
  ClipboardText,
  CalendarCheck as PhCalendarCheck,
  ChatsCircle,
  Kanban,
  ShieldCheck,
  HeadCircuit,
  Headset,
  Stethoscope,
  HardDrives,
  Coins,
  WhatsappLogo,
} from "@phosphor-icons/react";
import type { ComponentType } from "react";
import logo from "@/assets/logo-growthhub.png";
import type { PropostaConfig } from "../types";

/**
 * FONTE ÚNICA DE CONTEÚDO DA PROPOSTA.
 *
 * Cliente: Clínica Médica Breviglieri e Clínica Anima (mesmo grupo, mesmo sistema), hoje em ProDoctor (gestão) + InfoChat (atendimento).
 * Dores: ProDoctor trava/bug/lento, InfoChat bane número e tem CRM fraco.
 * Solução: um sistema unificado, sob medida, em nuvem.
 *
 * Identidade visual: roxo/violeta da GrowthHub (definido em src/index.css). Não trocar.
 * Ícones dos cards: Phosphor em peso "duotone" (mais distintos), via helper duo().
 */

/* ------------------------------------------------------------------ */
/* Ícones (Phosphor duotone) para os cards                            */
/* ------------------------------------------------------------------ */

const duo = (Comp: ComponentType<IconProps>) => {
  const Wrapped = ({ className }: { className?: string }) => (
    <Comp weight="duotone" className={className} />
  );
  return Wrapped;
};

const IcoDesafio = duo(WarningOctagon);
const IcoSolucao = duo(Lightbulb);
const IcoProntuario = duo(ClipboardText);
const IcoAgenda = duo(PhCalendarCheck);
const IcoAtendimento = duo(ChatsCircle);
const IcoCrm = duo(Kanban);
const IcoSemBanimento = duo(ShieldCheck);
const IcoIaPilar = duo(HeadCircuit);
const IcoTabAtendimento = duo(Headset);
const IcoTabClinica = duo(Stethoscope);
const IcoTabIa = duo(HeadCircuit);
const IcoServidor = duo(HardDrives);
const IcoTokens = duo(Coins);
const IcoApiOficial = duo(WhatsappLogo);

/* ------------------------------------------------------------------ */
/* Mockups customizados das FeatureTabs                                */
/* ------------------------------------------------------------------ */

const MockupAtendimento = () => (
  <div className="glass-dark rounded-3xl border border-primary/20 shadow-premium overflow-hidden p-6 sm:p-7">
    <div className="flex items-center gap-2 mb-5">
      <div className="w-2 h-2 rounded-full bg-red-500/80" />
      <div className="w-2 h-2 rounded-full bg-yellow-500/80" />
      <div className="w-2 h-2 rounded-full bg-green-500/80" />
      <p className="ml-3 text-[10px] font-bold tracking-[0.3em] uppercase text-primary/60">
        Funil de atendimento
      </p>
    </div>
    <div className="grid grid-cols-3 gap-3">
      {[
        { t: "Novo", n: "3", c: ["Ana · agendar", "João · dúvida"] },
        { t: "Atendendo", n: "2", c: ["Marina · retorno"] },
        { t: "Agendado", n: "5", c: ["Carlos · 14h30"] },
      ].map((col) => (
        <div key={col.t} className="rounded-xl bg-white/5 border border-white/10 p-3">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[9px] font-bold uppercase tracking-wider text-primary/70">
              {col.t}
            </span>
            <span className="text-[9px] text-muted-foreground">{col.n}</span>
          </div>
          <div className="space-y-2">
            {col.c.map((card) => (
              <div
                key={card}
                className="rounded-lg bg-primary/10 border border-primary/20 px-2 py-1.5 text-[9px] text-foreground/80 leading-tight"
              >
                {card}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
    <div className="mt-5 flex items-center justify-center gap-2 text-[10px] uppercase tracking-[0.25em] text-primary/70 text-center">
      <MessageCircle className="w-3 h-3 flex-shrink-0" />
      <span>WhatsApp, Instagram e site num painel só</span>
    </div>
  </div>
);

const MockupClinica = () => (
  <div className="glass-dark rounded-3xl border border-primary/20 shadow-premium overflow-hidden p-6 sm:p-7">
    <div className="flex items-center gap-2 mb-5">
      <div className="w-2 h-2 rounded-full bg-red-500/80" />
      <div className="w-2 h-2 rounded-full bg-yellow-500/80" />
      <div className="w-2 h-2 rounded-full bg-green-500/80" />
      <p className="ml-3 text-[10px] font-bold tracking-[0.3em] uppercase text-primary/60">
        Agenda do dia
      </p>
    </div>
    <div className="space-y-2.5">
      {[
        { h: "09:00", p: "Ana Souza", t: "Consulta", on: false },
        { h: "10:30", p: "João Lima", t: "Retorno", on: false },
        { h: "14:30", p: "Carlos Dias", t: "Cardiologia", on: true },
      ].map((s) => (
        <div
          key={s.h}
          className={`flex items-center gap-3 rounded-xl px-3 py-2.5 border ${
            s.on ? "bg-primary/10 border-primary/30" : "bg-white/5 border-white/10"
          }`}
        >
          <span className="text-[11px] font-bold text-primary w-10 flex-shrink-0">{s.h}</span>
          <span className="text-[11px] text-foreground/85 flex-grow">{s.p}</span>
          <span className="text-[9px] uppercase tracking-wider text-muted-foreground">{s.t}</span>
        </div>
      ))}
    </div>
    <div className="mt-4 flex items-center gap-2 rounded-xl bg-green-500/10 border border-green-500/20 px-3 py-2.5">
      <CalendarCheck className="w-4 h-4 text-green-400 flex-shrink-0" />
      <span className="text-[10px] text-foreground/80">
        Confirmação enviada no WhatsApp e respondida
      </span>
      <Check className="w-3.5 h-3.5 text-green-400 ml-auto flex-shrink-0" />
    </div>
  </div>
);

const MockupIA = () => (
  <div className="glass-dark rounded-3xl border border-primary/20 shadow-premium overflow-hidden p-6 sm:p-7">
    <div className="flex items-center gap-2 mb-5">
      <div className="w-2 h-2 rounded-full bg-red-500/80" />
      <div className="w-2 h-2 rounded-full bg-yellow-500/80" />
      <div className="w-2 h-2 rounded-full bg-green-500/80" />
      <p className="ml-3 text-[10px] font-bold tracking-[0.3em] uppercase text-primary/60">
        Agente de IA · WhatsApp oficial
      </p>
    </div>
    <div className="space-y-2.5">
      <div className="max-w-[80%] rounded-2xl rounded-tl-sm bg-white/5 border border-white/10 px-3 py-2 text-[11px] text-foreground/80">
        Oi, queria marcar uma consulta
      </div>
      <div className="max-w-[85%] ml-auto rounded-2xl rounded-tr-sm bg-primary/15 border border-primary/30 px-3 py-2 text-[11px] text-foreground/90">
        Claro! Tenho quinta às 14h30 com o cardiologista. Confirmo pra você?
      </div>
      <div className="max-w-[60%] rounded-2xl rounded-tl-sm bg-white/5 border border-white/10 px-3 py-2 text-[11px] text-foreground/80">
        Pode ser
      </div>
      <div className="max-w-[85%] ml-auto rounded-2xl rounded-tr-sm bg-primary/15 border border-primary/30 px-3 py-2 text-[11px] text-foreground/90">
        Agendado, quinta 14h30. Te lembro um dia antes.
      </div>
    </div>
    <div className="mt-5 flex items-center justify-center gap-2 text-[10px] uppercase tracking-[0.25em] text-primary/70">
      <HeadCircuit className="w-3.5 h-3.5 flex-shrink-0" weight="duotone" />
      <span>Atende e agenda sozinho, 24 horas por dia</span>
    </div>
  </div>
);

/* ------------------------------------------------------------------ */
/* Conteúdo                                                            */
/* ------------------------------------------------------------------ */

export const proposta: PropostaConfig = {
  hero: {
    badge: "PROPOSTA COMERCIAL · BREVIGLIERI E ANIMA",
    titulo: "As suas duas clínicas em",
    tituloDestaque: "um sistema só",
    subtitulo:
      "Breviglieri e Anima na mesma plataforma: gestão, atendimento e CRM no mesmo lugar. Rápido, estável e com um WhatsApp que não cai e não é banido.",
    logoSrc: logo,
    logoAlt: "GrowthHub",
    ctaLabel: "Ver como funciona",
    scrollTargetId: "momento-atual",
  },

  marquee: {
    items: [
      "Prontuário eletrônico",
      "Agenda inteligente",
      "WhatsApp oficial",
      "CRM que funciona",
      "Confirmação automática",
      "Zero banimento",
      "Tudo num sistema só",
      "Agente de IA",
    ],
  },

  momentoAtual: {
    eyebrow: "O CENÁRIO HOJE",
    titulo: "Dois sistemas, e nenhum dos dois te ajuda",
    subtitulo:
      "Hoje a sua operação depende do ProDoctor para a clínica e do InfoChat para o atendimento. Os dois travam, geram retrabalho e ainda custam caro.",
    desafio: {
      titulo: "Como é hoje",
      icone: IcoDesafio,
      items: [
        "O ProDoctor trava, dá bug e fica lento. No dia cheio, o sistema atrapalha em vez de ajudar.",
        "O InfoChat bane o número do WhatsApp e derruba o seu contato com o paciente.",
        "CRM fraco e visual ultrapassado: a equipe perde tempo e o paciente sente.",
        "Dois sistemas separados, duas mensalidades e dados que não conversam.",
      ],
    },
    solucao: {
      titulo: "Como passa a ser",
      icone: IcoSolucao,
      items: [
        "Sistema em nuvem, rápido e estável. Abre na hora e aguenta o movimento do dia.",
        "WhatsApp protegido contra banimento. Com o Agente de IA, sobe para a API oficial da Meta.",
        "CRM visual e fácil, com a cara de 2026. A equipe aprende rápido e atende melhor.",
        "Tudo em um só lugar: uma plataforma, um login, todos os dados juntos.",
      ],
    },
  },

  ecossistema: {
    eyebrow: "OS PILARES",
    titulo: "Tudo o que o ProDoctor e o InfoChat fazem, junto e funcionando",
    subtitulo:
      "Seis frentes reunidas em uma plataforma feita sob medida para as duas clínicas do grupo.",
    pilares: [
      {
        icone: IcoProntuario,
        titulo: "Prontuário eletrônico",
        descricao:
          "Histórico do paciente, anamnese e documentos organizados, seguros e sempre à mão.",
      },
      {
        icone: IcoAgenda,
        titulo: "Agenda inteligente",
        descricao:
          "Agenda por profissional com confirmação e lembrete automáticos no WhatsApp.",
      },
      {
        icone: IcoAtendimento,
        titulo: "Atendimento omnichannel",
        descricao:
          "WhatsApp, Instagram e site no mesmo painel, com vários atendentes sem bagunça.",
      },
      {
        icone: IcoCrm,
        titulo: "CRM visual",
        descricao:
          "Funil em quadro, etiquetas e respostas rápidas para que nenhum paciente esfrie.",
      },
      {
        icone: IcoSemBanimento,
        titulo: "WhatsApp sem banimento",
        descricao:
          "API oficial e boas práticas para o seu número parar de cair e ser bloqueado.",
      },
      {
        icone: IcoIaPilar,
        titulo: "Agente de IA",
        descricao:
          "Atende, qualifica e agenda sozinho, 24 horas por dia (no pacote com IA).",
      },
    ],
  },

  featureTabs: {
    tabs: [
      {
        label: "ATENDIMENTO E CRM",
        icone: IcoTabAtendimento,
        titulo: "O atendimento que o InfoChat não entregou",
        descricao:
          "Todas as conversas em um painel só, com a equipe inteira no mesmo número sem se atropelar. O paciente é respondido rápido e nada se perde no caminho.",
        itens: [
          "WhatsApp, Instagram e site juntos",
          "Vários atendentes no mesmo número",
          "Funil de vendas em quadro visual",
          "Etiquetas, notas e respostas rápidas",
        ],
        mockup: <MockupAtendimento />,
      },
      {
        label: "GESTÃO DA CLÍNICA",
        icone: IcoTabClinica,
        titulo: "A clínica inteira, sem travar",
        descricao:
          "Prontuário, agenda e receituário num sistema em nuvem que abre na hora. A confirmação de consulta sai sozinha no WhatsApp e reduz a falta dos pacientes.",
        itens: [
          "Prontuário eletrônico personalizável",
          "Agenda por profissional",
          "Receituário e documentos digitais",
          "Confirmação e lembrete automáticos",
        ],
        mockup: <MockupClinica />,
      },
      {
        label: "AGENTE DE IA",
        icone: IcoTabIa,
        titulo: "Um atendente que nunca dorme",
        descricao:
          "No pacote com IA, um agente atende, tira dúvidas, qualifica e agenda sozinho a qualquer hora. É ele que destrava o WhatsApp com API oficial.",
        itens: [
          "Atende e agenda 24 horas por dia",
          "Qualifica e organiza o paciente",
          "Responde as dúvidas mais comuns",
          "Roda no WhatsApp API oficial",
        ],
        mockup: <MockupIA />,
      },
    ],
  },

  jornada: {
    eyebrow: "IMPLEMENTAÇÃO EM 2 MESES",
    titulo: "Do caos de hoje ao novo sistema em",
    tituloDestaque: "8 semanas",
    subtitulo:
      "Um plano claro, sem sumiço e sem surpresa. Você acompanha cada entrega de perto.",
    etapas: [
      {
        numero: 1,
        titulo: "Imersão e setup",
        descricao:
          "Semanas 1 e 2. Entendemos a sua rotina, preparamos o servidor, migramos os seus dados e desenhamos a interface.",
      },
      {
        numero: 2,
        titulo: "Atendimento e CRM",
        descricao:
          "Semanas 3 e 4. Subimos o WhatsApp, o painel de atendimento e o funil de vendas. A dor mais urgente sai primeiro.",
      },
      {
        numero: 3,
        titulo: "Gestão da clínica",
        descricao:
          "Semanas 5 e 6. Prontuário, agenda, receituário e as confirmações automáticas entram no ar.",
      },
      {
        numero: 4,
        titulo: "IA, testes e go live",
        descricao:
          "Semanas 7 e 8. Ativamos o agente de IA (se contratado), treinamos a equipe e colocamos tudo para rodar.",
      },
    ],
  },

  investimento: {
    eyebrow: "O CUSTO DE CONTINUAR ASSIM",
    titulo: "Dois sistemas caros, ou um que funciona",
    subtitulo:
      "Seguir no ProDoctor e no InfoChat tem um custo que não aparece na fatura: tempo perdido, paciente que esfria e número banido.",
    cenarioAtual: {
      titulo: "Cenário Atual",
      label: "HOJE",
      destaque: "2 sistemas",
      subtitulo: "ProDoctor + InfoChat",
      items: [
        "Travas, bugs e lentidão no dia a dia",
        "Número de WhatsApp banido sem aviso",
        "CRM fraco e visual ultrapassado",
        "Duas mensalidades e dois suportes",
        "Dados espalhados e relatório no braço",
      ],
    },
    cenarioFuturo: {
      titulo: "Com o novo sistema",
      label: "DEPOIS",
      destaque: "1 plataforma",
      subtitulo: "Breviglieri e Anima no mesmo sistema",
      items: [
        "Sistema em nuvem rápido e estável",
        "WhatsApp protegido contra banimento",
        "CRM visual que a equipe usa de verdade",
        "Um sistema, um suporte, um login",
        "Tudo integrado e relatórios na hora",
      ],
    },
  },

  precos: {
    eyebrow: "INVESTIMENTO",
    titulo: "Escolha o seu pacote",
    nota:
      "Formas de pagamento: R$ 500 de desconto à vista. No cartão, até 3x sem juros, ou 12x com os juros da operadora.",
    planos: [
      {
        id: "sem-ia",
        eyebrow: "IMPLEMENTAÇÃO",
        nome: "Sistema Unificado",
        descricao:
          "Toda a gestão da clínica e o atendimento numa só plataforma, entregue em 2 meses.",
        valor: "R$ 7.000",
        periodo: "pagamento único",
        rotuloValor: "sem Agente de IA",
        itens: [
          "Gestão da clínica: prontuário, agenda e receituário",
          "Atendimento omnichannel e CRM visual",
          "WhatsApp otimizado contra banimento",
          "Migração dos seus dados atuais",
          "Treinamento da equipe",
          "Entrega em até 2 meses",
        ],
        observacao:
          "Dá para começar sem IA e adicionar o Agente de IA depois, quando você quiser.",
      },
      {
        id: "com-ia",
        eyebrow: "IMPLEMENTAÇÃO + IA",
        nome: "Sistema Unificado + IA",
        descricao:
          "Tudo do Sistema Unificado, mais o Agente de IA com WhatsApp API oficial da Meta.",
        valor: "R$ 8.500",
        periodo: "pagamento único",
        rotuloValor: "com Agente de IA (recomendado)",
        destaque: true,
        itens: [
          "Tudo do Sistema Unificado",
          "Agente de IA que atende 24 horas por dia",
          "Qualifica e agenda pacientes sozinho",
          "WhatsApp API oficial da Meta",
          "Número protegido contra banimento",
          "Entrega em até 2 meses",
        ],
        observacao:
          "O Agente de IA, vendido à parte com implementação, custa de R$ 3.000 a R$ 5.000. Neste pacote, ele entra por apenas R$ 1.500.",
      },
    ],
  },

  continuidade: {
    eyebrow: "DEPOIS DA ENTREGA",
    titulo: "Continuidade sem",
    tituloDestaque: "letra miúda",
    subtitulo:
      "Você escolhe como manter o sistema rodando: com uma mensalidade fixa, ou pagando só quando precisar de algo.",
    planos: [
      {
        id: "mensal",
        eyebrow: "RECOMENDADO",
        nome: "Plano Mensal",
        valor: "R$ 600",
        periodo: "/mês",
        descricao:
          "Tudo o que mantém o sistema no ar e evoluindo, com o nosso time junto de você.",
        destaque: true,
        itens: [
          "Suporte do nosso time 24/7",
          "Monitoramento e verificação de erros",
          "Plataformas de otimização incluídas",
          "Correções e melhorias dentro do escopo",
          "Atualização dos serviços do sistema",
        ],
      },
      {
        id: "demanda",
        eyebrow: "ALTERNATIVA",
        nome: "Sob demanda",
        valor: "Sob orçamento",
        periodo: "por pedido",
        descricao:
          "Sem mensalidade. Cada correção ou função nova é orçada na hora, caso a caso.",
        inferior: true,
        itens: [
          "Cada ajuste é orçado à parte",
          "Sem suporte contínuo do time",
          "Sem monitoramento de erros",
          "Sem prioridade na fila",
          "Custo total imprevisível",
        ],
        nota:
          "Na prática, somando os pedidos avulsos, costuma sair mais caro e mais lento que a mensalidade.",
      },
    ],
    custosTitulo: "Custos que vão direto para os fornecedores",
    custosNota:
      "Estes valores não são da GrowthHub. São pagos direto a quem fornece o serviço, com total transparência e sem margem nossa.",
    custos: [
      {
        icone: IcoServidor,
        titulo: "Servidor",
        valor: "R$ 50 a R$ 100/mês",
        descricao: "Hospedagem em nuvem onde o sistema fica no ar.",
      },
      {
        icone: IcoTokens,
        titulo: "Tokens de IA",
        valor: "variável",
        descricao: "Custo de uso do agente, conforme o volume de conversas.",
      },
      {
        icone: IcoApiOficial,
        titulo: "WhatsApp API oficial",
        valor: "variável",
        descricao: "Cobrado por conversa pela Meta, só no pacote com IA.",
      },
    ],
  },

  cta: {
    eyebrow: "PRÓXIMO PASSO",
    titulo: "Pronto para parar de",
    tituloDestaque: "apagar incêndio?",
    descricao:
      "Vamos tirar as suas clínicas do ProDoctor e do InfoChat e colocar tudo em um sistema que funciona de verdade. Chama no WhatsApp que a gente começa.",
    botaoLabel: "Falar no WhatsApp",
    botaoLink:
      "https://wa.me/5521991083870?text=Quero%20avan%C3%A7ar%20com%20a%20proposta%20do%20sistema%20unificado",
  },
};
