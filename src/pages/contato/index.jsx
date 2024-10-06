import Button from "../../components/button";

const Contato = () => {
  return (
    <div className="max-w-md w-full mx-auto p-6 mb-6 rounded-lg shadow-md bg-white dark:bg-gray-900 dark:bg-gradient-to-r dark:from-[#13072e] dark:to-[#822159] from-gray-900 to-gray-700">
      <h2 className="text-3xl text-center text-pink-600 font-bold mb-6">Entre em contato comigo</h2>
      <form action="">
        <div className="mb-4">
          <label className="block text-gray-800 dark:text-white text-sm font-semibold mb-2" htmlFor="">
            Seu nome
          </label>
          <input
            placeholder="Usuário"
            className="w-full px-3 py-2 border rounded-lg bg-gray-200 focus:outline-none focus:border-blue-500"
            required
            type="text"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-800 dark:text-white text-sm font-semibold mb-2" htmlFor="">
            Seu email
          </label>
          <input
            placeholder="nome@email.com"
            className="w-full px-3 py-2 border rounded-lg bg-gray-200 focus:outline-none focus:border-blue-500"
            required
            type="email"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-800 dark:text-white text-sm font-semibold mb-2" htmlFor="">
            Sua mensagem
          </label>
          <textarea
            rows="4"
            placeholder="Escreva sua mensagem aqui"
            className="w-full px-3 py-2 border rounded-lg bg-gray-200 focus:border-blue-500"
            required
          />
        </div>
        <div className="flex justify-center">
          <Button type="submit">Enviar</Button>
        </div>
      </form>
    </div>
  );
};

export default Contato;
