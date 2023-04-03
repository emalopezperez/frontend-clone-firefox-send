import Link from "next/link"

const Header = () => {
  return (
    <header className="py-8 flex flex-col md:flex-row justify-between ">
      <div>Logo</div>
      <div>
        <Link
          href="/login"
          className="inline-flex mx-4 text-sm font-semibold transition duration-300 ease-in-out eading-6 hover:bg-orange-300 bg-orange-400 text-white px-5 py-1 rounded-md ">
          Iniciar sesion
        </Link>
        <Link
          href="/crearcuenta"
          className="inline-flex mx-4 text-sm font-semibold transition duration-300 ease-in-out eading-6 hover:bg-black/70 bg-black text-white px-5 py-1 rounded-md ">
          Crear cuenta
        </Link>
      </div>
    </header>
  )
}

export default Header