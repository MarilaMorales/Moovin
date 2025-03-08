export async function postMoovin(moovin) {
    try {
      const response = await fetch('http://localhost:3000/moovin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(moovin),
      });
  
      if (!response.ok) {
        throw new Error(`Error al registrar Moovin: ${response.statusText}`);
      }
  
      const data = await response.json();
      console.log('Se registraron correctamente Moovin.');
      return data;
    } catch (error) {
      console.error('Error al enviar Moovin al backend:', error);
      return null;
    }
  }
  
// Post Administradores
export async function postAdministrador(administrador) {
    try {
      const response = await fetch('http://localhost:3000/administradores', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(administrador),
      });
  
      if (!response.ok) {
        throw new Error(`Error al registrar Administrador: ${response.statusText}`);
      }
  
      const data = await response.json();
      console.log('Se registró correctamente el Administrador.');
      return data;
    } catch (error) {
      console.error('Error al enviar Administrador al backend:', error);
      return null;
    }
  }
  
  // Post Sedes
  export async function postSede(sede) {
    try {
      const response = await fetch('http://localhost:3000/sedes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(sede),
      });
  
      if (!response.ok) {
        throw new Error(`Error al registrar Sede: ${response.statusText}`);
      }
  
      const data = await response.json();
      console.log('Se registró correctamente la Sede.');
      return data;
    } catch (error) {
      console.error('Error al enviar Sede al backend:', error);
      return null;
    }
  }
  
  // Post Puntos de Venta
  export async function postPuntoVenta(puntoVenta) {
    try {
      const response = await fetch('http://localhost:3000/puntos_venta', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(puntoVenta),
      });
  
      if (!response.ok) {
        throw new Error(`Error al registrar Punto de Venta: ${response.statusText}`);
      }
  
      const data = await response.json();
      console.log('Se registró correctamente el Punto de Venta.');
      return data;
    } catch (error) {
      console.error('Error al enviar Punto de Venta al backend:', error);
      return null;
    }
  }
  
  // Post Distribuidoras
  export async function postDistribuidora(distribuidora) {
    try {
      const response = await fetch('http://localhost:3000/distribuidoras', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(distribuidora),
      });
  
      if (!response.ok) {
        throw new Error(`Error al registrar Distribuidora: ${response.statusText}`);
      }
  
      const data = await response.json();
      console.log('Se registró correctamente la Distribuidora.');
      return data;
    } catch (error) {
      console.error('Error al enviar Distribuidora al backend:', error);
      return null;
    }
  }