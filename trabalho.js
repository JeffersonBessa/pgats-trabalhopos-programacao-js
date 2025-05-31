// Função 1 - Gerar tag de identificação para pet com nome do pet em letras maiúsculas
export function geradorDeTagsDeIdentificacao(nome) {
  return nome.toUpperCase();
}

// Função 2 - Verificar se pet pode ser adotado com base na idade e porte informados
export function verificarSePodeSerAdotado(idade, porte) {
  if (idade >= 1 && porte === 'M') {
    return true;
  }
  return false;
}

// Função 3 - Calcular o consumo diário de ração em gramas para o consumo diário do pet
export function calcularConsumoDeRacao(nome, idade, peso) {
  const fatorConsumoPorKg = 300;
  const consumoTotal = peso * fatorConsumoPorKg;
  return consumoTotal;
}

// Função 4 - Decidir tipo de atividade para o pet com base no porte
export function decidirTipoDeAtividadePorPorte(porte) {
  const portePet = porte.toLowerCase();

  switch (portePet) {
    case 'pequeno':
      return 'brincar dentro de casa';
    case 'medio':
      return 'fazer caminhadas diárias';
    case 'grande':
      return 'praticar exercícios ao ar livre no parque';
    default:
      return 'atividade desconhecida';
  }
}

// Função 5 - Simular busca assíncrona de dado
export async function buscarDadoAsync() {
  const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
  await delay(500);
  return 'Pipoca';
}
