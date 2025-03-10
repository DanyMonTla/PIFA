// components/TablaIndicadores.js

import React from 'react';
import styles from '@/styles/tablaindicadores.module.css';

// app/indicadores/page.js
export default function Indicadores() {
    // ... tus datos
    
    return (
      <div className="container">
        <table className="tabla-indicadores">
          <thead>
            <tr>
              <th>Indicador</th>
              <th>Logro T1</th>
              <th>Proyección T2</th>
              <th>% Avance</th>
            </tr>
          </thead>
          <tbody>
            {data.indicadores.map((indicador, index) => (
              <tr key={index}>
                <td className="destacado">{indicador.descripcion}</td>
                <td>{indicador.logroT1}</td>
                <td>{indicador.proyT2 || '-'}</td>
                <td className={indicador.porcentajeColor}>
                  {indicador.porcentaje}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }