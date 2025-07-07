const myPromise = new Promise(
    (resolve, reject) => {
        const res = 5;
        if (res % 2 === 0) resolve("OK: " + res);
        else reject("NOK: " + res);
    }
)

function getAPI(url) {
    return myPromise;
}

function myClient() {
    getAPI("https://api.exemplo.com")
    .then(
        (res) => {
            console.log("THEN: " + res)
        }
    )
    .catch(
        (err) => {
            console.log("CATCH: " + err)
        }
    )
    .finally(
        () => {
            console.log("FINALIZADO")
        }
    );

}

myClient();


function obterUsuario() {
    return new Promise(
        (resolve) => {
            setTimeout(
                () => {
                    const usuario = {
                        id: 1,
                        nome: "Jhon Doe",
                        email: "jhon.doe@example.com"
                    }
                    resolve(usuario);
                }
                ,2000
            ) 
        }
    )
}

obterUsuario()
    .then(
        (usuarioRecebido) => {
            console.log("Usuário Encontrado com sucesso:")
            console.log("ID: ", usuarioRecebido.id)
            console.log("Nome: ", usuarioRecebido.nome)
            console.log("Email: ", usuarioRecebido.email)   
        }
    )
    .catch(
        (erro) => {
            console.error("Erro ao obter usuário:", erro);
        }
    )

async function obterUsuarioAsync() {
    try {
        const usuario = await obterUsuario()
        console.log("Usuário Encontrado com sucesso:")
        console.log("ID: ", usuario.id)
        console.log("Nome: ", usuario.nome)
        console.log("Email: ", usuario.email)
    } catch (erro) {
        console.error("Erro ao obter usuário:", erro)
    }
}

obterUsuarioAsync()

function verificarTemperatura(temperatura) {
    return new Promise(
        (resolve, reject) => {
            if (temperatura <= 30) {
                resolve("Tempratura Normal")
            } else {
                reject("Temperatura muito Alta!")
            }
        }
    )
}

verificarTemperatura(35)
    .then(
        temperaturaRecebida => {
            console.log(temperaturaRecebida);
        }
    )
    .catch(
        erro => {
            console.error(erro);
        }
    )

verificarTemperatura(25)
    .then(
        temperaturaRecebida => {
            console.log(temperaturaRecebida);
        }
    )
    .catch(
        erro => {
            console.error(erro);
        }
    )

async function verificarTemperaturaAsync(temperatura) {
    try {
        const resultado = await verificarTemperatura(temperatura);
        console.log(resultado);
    }
    catch (erro) {
        console.error(erro);
    }
}

verificarTemperaturaAsync(35)
verificarTemperaturaAsync(25)
