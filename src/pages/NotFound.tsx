import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

export default function NotFound() {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: Route not found:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-muted px-6 text-center">
      <div>
        <h1 className="mb-4 text-5xl font-bold">404</h1>

        <p className="mb-6 text-xl text-muted-foreground">
          Página não encontrada
        </p>

        <p className="mb-8 text-sm text-muted-foreground">
          A URL <span className="font-medium">{location.pathname}</span> não existe.
        </p>

        <Link
          to="/"
          className="text-primary underline hover:text-primary/90 focus:outline-none focus:ring-2 focus:ring-primary"
        >
          Voltar para Home
        </Link>
      </div>
    </main>
  );
}
