import {
  withAuth,
  NextAuthMiddlewareOptions,
  NextRequestWithAuth,
} from "next-auth/middleware";

const middleware = (req: NextRequestWithAuth) => {
  // console.log("[MIDDLEWARE_AUTH_TOKEN]: ", req.nextauth.token);
};

const callbackOptions: NextAuthMiddlewareOptions = {};

export default withAuth(middleware, callbackOptions);

/**
 *  Explicação:
    - :path* é um parâmetro dinâmico que captura todos os caminhos subsequentes da rota /dashboard.
    - Dessa forma, todas as rotas que começam com /dashboard serão protegidas pelo middleware de autenticação.
 */

export const config = {
  matcher: ["/dashboard", "/dashboard/sheet"],
};
