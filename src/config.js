import imgDefault from 'shared/imgdefault.jpg'

const data = {
  presentation: 'Técnico Superior en Informática, apasionado por la tecnología y el aprendizaje, aspirando a un puesto de entrada que permita desarrollar y poner a disposición mis habilidades y desenvolverse en el ámbito laboral.',
  greeting: 'Hola, ',
  typeWrite: [
    'Soy Jose Suarez',
    'Desarrollador Web',
  ],
  social: [
    {icon:'github', link:'https://github.com/JoseAle2610', label:'Github'},
    {icon:'linkedin', link:'https://linkedin.com/jsuarez-g', label:'Linkedin'},
    {icon:'instagram', link: 'https://instagram.com/', label: 'Instagram'}
  ],
  personalData: [
    {icon:'envelope-fill', label:'Correo', value:'jalesgervazzi@gmail.com'},
    {icon:'telephone', label:'Telefono', value:'+58 412-3550853'},
    {icon:'globe', label:'Web', value:'joseale2610.github.io'},
    {icon:'calendar', label:'Cumpleaños', value:'26-10-2001', contact: false},
    {icon: 'geo-alt-fill', label: 'Ubicación', value:'Venezuela - Estado Lara'}
  ],
  interests: [
    {icon:'book', label:'Aprender'},
    {icon:'music-note', label:'Musica'},
    {icon:'pencil', label:'Dibujo'},
    {icon:'camera-video', label:'Cine'},
  ],
  works: [
    {
      title: 'Granja Avicola Las Tunas',
      markdown: 'GranjaAvicolaLasTunas',
      description: 'Sistema de gestion de inventario de la produccion de huevos',
      img: imgDefault
    }
  ], 
  about: {
    title: 'Acerca de mi',
    description: 'Técnico Superior en Informática, apasionado por la tecnología y el aprendizaje, aspirando a un puesto de entrada que permita desarrollar y poner a disposición mis habilidades y desenvolverse en el ámbito laboral.'
  },
  work: {
    title: 'Trabajos',
    description: 'Hola estos son los trabajos en los que he estado trabajando'
  },
  contact: {
    title: 'Contacto',
    description: 'Podemos discutir acerca de nuevos proyectos o solo saludar a travez de mis redes socioales o por email.'
  }
}

export default data
