# arquitetura2024
exercicios de arquitetura
1: Dificil de escalar, Baixo manutenibilidade, impacto de falhas.
2: Permite projetos baseados em níveis crescentes de abstração
   Permite particionar problemas complexos em uma sequência de passos 
   incrementais.
   Mudanças em uma camada afetam, no máximo, as duas adjacentes.
   Permite que diferentes implementações da mesma camada possam  ser 
   usadas desde que mantenham a mesma interface com as camadas 
   adjacentes
3: Útil para aplicações de processamento de informação que interagem pouco 
com usuários
 ➔ Rápida prototipação
 ➔ Apóia reúso de transformações (filtros)
 ➔ É fácil adicionar, recombinar, ou trocar, novas transformações (flexibilidade)
 ➔ É relativamente simples implementar como sistema concorrente (vários filtros 
em paralelo) ou seqüencial
 ➔ Eficiência em processamento

