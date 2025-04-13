import { Check } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    title: "Desenvolvimento Web",
    description: "Criamos sites e aplicações web modernas e responsivas utilizando as mais recentes tecnologias.",
    features: ["Design responsivo", "Otimização para SEO", "Integração com APIs", "Painel administrativo"],
  },
  {
    title: "Marketing Digital",
    description: "Estratégias de marketing digital para aumentar sua presença online e atrair mais clientes.",
    features: ["SEO avançado", "Campanhas de mídia social", "Email marketing", "Análise de dados"],
  },
  {
    title: "Consultoria",
    description: "Consultoria especializada para ajudar sua empresa a crescer e se destacar no mercado digital.",
    features: ["Análise de mercado", "Estratégia de negócios", "Otimização de processos", "Treinamento de equipe"],
  },
]

export default function Services() {
  return (
    <div className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Nossos Serviços</h2>
          <div className="mx-auto h-1 w-20 bg-primary"></div>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Oferecemos uma variedade de serviços para atender às necessidades do seu negócio. Conheça nossas principais
            áreas de atuação.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}