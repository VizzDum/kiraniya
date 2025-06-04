import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav style={{ padding: "1rem", background: "#eee" }}>
      <Link to="/" style={{ marginRight: "1rem" }}>Головна</Link>
      <Link to="/kira" style={{ marginRight: "1rem" }}>Про Кіру</Link>
      <Link to="/symbols" style={{ marginRight: "1rem" }}>Символіка</Link>
      <Link to="/dogma" style={{ marginRight: "1rem" }}>Доктрина</Link>
      <Link to="/saints" style={{ marginRight: "1rem" }}>Святі істоти</Link>
      <Link to="/holidays" style={{ marginRight: "1rem" }}>Свята</Link>
      <Link to="/temple" style={{ marginRight: "1rem" }}>Святилище</Link>
      <Link to="/texts" style={{ marginRight: "1rem" }}>Тексти</Link>
      <Link to="/contact">Зв’язок</Link>
    </nav>
  )
}
