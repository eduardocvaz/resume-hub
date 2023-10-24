export interface Qualification {
  name: string; // Nome da instituição ou empresa
  link: string; // Link para o site da instituição ou empresa (array de strings)
  linkName: string; // Nome do link para o site da instituição ou empresa (array de strings)
  date: string; // Período (por exemplo: "2015 - 2018")
  degree: string; // Grau acadêmico ou descrição da experiência
  location: string; // Localização (por exemplo: "Bangalore, India")
  summary: string; // Resumo da experiência
  fullContent: string[]; // Conteúdo completo da experiência (array de strings)
  fullContentLi: string[], // Conteúdo completo da experiência (array de strings) com tags <li>
  imageURL: string; // URL da imagem da instituição ou empresa
}
