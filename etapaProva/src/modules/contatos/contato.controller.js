// O import do ContatoService não é mais necessário aqui.

export class ContatoController {
  
  // Agora o Controller RECEBE o serviço.
  constructor(contatoService) {
    this.contatoService = contatoService;
  }

  // O resto dos métodos permanece EXATAMENTE IGUAL.
  async getContatos(request, reply) {
    const contatos = this.contatoService.getAllContatos();
    return reply.send(contatos);
  }
  // ... etc ...

  async getContatosByEmail(request, reply){
    const contatos = this.contatoService.getContatoByEmail()
    if (!contatos) {
    return reply.code(404).send({ message: 'Email não encontrado' });
  }
    return reply.send(contatos)
  }

  async createContato(request, reply) {
    if (!this.createContato) {
      return reply.code(404).send({ message: 'Contato não encontrado' });
    }else{
      return reply.code(201).send(novoContato);
      const novoContato = this.contatoService.createContato(request.body);

    }
  }
  }

