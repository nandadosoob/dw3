// O import do ContatoRepository não é mais necessário aqui.

export class ContatoService {
  
  // Agora o Service RECEBE o repositório. Ele não o cria mais.
  constructor(contatoRepository) {
    this.contatoRepository = contatoRepository;
  }
  createContato(contatoData) {
    if(contatoData.nome.length <= 3){
      return reply.send({message: 'seu nome deve ter pelo menos 3 letras'})
    } else{

      return this.contatoRepository.create(contatoData);}
    }


  // O resto dos métodos permanece EXATAMENTE IGUAL.
  getAllContatos() {
    return this.contatoRepository.findAll();
  }
  // ... etc ...

  getContatoByEmail(email) {
    return this.contatoRepository.findByEmail();
  }
}