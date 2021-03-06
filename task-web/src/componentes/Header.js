import Button from './Button'

const Header = (props) => {
  return (
    <header className='header'>
        <h1>{props.title}</h1>
        <Button />
    </header>
  )
}
Header.defaultProps ={
        title: 'Tareas'
}

export default Header
