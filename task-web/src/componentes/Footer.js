var fecha = new Date().getFullYear();

const Footer = (props) =>{
  return (
    <footer>
        {props.texto} {fecha}
        
    </footer>
  )
}

Footer.defaultProps = {
    texto: 'Todos los derechos reservados '
}

export default Footer