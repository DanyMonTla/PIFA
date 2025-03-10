"use client";
  // app/page.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Bienvenido a PIFA</h1>
      <p>Este es un ejemplo de cómo aplicar estilos.</p>
      
      {/* Botón para ir a la página de indicadores */}
      <Link href="/indicadores">
        <button>Ir a Indicadores</button>
      </Link>
    </div>
  );
}
