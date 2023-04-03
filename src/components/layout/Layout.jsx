import Head from "next/head"
import Header from "../header/Header"

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>NodeSend</title>
      </Head>
      <div className="container mx-auto">
        <Header />
        <div className="mt-20">
          { children }
        </div>
      </div>
    </>
  )
}

export default Layout