// app/indicadores/page.js
"use client"; // Necesario para usar hooks y APIs del navegador

import { useEffect } from 'react';

// Datos de ejemplo (o puedes cargarlos desde una API)
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

// Función para determinar el color según el porcentaje
const getColorClass = (porcentaje) => {
  if (porcentaje >= 80) return "color-green";
  if (porcentaje >= 50) return "color-yellow";
  return "color-red";
};

export default function TablaIndicadores() {
  // Código del cliente (solo se ejecuta en el navegador)
  useEffect(() => {
    const tabla = document.getElementById("tabla-indicadores");
    
    indicadores.forEach(indicador => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${indicador.clave}</td>
        <td>${indicador.indicador}</td>
        <td>${indicador.logroT1}</td>
        <td>${indicador.proyT2}</td>
        <td>${indicador.logroT2}</td>
        <td class="porcentaje ${getColorClass(indicador.porcentaje)}">
          ${indicador.porcentaje}%
        </td>
      `;
      tabla.appendChild(row);
    });
  }, []);

  return (
    <div className="container">
      <h1>Indicadores</h1>
      <table className="tabla-indicadores">
        <thead>
          <tr>
            <th>Clave</th>
            <th>Indicador</th>
            <th>Logro T1</th>
            <th>Proy T2</th>
            <th>Logro T2</th>
            <th>% Avance</th>
          </tr>
        </thead>
        <tbody id="tabla-indicadores"></tbody>
      </table>
    </div>
  );
}