import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div
      className="h-screen overflow-hidden flex items-center justify-center"
      style={{ background: "#edf2f7" }}
    >
      <main>
        <div className="hero bg-gray-100 py-16">
          <div className="container px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto">
            <div className="hero-wrapper grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="hero-text col-span-6">
                <h1 className="font-bold text-4xl md:text-5xl max-w-xl text-gray-900 leading-tight">
                  Não dê ouvidos ao que eles dizem, vá ver!
                </h1>
                <hr className="w-12 h-1 bg-orange-500 rounded-full mt-8" />
                <p className="text-gray-800 text-base leading-relaxed mt-8 font-semibold">
                  Seu melhor companheiro do dia a dia. Todas as informações que
                  você precisa do seu trabalho.
                </p>
                <div className="get-app flex space-x-5 mt-10 justify-center md:justify-start">
                  <Link
                    href="/auth/register"
                    className="apple bg-white shadow-md px-3 py-2 rounded-lg flex items-center space-x-4"
                  >
                    <div className="logo">{/* SVG for Apple Store */}</div>
                    <div className="text">
                      <p
                        className="text-xs text-gray-600"
                        style={{ fontSize: "0.5rem" }}
                      >
                        Não possuo conta
                      </p>
                      <p className="text-xs font-semibold text-gray-900">
                        Faça sei registro aqui!
                      </p>
                    </div>
                  </Link>
                  <Link
                    href="/auth/login"
                    className="google bg-white shadow-md px-3 py-2 rounded-lg flex items-center space-x-4"
                  >
                    <div className="text">
                      <p
                        className="text-xs text-gray-600"
                        style={{ fontSize: "0.5rem" }}
                      >
                        Já sou usuário
                      </p>
                      <p className="text-xs font-semibold text-gray-900">
                        Iniciar sessão!
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="hero-image col-span-6">
                {/* SVG Image */}
                <Image src="/money.webp" alt="tempo" width="600" height="500" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
