import React from 'react'

const PerfilPage = () => {
  return (
    <div>
      <h1 className='text-4xl text-red-500 text-center border border-red-900 bg-amber-950 rounded-b-xl p-5 m-10 mt-7 font-mono'>Página do perfil do usuário</h1>

        <div className='text-2xl text-red-500 text-center border border-red-900 bg-amber-950 rounded-t-xl p-5 m-10 mt-7 font-mono'>
            <h2>Dados do usuário</h2>
            <ul>
                <li>Nome: Irineu</li>
                <li>Idade: 28 anos</li>
                <li>Profissão: Dev</li>
            </ul>
        </div>

    </div>
  )
}

export default PerfilPage
