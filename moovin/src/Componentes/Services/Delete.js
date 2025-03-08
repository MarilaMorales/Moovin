// Delete Moovin
export async function deleteMoovin(id) {
    try {
      const response = await fetch(`http://localhost:3000/moovin/${id}`, {
        method: 'DELETE',
      });
  
      if (!response.ok) {
        throw new Error(`Error al eliminar Moovin: ${response.statusText}`);
      }
  
      console.log('Se eliminó correctamente Moovin.');
    } catch (error) {
      console.error('Error al eliminar Moovin:', error);
    }
  }




// Delete Administradores
export async function deleteAdministrador(id) {
    try {
      const response = await fetch(`http://localhost:3000/administradores/${id}`, {
        method: 'DELETE',
      });
  
      if (!response.ok) {
        throw new Error(`Error al eliminar Administrador: ${response.statusText}`);
      }
  
      console.log('Se eliminó correctamente el Administrador.');
    } catch (error) {
      console.error('Error al eliminar Administrador:', error);
    }
  }
  
  // Delete Sedes
  export async function deleteSede(id) {
    try {
      const response = await fetch(`http://localhost:3000/sedes/${id}`, {
        method: 'DELETE',
      });
  
      if (!response.ok) {
        throw new Error(`Error al eliminar Sede: ${response.statusText}`);
      }
  
      console.log('Se eliminó correctamente la Sede.');
    } catch (error) {
      console.error('Error al eliminar Sede:', error);
    }
  }
  
  // Delete Puntos de Venta
  export async function deletePuntoVenta(id) {
    try {
      const response = await fetch(`http://localhost:3000/puntos_venta/${id}`, {
        method: 'DELETE',
      });
  
      if (!response.ok) {
        throw new Error(`Error al eliminar Punto de Venta: ${response.statusText}`);
      }
  
      console.log('Se eliminó correctamente el Punto de Venta.');
    } catch (error) {
      console.error('Error al eliminar Punto de Venta:', error);
    }
  }
  
  // Delete Distribuidoras
  export async function deleteDistribuidora(id) {
    try {
      const response = await fetch(`http://localhost:3000/distribuidoras/${id}`, {
        method: 'DELETE',
      });
  
      if (!response.ok) {
        throw new Error(`Error al eliminar Distribuidora: ${response.statusText}`);
      }
  
      console.log('Se eliminó correctamente la Distribuidora.');
    } catch (error) {
      console.error('Error al eliminar Distribuidora:', error);
    }
  }