export default function About() {
    return (
      <div className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Sobre Nós</h2>
            <div className="mx-auto h-1 w-20 bg-primary"></div>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="flex items-center justify-center">
              <div className="aspect-video w-full overflow-hidden rounded-lg bg-gray-200">
                {/* <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Sobre nossa empresa"
                  className="h-full w-full object-cover"
                /> */}
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="mb-4 text-2xl font-semibold">Nossa História</h3>
              <p className="mb-4 text-gray-600">
                Fundada em 2010, nossa empresa tem se dedicado a fornecer soluções inovadoras para clientes em todo o
                país. Com uma equipe de profissionais experientes, estamos comprometidos com a excelência e a satisfação
                do cliente.
              </p>
              <p className="mb-6 text-gray-600">
                Nossa missão é simplificar processos complexos e ajudar empresas a alcançarem seu potencial máximo através
                de tecnologia de ponta e estratégias personalizadas.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg bg-gray-50 p-4 text-center">
                  <h4 className="mb-2 text-xl font-bold text-primary">10+</h4>
                  <p className="text-sm text-gray-600">Anos de Experiência</p>
                </div>
                <div className="rounded-lg bg-gray-50 p-4 text-center">
                  <h4 className="mb-2 text-xl font-bold text-primary">500+</h4>
                  <p className="text-sm text-gray-600">Projetos Concluídos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }