import type { KeyboardEvent } from "react";
import { Check, X } from "lucide-react";
import { motion } from "framer-motion";
import type { ContinuidadeData, ContinuidadePlano } from "../types";

interface Props {
  data: ContinuidadeData;
  selectedId?: string;
  onSelect?: (id: string) => void;
}

interface CardProps {
  plano: ContinuidadePlano;
  delay?: number;
  selected?: boolean;
  onSelect?: () => void;
}

const PlanoCard = ({ plano, delay = 0, selected = false, onSelect }: CardProps) => {
  const isDestaque = !!plano.destaque;
  const isInferior = !!plano.inferior;
  const clickable = !!onSelect;
  const handleKey = (e: KeyboardEvent) => {
    if (clickable && (e.key === "Enter" || e.key === " ")) {
      e.preventDefault();
      onSelect?.();
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay }}
      className="h-full"
    >
      <div
        role={clickable ? "button" : undefined}
        tabIndex={clickable ? 0 : undefined}
        onClick={onSelect}
        onKeyDown={clickable ? handleKey : undefined}
        aria-pressed={clickable ? selected : undefined}
        className={`group w-full h-full text-left p-8 sm:p-10 rounded-[2.5rem] relative overflow-hidden flex flex-col transition-all duration-300 ${
          isDestaque ? "glass shadow-premium" : "glass-dark"
        } ${
          selected
            ? "border-2 border-primary ring-2 ring-primary/40"
            : "border border-white/5 hover:border-primary/30"
        } ${isInferior && !selected ? "opacity-60 hover:opacity-100" : ""} ${
          clickable ? "cursor-pointer" : "cursor-default"
        }`}
      >
        {isDestaque && (
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full -mr-32 -mt-32" />
        )}

        {clickable && (
          <div
            className={`absolute top-6 right-6 z-10 flex items-center gap-1.5 rounded-full px-3 py-1 text-[9px] font-bold uppercase tracking-wider transition-all ${
              selected
                ? "bg-primary text-slate-900"
                : "bg-white/5 text-muted-foreground border border-white/10 group-hover:border-primary/40"
            }`}
          >
            {selected && <Check className="w-3 h-3" />}
            {selected ? "Selecionado" : "Selecionar"}
          </div>
        )}

        <div className="relative flex flex-col flex-grow">
          <div
            className={`text-[10px] font-bold tracking-[0.3em] uppercase mb-6 ${
              isDestaque ? "text-primary" : "text-muted-foreground"
            }`}
          >
            {plano.eyebrow}
          </div>
          <h3 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-3 tracking-tight">
            {plano.nome}
          </h3>
          <p className="text-sm text-muted-foreground mb-8 font-light leading-relaxed">
            {plano.descricao}
          </p>
          <div className="mb-8">
            <div
              className={`font-heading font-bold tracking-tighter ${
                isInferior
                  ? "text-3xl sm:text-4xl text-muted-foreground"
                  : "text-4xl sm:text-5xl text-foreground"
              }`}
            >
              {plano.valor}
              {plano.periodo && (
                <span className="text-base font-normal text-muted-foreground ml-1">
                  {plano.periodo}
                </span>
              )}
            </div>
          </div>
          <div className={`h-px w-full mb-8 ${isDestaque ? "bg-primary/10" : "bg-white/10"}`} />
          <ul className="space-y-4">
            {plano.itens.map((item, i) => (
              <li
                key={i}
                className={`flex items-center gap-4 text-sm font-light ${
                  isInferior ? "text-muted-foreground/70" : "text-foreground/70"
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-full border flex items-center justify-center flex-shrink-0 ${
                    isInferior
                      ? "border-destructive/30"
                      : `border-primary/20 ${isDestaque ? "bg-primary/10" : ""}`
                  }`}
                >
                  {isInferior ? (
                    <X className="w-3 h-3 text-destructive/70" />
                  ) : (
                    <Check className="w-3 h-3 text-primary" />
                  )}
                </div>
                {item}
              </li>
            ))}
          </ul>
          {plano.nota && (
            <p className="mt-6 text-xs italic text-muted-foreground/70 leading-relaxed">
              {plano.nota}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export const ContinuidadeSection = ({ data, selectedId, onSelect }: Props) => {
  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 max-w-6xl mx-auto overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16 sm:mb-20"
      >
        {data.eyebrow && (
          <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-primary mb-4 opacity-70">
            {data.eyebrow}
          </p>
        )}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-foreground mb-6 tracking-tight">
          {data.titulo}
          {data.tituloDestaque && (
            <>
              {" "}
              <span className="text-gradient-primary">{data.tituloDestaque}</span>
            </>
          )}
        </h2>
        {data.subtitulo && (
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
            {data.subtitulo}
          </p>
        )}
        {onSelect && (
          <p className="text-sm text-muted-foreground font-light mt-4">
            Clique no plano que você quer.
          </p>
        )}
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
        {data.planos.map((plano, i) => (
          <PlanoCard
            key={plano.id ?? i}
            plano={plano}
            delay={i * 0.15}
            selected={!!selectedId && plano.id === selectedId}
            onSelect={onSelect && plano.id ? () => onSelect(plano.id as string) : undefined}
          />
        ))}
      </div>

      {data.custos.length > 0 && (
        <div className="mt-16 sm:mt-20">
          {data.custosTitulo && (
            <h3 className="text-center text-lg sm:text-xl font-heading font-bold text-foreground mb-3 tracking-tight">
              {data.custosTitulo}
            </h3>
          )}
          {data.custosNota && (
            <p className="text-center text-sm text-muted-foreground font-light max-w-2xl mx-auto mb-10 leading-relaxed">
              {data.custosNota}
            </p>
          )}
          <div className="grid sm:grid-cols-3 gap-6">
            {data.custos.map((custo, i) => {
              const Icon = custo.icone;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="glass-dark rounded-[1.5rem] p-6 border border-white/5"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 border border-primary/20">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex items-baseline justify-between gap-2 mb-2">
                    <h4 className="text-base font-heading font-bold text-foreground tracking-tight">
                      {custo.titulo}
                    </h4>
                    <span className="text-xs font-bold text-primary whitespace-nowrap">
                      {custo.valor}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground font-light leading-relaxed">
                    {custo.descricao}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
};
