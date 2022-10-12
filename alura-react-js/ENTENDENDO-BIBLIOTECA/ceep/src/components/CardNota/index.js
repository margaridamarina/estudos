import CardNota from "./CardNota";
export default CardNota;

//A duplicação no caminho de importação não é interessante. O que a gente costuma fazer é criar uma pasta, e dentro de cada pasta a index.js, que a aplicação do react vai por padrão buscar se a gente não coloca essa última parte do caminho. 

//O que vou fazer aqui é dentro do card nota criar um novo arquivo, que vai ser o index.js, e ele vai importar dentro desse módulo a parte do card e vai exportar, dar a saída para esse módulo. Vou importar o card nota, da minha pasta card nota, estou fazendo essa importação, e dou como saída, vou exportar por default o meu card nota.