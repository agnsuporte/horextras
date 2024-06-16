import { PrismaClient } from "@prisma/client";

/**
 * 
Declaração global para a variável `prisma`. 
Isso é necessário porque TypeScript precisa saber que `prisma` pode ser uma variável global. 
A declaração `var prisma: PrismaClient | undefined;` diz ao TypeScript que `prisma` é uma variável 
global que pode ser do tipo `PrismaClient` ou `undefined`. 

***/

declare global {
  var prisma: PrismaClient | undefined;
}

/**
 * 
 * Aqui, a variável `prisma` é inicializada. Ela tenta usar `globalThis.prisma` se já estiver 
 * definida (o que pode acontecer em ambientes de desenvolvimento onde o código é recarregado 
 * frequentemente). Caso contrário, ela cria uma nova instância de `PrismaClient`.

   - `globalThis` é uma referência ao objeto global que funciona tanto no navegador quanto no Node.js (`window` no navegador, `global` no Node.js).
   - `globalThis.prisma` tenta acessar a instância global de `prisma`.
   - `|| new PrismaClient()` cria uma nova instância de `PrismaClient` se `globalThis.prisma` for `undefined`.
 */
export const prisma = globalThis.prisma || new PrismaClient();

/**
 * Esta linha verifica se o ambiente não é de produção (`process.env.NODE_ENV !== "production"`).
 * Se não for produção (ou seja, é desenvolvimento ou teste), ela define `globalThis.prisma` para a
 * instância `prisma` atual.
 */
if (process.env.NODE_ENV !== "production") globalThis.prisma = prisma;

/**
 * ### Resumo

- Importa `PrismaClient`.
- Declara a variável global `prisma` para evitar erros de tipo.
- Inicializa `prisma` usando uma instância global existente ou criando uma nova.
- Armazena `prisma` no objeto global em ambientes de desenvolvimento para evitar múltiplas 
  instâncias durante o recarregamento do código.

Essa abordagem ajuda a gerenciar a conexão com o banco de dados de maneira eficiente durante o 
desenvolvimento e previne a criação de múltiplas instâncias do cliente Prisma.

 */
