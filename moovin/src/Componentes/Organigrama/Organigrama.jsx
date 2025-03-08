import React, { useEffect, useRef, useState } from 'react';
import OrgChart from '@balkangraph/orgchart.js';
import { getNodes } from "../Services/Get.js";  // Asegúrate de que getNodes esté importado correctamente

const OrganigramaMoovin = () => {
    const chartRef = useRef(null);
    const [nodes, setNodes] = useState([]);

    // Cargar datos al inicio
    useEffect(() => {
        const fetchData = async () => {
            try {
                const nodesData = await getNodes();  // Obtienes los nodos desde tu API o db.json

                // Formatear los nodos para adaptarlos al formato que OrgChart espera
                const formattedNodes = nodesData.map(item => ({
                    id: item.id,
                    pid: item.parent || null,  // Usar 'parent' para la relación jerárquica
                    name: item.nombre,         // Usar 'nombre' como nombre del nodo
                    title: item.type,          // Usar 'type' para difereciar los tipos de nodos
                    img: item.img || '',       //Dejar la imagen de útimo
                }));

                setNodes(formattedNodes);
            } catch (error) {
                console.error('Error al obtener datos:', error);
            }
        };

        fetchData();
    }, []);

    // Renderizar organigrama cuando haya datos
    useEffect(() => {
        if (chartRef.current && nodes.length > 0) {
            const chart = new OrgChart(chartRef.current, {
                nodes,
                nodeBinding: {
                    field_0: 'name',
                    field_1: 'title',
                    img_0: 'img',
                },
                menu: {
                    add: { text: 'Agregar' },
                    edit: { text: 'Editar' },
                    remove: { text: 'Eliminar' },
                }
            });

            // Editar nodo
            chart.on('edit', async (sender, args) => {
                const newName = prompt('Ingrese el nuevo nombre:', args.node.name);
                if (newName) {
                    const updatedNode = { ...args.node, name: newName };
                    setNodes(prevNodes => prevNodes.map(node => node.id === args.node.id ? updatedNode : node));

                }
            });

            // Eliminar nodo
            chart.on('remove', async (sender, args) => {
                setNodes(prevNodes => prevNodes.filter(node => node.id !== args.node.id));

            });
        }
    }, [nodes]);

    return <div ref={chartRef} style={{ width: '100%', height: '600px' }}></div>;
};

export default OrganigramaMoovin;





