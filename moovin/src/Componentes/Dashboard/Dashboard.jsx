import React, { useEffect, useState } from "react";
import { BarChart, Bar, PieChart, Pie, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, CartesianGrid } from "recharts";
import styled from "styled-components";
import { getSedes, getDistribuidoras, getPuntosVenta } from "../Services/Get.js";
import "../Dashboard/Dashboard.css"

const DashboardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px;
  background:  #043048 ;
`;

const ChartContainer = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const Graficas = () => {
  const [empleadosPorPuntoVenta, setEmpleadosPorPuntoVenta] = useState([]);
  const [incidentesPorDistribuidora, setIncidentesPorDistribuidora] = useState([]);
  const [sedeDistribuidoras, setSedeDistribuidoras] = useState([]);
  const [paquetesPorDistribuidora, setPaquetesPorDistribuidora] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const puntosVentaData = await getPuntosVenta();
        const distribuidorasData = await getDistribuidoras();

        console.log("Puntos de Venta Data:", puntosVentaData); 
        console.log("Distribuidoras Data:", distribuidorasData);

        // Procesar los datos de puntos de venta
        const puntosVenta = puntosVentaData.map((puntoVenta) => ({
          name: puntoVenta.nombre,
          empleados: puntoVenta.empleados, 
        })).sort((a, b) => b.empleados - a.empleados);
        setEmpleadosPorPuntoVenta(puntosVenta);

        // Procesar los datos de distribuidoras
        const incidentes = distribuidorasData.map((dist) => ({
          name: dist.nombre,
          incidentes: dist.incidentes, 
        })).sort((a, b) => a.incidentes - b.incidentes);
        setIncidentesPorDistribuidora(incidentes);

        const sedeDist = distribuidorasData.map((dist) => ({
          name: dist.sede,
          distribuidoras: 1, 
        })).reduce((acc, curr) => {
          const found = acc.find(item => item.name === curr.name);
          if (found) {
            found.distribuidoras += 1;
          } else {
            acc.push(curr);
          }
          return acc;
        }, []).sort((a, b) => b.distribuidoras - a.distribuidoras);
        setSedeDistribuidoras(sedeDist);

        const paquetes = distribuidorasData.map((dist) => ({
          name: dist.nombre,
          paquetes: dist.paquetes_entregados, // Accede directamente al campo paquetes_entregados
        })).sort((a, b) => b.paquetes - a.paquetes);
        setPaquetesPorDistribuidora(paquetes);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <DashboardContainer>
      <ChartContainer>
        <h3>Empleados por Punto de Venta</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={empleadosPorPuntoVenta}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="empleados" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </ChartContainer>

      <ChartContainer>
        <h3>Incidentes por Distribuidora</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={incidentesPorDistribuidora}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="incidentes" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </ChartContainer>

      <ChartContainer>
        <h3>Sede con más Distribuidoras</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie data={sedeDistribuidoras} dataKey="distribuidoras" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="#ff7300" label>
              {sedeDistribuidoras.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={index === 0 ? "#ff7300" : "#d0ed57"} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </ChartContainer>

      <ChartContainer>
        <h3>Paquetes Entregados por Distribuidora</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={paquetesPorDistribuidora}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="paquetes" fill="#ffc658" />
          </BarChart>
        </ResponsiveContainer>
      </ChartContainer>
    </DashboardContainer>
  );
};

export default Graficas;

