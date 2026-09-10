const data = {
  presentation: 'Técnico Superior en Informática, apasionado por la tecnología y el aprendizaje. Aspiro a un puesto de nivel inicial que me permita desarrollar mis habilidades y desenvolverme en el ámbito laboral.',
  greeting: 'Hola, ',
  typeWrite: [
    'Soy José Suárez',
    'Desarrollador FullStack',
  ],
  social: [
    {icon:'github', link:'https://github.com/JoseAle2610', label:'Github'},
    {icon:'linkedin', link:'https://linkedin.com/jsuarez-g', label:'Linkedin'},
    {icon:'whatsapp', link:'https://api.whatsapp.com/send?phone=584145110735', label:'Whatsapp'},
    {icon:'envelope-fill', link:'mailto:jalesgervazzi@gmail.com', label:'Mail'}
  ],
  personalData: [
    {icon:'envelope-fill', label:'Correo', value:'jalesgervazzi@gmail.com'},
    {icon:'telephone', label:'Teléfono', value:'+58 412-3550853'},
    {icon:'globe', label:'Web', value:'joseale2610.github.io'},
    {icon:'calendar', label:'Cumpleaños', value:'26-10-2001', contact: false},
    {icon: 'geo-alt-fill', label: 'Ubicación', value:'Venezuela - Estado Lara'}
  ],
  interests: [
    {icon:'book', label:'Aprender'},
    {icon:'music-note', label:'Música'},
    {icon:'pencil', label:'Dibujo'},
    {icon:'camera-video', label:'Cine'},
  ],
  works: [
    {
      title: 'Entregando Ecuador',
      description: 'Aplicación integrada con Google Workspace para la gestión de envíos de paquetes a domicilio.',
      img: '/screenshots/entregandoEcuador.png',
      links: [
        {icon: 'globe', url: 'https://entregandoecuador.com'}
      ]
    },
    {
      title: 'Portfolio',
      description: 'Ya estás viendo este proyecto!',
      img: '/screenshots/portafolio.png',
      links: [
        {icon: 'github', url: 'https://github.com/JoseAle2610/JoseAle2610.github.io'},
        {icon: 'globe', url: 'https://joseale2610.github.io'}
      ]
    },
    {
      title: 'Granja Avícola Las Tunas',
      description: 'Sistema de gestión de inventario de la producción de huevos',
      img: '/screenshots/granjaAvicola.png',
      links: [
        {icon: 'github', url: 'https://github.com/JoseAle2610/GranjaAvicola'},
      ]
    },
    {
      title: 'NellaVent',
      description: 'Aplicación para la administración de las ventas de un negocio pequeño, con conexión a Firebase',
      img: '/screenshots/nellavent.png',
      links: [
        {icon: 'github', url: 'https://github.com/JoseAle2610/nellavent'}
      ]
    }
  ], 
  about: {
    title: 'Sobre mí',
    description: 'Soy José Suárez, Desarrollador FullStack altamente motivado y apasionado por la tecnología, con experiencia en el desarrollo de soluciones empresariales y gran entusiasmo por enfrentar nuevos desafíos.'
  },
  work: {
    title: 'Trabajos',
    description: 'En esta página podrás encontrar una selección de algunos de mis proyectos personales y profesionales en los que he estado trabajando. Permíteme mostrarte un vistazo de lo que he creado.'
  },
  contact: {
    title: 'Contacto',
    description: 'Podemos conversar sobre nuevos proyectos o simplemente saludarnos a través de mis redes sociales o por email.'
  }
}

export default data
