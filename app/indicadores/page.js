// app/indicadores/page.js
"use client";

const indicadores = [
  {
    clave: "IND-001",
    indicador: "Cursos extracurriculares",
    logroT1: 10,
    proyT2: 15,
    logroT2: 12,
    porcentaje: 80
  }
];

const getColorClass = (porcentaje) => {
  if (porcentaje >= 80) return "color-green";
  if (porcentaje >= 50) return "color-yellow";
  return "color-red";
};

export default function TablaIndicadores() {
  return (
    <div className="container">
      <header className="header-unam">
        <h2>Investigación en Ciencias y Desarrollo Tecnológico</h2>
        <h3>Indicadores Blancos</h3>
      </header>

      <table className="tabla-indicadores">
        <thead>
          <tr>
          <th>Clave</th>
    <th>Indicador</th>
    <th>Logro T1</th>
    <th>Proy T2</th>
    <th>Logro T2</th>
    <th>% Avance</th>
    <th>Causa</th>
    <th>Plan de acción</th>
          </tr>
        </thead>
        <tbody>
          {/* Aquí tus filas, ya sea generadas con .map o manualmente */}
          <tr>
            <td>IND-001</td>
            <td>Cursos extracurriculares</td>
            <td>10</td>
            <td>15</td>
            <td>12</td>
            <td className="color-green">80%</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
