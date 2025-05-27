const { useCallback } = require("react");

//Função clássica
function somar(a, b) {
    return a + b;
}

//Função anônima ou arrow
const somar_arrow = (a, b) => {
    return a + b;
};

//Função arrow sem corpo
const somar_arrow_sem_corpo = (a, b) => a + b;

//Função de callback
function calcular(a, b, res) {
    const res = a+ b;
    useCallback(res);
    return res;
}



