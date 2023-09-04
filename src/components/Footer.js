import { Link } from 'react-router-dom'
 
export default function Footer() {
  return (
    <footer>
      &copy; AFJH
      <nav className="footer-nav">
        <Link to="/*" className="footer-link">Contact Us</Link>
        <Link to="/*" className="footer-link">Cookie Policy</Link>
      </nav>
    </footer>
  )
}