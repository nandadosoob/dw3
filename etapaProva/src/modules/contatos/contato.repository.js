import { randomUUID } from 'node:crypto';

export class ContatoRepository {
  #contatos = [];
  // O código completo do repositório permanece o mesmo...
  findAll() { /*...*/ }
  findById(id) { /*...*/ }
  findByEmail(email) { return this.#contatos.find(c => c.email === email); }
  create(contatoData) {
    const novoContato = { id: randomUUID(), ...contatoData };
    this.#contatos.push(novoContato);
    return novoContato;
  }
  update(id, contatoData) { /*...*/ }
  remove(id) { /*...*/ }
}