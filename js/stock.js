const generadorId = () => {
    return Math.floor(Math.random() * Date.now())
  }
  const randomizadorCantidad = () => {
    return Math.ceil(Math.random() * 10)
  }
  const stock = [
    {
      id: 1,
      nombre: 'HyperX pulsefire fps',
      tipo: 'Mouse Gamer',
      descripcion: 'El mouse elegido por los mejores jugadores del mundo',
      precio: 100,
      stock: 60,
      cantidad: 0,
    },
    {
      id: 2,
      nombre: 'HyperX alloy fps pro',
      tipo: 'Teclado Mecanico',
      descripcion: 'El teclado mecanico elegido por los mejores jugadores del mundo',
      precio: 300,
      stock: 40,
      cantidad: 0,
    },
    {
      id: 3,
      nombre: 'HyperX alloy core',
      tipo: 'Teclado Membrana',
      descripcion: 'Teclado de membrana de uso profesional.',
      precio: 150,
      stock: 18,
      cantidad: 0,
    },
    {
      id: 4,
      nombre: 'HyperX cloud 2',
      tipo: 'Auriculares 7.1',
      descripcion: 'El mouse elegido por los mejores programadores del mundo',
      precio: 500,
      stock: 11,
      cantidad: 0,
    },
  ]