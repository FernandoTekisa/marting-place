import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Entre em Contato
          </h2>
          <div className="mx-auto h-1 w-20 bg-primary"></div>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Estamos prontos para atender às suas necessidades. Preencha o
            formulário abaixo ou utilize um de nossos canais de contato.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <form className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <Input placeholder="Nome" />
                </div>
                <div>
                  <Input placeholder="Email" type="email" />
                </div>
              </div>
              <div>
                <Input placeholder="Assunto" />
              </div>
              <div>
                <Textarea placeholder="Mensagem" className="min-h-[150px]" />
              </div>
              <Button className="w-full">Enviar Mensagem</Button>
            </form>
          </div>

          <div className="flex flex-col justify-between space-y-6">
            <div>
              <h3 className="mb-4 text-xl font-semibold">
                Informações de Contato
              </h3>
              <p className="mb-6 text-gray-600">
                Estamos disponíveis para atendê-lo de segunda a sexta, das 9h às
                18h. Não hesite em nos contatar para tirar suas dúvidas.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="mt-1 h-5 w-5 text-primary" />
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-gray-600">contato@empresa.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="mt-1 h-5 w-5 text-primary" />
                  <div>
                    <h4 className="font-medium">Telefone</h4>
                    <p className="text-gray-600">(+244) 923-999-999</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 h-5 w-5 text-primary" />
                  <div>
                    <h4 className="font-medium">Endereço</h4>
                    <p className="text-gray-600">
                      AV. Fidel de castro, rua 12
                      <br />
                      Luanda - Kilamba-Kiaxe
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-gray-100 p-4">
              <h4 className="mb-2 font-medium">Horário de Atendimento</h4>
              <p className="text-sm text-gray-600">
                Segunda a Sexta: 9h às 18h
                <br />
                Sábado: 9h às 13h
                <br />
                Domingo: Fechado
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
