// Get Moovin
export async function getMoovin() {
    try {
        const response = await fetch('http://localhost:3000/moovin');
        if (!response.ok) {
            const errorText = await response.text();
            console.error('Error en la respuesta:', errorText);
            throw new Error(`Error: ${response.status} - ${errorText}`);
        }
        const data = await response.json();
        return data;  // Devuelve directamente el array de moovin
    } catch (error) {
        console.error('Error al obtener Moovin:', error);
        return [];
    }
  }

// Get Sedes
export async function getSedes() {
    try {
        const response = await fetch('http://localhost:3000/sedes');
        if (!response.ok) {
            const errorText = await response.text();
            console.error('Error en la respuesta:', errorText);
            throw new Error(`Error: ${response.status} - ${errorText}`);
        }
        const data = await response.json();
        return data;  // Devuelve directamente el array de sedes
    } catch (error) {
        console.error('Error al obtener Sedes:', error);
        return [];
    }
  }
  
  // Get Distribuidoras
  export async function getDistribuidoras() {
    try {
        const response = await fetch('http://localhost:3000/distribuidoras');
        if (!response.ok) {
            const errorText = await response.text();
            console.error('Error en la respuesta:', errorText);
            throw new Error(`Error: ${response.status} - ${errorText}`);
        }
        const data = await response.json();
        return data;  // Devuelve directamente el array de distribuidoras
    } catch (error) {
        console.error('Error al obtener Distribuidoras:', error);
        return [];
    }
  }




// Get Puntos de Venta
export async function getPuntosVenta() {
    try {
        const response = await fetch('http://localhost:3000/puntos_venta');
        if (!response.ok) {
            const errorText = await response.text();
            console.error('Error en la respuesta:', errorText);
            throw new Error(`Error: ${response.status} - ${errorText}`);
        }
        const data = await response.json();
        return data;  // Devuelve directamente el array de puntos de venta
    } catch (error) {
        console.error('Error al obtener Puntos de Venta:', error);
        return [];
    }
  }

// Get Nodes
export async function getNodes() {
    try {
        const response = await fetch('http://localhost:3000/nodes');
        if (!response.ok) {
            const errorText = await response.text();
            console.error('Error en la respuesta:', errorText);
            throw new Error(`Error: ${response.status} - ${errorText}`);
        }
        const data = await response.json();
        return data;  // Devuelve directamente el array de nodes
    } catch (error) {
        console.error('Error al obtener Nodes:', error);
        return [];
    }
}
