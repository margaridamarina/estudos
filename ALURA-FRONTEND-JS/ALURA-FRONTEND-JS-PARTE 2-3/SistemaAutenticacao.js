/* ser autenticavel significa ter a propriedade senha*/
export class SistemaAutenticacao {
    static login(autenticavel, senha) {
        if (SistemaAutenticacao.eAutenticavel(autenticavel)) { 
            return autenticavel.autenticar(senha);
        }
        return false;
    }

    /*function eAutenticavel(autenticavel){
        if ("autenticar" in autenticavel) {
            if (autenticavel.autenticar instanceof Function) {
                return autenticavel.autenticar()
            }
         }*/

    static eAutenticavel(autenticavel) {
        return "autenticar" in autenticavel &&
            autenticavel.autenticar instanceof Function
    }
}

