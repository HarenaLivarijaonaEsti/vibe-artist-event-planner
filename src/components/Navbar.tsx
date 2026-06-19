export default function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-md">
      {/* Partie gauche */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            ☰
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a href="#home">Accueil</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#footer">Contact</a>
            </li>
          </ul>
        </div>

        <a className="text-xl font-bold">Vibe Event</a>
      </div>

      {/* Partie centrale (desktop uniquement) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="#home">Accueil</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#footer">Contact</a>
          </li>
        </ul>
      </div>

      {/* Partie droite */}
      <div className="navbar-end">
        <a
          href="https://calendly.com/miora_assistanteadministratif"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          Réserver
        </a>
      </div>
    </div>
  );
}
