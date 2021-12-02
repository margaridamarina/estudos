import {Cliente} from "./Cliente.js";
import {Gerente} from "./Funcionários/Gerente.js";
import {Diretor} from "./Funcionários/Diretor.js";
import {SistemaAutenticacao} from "./SistemaAutenticacao.js"

console.clear()

const diretor = new Diretor("Ramon", 10000, 123343525445);
diretor.cadastrarSenha("123456")
const gerente = new Gerente("Ricardo", 5000, 3123123123312);
gerente.cadastrarSenha("123")
const cliente = new Cliente("Laís", 9868768768786, "456");

const diretorestaLogado = SistemaAutenticacao.login(diretor, "123456")
const gerenteestaLogado = SistemaAutenticacao.login(gerente, "123")
const clienteestaLogado = SistemaAutenticacao.login(cliente, "456")

console.log(diretorestaLogado, gerenteestaLogado, clienteestaLogado)
