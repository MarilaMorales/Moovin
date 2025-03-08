// Update Moovin
export async function updateMoovin(id, moovin) {
    try {
      const response = await fetch(`http://localhost:3000/moovin/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(moovin),
      });
  
      if (!response.ok) {
        throw new Error(`Error al actualizar Moovin: ${response.statusText}`);
      }
  
      const data = await response.json();
      console.log('Se actualizó correctamente Moovin.');
      return data;
    } catch (error) {
      console.error('Error al actualizar Moovin:', error);
      return null;
    }
  }


// Update Administradores
export async function updateAdministrador(id, administrador) {
    try {
      const response = await fetch(`http://localhost:3000/administradores/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(administrador),
      });
  
      if (!response.ok) {
        throw new Error(`Error al actualizar Administrador: ${response.statusText}`);
      }
  
      const data = await response.json();
      console.log('Se actualizó correctamente el Administrador.');
      return data;
    } catch (error) {
      console.error('Error al actualizar Administrador:', error);
      return null;
    }
  }
  
  // Update Sedes
  export async function updateSede(id, sede) {
    try {
      const response = await fetch(`http://localhost:3000/sedes/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(sede),
      });
  
      if (!response.ok) {
        throw new Error(`Error al actualizar Sede: ${response.statusText}`);
      }
  
      const data = await response.json();
      console.log('Se actualizó correctamente la Sede.');
      return data;
    } catch (error) {
      console.error('Error al actualizar Sede:', error);
      return null;
    }
  }
  
  // Update Puntos de Venta
  export async function updatePuntoVenta(id, puntoVenta) {
    try {
      const response = await fetch(`http://localhost:3000/puntos_venta/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(puntoVenta),
      });
  
      if (!response.ok) {
        throw new Error(`Error al actualizar Punto de Venta: ${response.statusText}`);
      }
  
      const data = await response.json();
      console.log('Se actualizó correctamente el Punto de Venta.');
      return data;
    } catch (error) {
      console.error('Error al actualizar Punto de Venta:', error);
      return null;
    }
  }
  
  // Update Distribuidoras
  export async function updateDistribuidora(id, distribuidora) {
    try {
      const response = await fetch(`http://localhost:3000/distribuidoras/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(distribuidora),
      });
  
      if (!response.ok) {
        throw new Error(`Error al actualizar Distribuidora: ${response.statusText}`);
      }
  
      const data = await response.json();
      console.log('Se actualizó correctamente la Distribuidora.');
      return data;
    } catch (error) {
      console.error('Error al actualizar Distribuidora:', error);
      return null;
    }
  }