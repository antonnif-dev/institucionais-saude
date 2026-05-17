export default function Footer() {
  return (
    <footer className="bg-pink-300 text-white py-16">
      <div className="container-premium text-black grid md:grid-cols-4 gap-10">

        <div>
          <h3 className="text-2xl">
            Dra. Laís Namen
          </h3>

          <p className="text-slate-400 mt-4">
            Atendimento premium com tecnologia moderna e cuidado humanizado.
          </p>
        </div>

        <div>
          <h4 className="text-lg mb-4">
            Contato
          </h4>

          <ul className="space-y-2 text-slate-400">
            <li>(31) 99999-9999</li>
            <li>contato@clinica.com</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg mb-4">
            Endereço
          </h4>

          <p className="text-slate-400">
            Av. Premium, 1000
            <br />
            Belo Horizonte - MG
          </p>
        </div>

        <div>
          <h4 className="text-lg mb-4">
            Horários
          </h4>

          <p className="text-slate-400">
            Seg à Sex
            <br />
            08h às 18h
          </p>
        </div>

      </div>
    </footer>
  );
}