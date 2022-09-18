import logo from '../../assets/logo.svg'

export function Navbar() {
  return (
    <nav className="nav flex items-center justify-between py-4 ">
      <div className="logo">
        <img src={logo} alt="Logo Casa Verde" />
      </div>
      <div className="menu flex gap-3">
        <span>Como fazer</span>
        <span>/</span>
        <span>Ofertas</span>
        <span>/</span>
        <span>Depoimentos</span>
        <span>/</span>
        <span>Vídeos</span>
        <span>/</span>
        <span>Meu carrinho</span>
      </div>
    </nav>
  )
}

// TODO: forward slash pseudo element ::after?