import Link from "next/link"

const PageLayout = ({children}) => {
  return (
    <div>
      <div>
        {children}
      </div>

      <Link className="text-2xl text-red-500 text-center border border-red-900 bg-amber-950 rounded-t-xl p-5 m-10 mt-7 font-mono" href='/settings'> Atualizar dados </Link>

    </div>
  )
}

export default PageLayout
