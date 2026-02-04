export default function Home() {
  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-6">Painel Inicial</h1>

      <div className="grid grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold">Receita Líquida</h2>
          <p className="text-3xl font-bold mt-2">R$ 0</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold">EBITDA</h2>
          <p className="text-3xl font-bold mt-2">R$ 0</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold">Lucro Líquido</h2>
          <p className="text-3xl font-bold mt-2">R$ 0</p>
        </div>
      </div>
    </div>
  )
}
