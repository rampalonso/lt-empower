import { NavLink, Badge } from '../atoms/'

const Nav = ({ isOpen }) => (
  <nav className={`px-2 pt-2 pb-4 ${isOpen ? 'block' : 'hidden'} md:flex md:p-0`}>
    <ul className="block md:flex">
      <li>
        <a href="#" className="block px-2 py-1 text-gray-900 font-semibold hover:bg-gray-300 md:mt-0 md:ml-1 lg:hidden">
          Funded cleanup
          <Badge text="73 895,02 KG" />
        </a>
      </li>
      <li><NavLink text="Business" /></li>
      <li><NavLink text="Individuals" /></li>
      <li><NavLink text="Blog" /></li>
      <li><NavLink text="About us" /></li>
    </ul>
  </nav>
)

export default Nav