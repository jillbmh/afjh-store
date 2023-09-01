import { Link } from 'react-router-dom'
 
export default function Footer() {
  return (
    <footer>
      &copy; AFJH
      <nav>
        <Link to="/">Contact Us</Link>
        <Link to="/">Cookie Policy</Link>
      </nav>
    </footer>
  )
}