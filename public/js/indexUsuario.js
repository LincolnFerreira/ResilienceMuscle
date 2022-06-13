function seleciona(x) {
    var guardaData = x.style.fill = `var(--color-primary)`;
    console.log(guardaData);
}

function montaCorpoModal(textoCorpo) {
    corpo_modal.innerHTML = textoCorpo;
    adicionarTreino();
}
var modal = document.getElementById("div_modal");
var botao = document.getElementById("botao");
var span = document.getElementsByClassName("close")[0];

function adicionarTreino() {

    modal.style.display = "flex";
}
span.onclick = function () {
    modal.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


// function escolheFrequencia() {
//     var qtdFrequencia = Number(select_frequencia.value);
//     div_select_frequencia.innerHTML = null;

// }

// function escolheMusculo() {
//     var musculoTreinado = Number()
// }

function ativaMenu(id) {
    var desempenho = document.querySelector('#desempenho');
    desempenho.classList.remove('ativador');

    var conhecimento = document.querySelector('#conhecimento');
    conhecimento.classList.remove('ativador');

    var performance = document.querySelector('#performance');
    performance.classList.remove('ativador');

    id = document.querySelector(id);
    id.classList.add('ativador');

    if (id.id == 'desempenho') {
        container_sistema_muscular.classList.add("show");
        div_dinamica_conhecimento.classList.remove("show");
        div_dinamica_performance.classList.remove("show");

    } else if (id.id == 'conhecimento') {
        div_dinamica_conhecimento.classList.add("show");
        container_sistema_muscular.classList.remove("show");
        div_dinamica_performance.classList.remove("show");

    } else if (id.id == 'performance') {
        div_dinamica_performance.classList.add("show");
        div_dinamica_conhecimento.classList.remove("show");
        container_sistema_muscular.classList.remove("show");
    }
}
var conjuntoDias = ['', '', ''];

function geradorDiaCalendario() {
    var data = new Date();
    var ano = data.getFullYear();
    var mes = data.getMonth() + 1;

    var diaMaxMes = new Date(ano, mes, 0).getDate().toLocaleString('pt-BR');
    diaMaxMesRestante = Number(diaMaxMes);
    diaMaxMesRestante += Number(3);
    console.log(diaMaxMesRestante)
    for (let i = 1; i <= diaMaxMesRestante + 3; i++) {
        let divDia = document.createElement('div');
        divDia.setAttribute("id", i);
        divDia.setAttribute("class", "dia");
        var formataNumero = i;
        if (i < 10) {

            i = `0${i}`;
            conjuntoDias.push(i);
            // console.log(i)
        } else if (i > diaMaxMes) {
            conjuntoDias.push();
        } else {
            conjuntoDias.push(i);
        }
        document.querySelector('#dia_box').appendChild(divDia);
        divDia.textContent = conjuntoDias[i - 1];
        // console.log(conjuntoDias[i - 1])
    }
}


function limparSessao() {
    // aguardar();
    sessionStorage.clear();
    // finalizarAguardar();
    window.location = "./index.html";
}

function calculaPorcentagemDiaTreino(diasTreinados) {
    var hoje = new Date();
    totalDiasCorridos = hoje.getDate();
    return resultado = Number(diasTreinados * 100) / totalDiasCorridos;
}
calculaPorcentagemDiaTreino(3, 7)
/** AQUI COMEÇA A REQUISIÇÃO DA API */
function listarHistorico() {
    var idUsuario = sessionStorage.ID_USUARIO;
    fetch(`/usuarios/listarHistorico/${idUsuario}`)
        .then((response) => {
            response.json().then((json) => {
                if (json.length > 0) {
                    // console.log(json[0].vericaFormulario);
                    if (json[0].vericaFormulario == 0) {

                    } else if (json) {
                        var resultadoParametro = calculaPorcentagemDiaTreino(json[0].vericaFormulario);
                        if (resultadoParametro < 25) {
                            kpi_status.src = `images/SVG/cry-face.svg`;
                            kpi_status_texto.innerHTML = `Podemos melhorar!!\n confio em você`;

                        } else if (resultadoParametro < 50) {
                            kpi_status.src = `images/SVG/bad-face.svg`;
                            kpi_status_texto.innerHTML = `Força campeão!!\n só você sabe a força que tem!!`;
                        } else if (resultadoParametro < 75) {
                            kpi_status.src = `images/SVG/happy-face.svg`;
                            kpi_status_texto.innerHTML = `Exelente!! Não Para!`;

                        } else {
                            kpi_status.src = `images/SVG/love-face.svg`;
                            kpi_status_texto.innerHTML = `Uau... se mantenha assim!`;

                        }

                        kpi_porcentagem_frequencia.innerHTML = resultadoParametro.toFixed(2) + "%";
                        if (json[0].vericaFormulario)
                            kpi_quantidade_dias_treino.innerHTML = json[0].vericaFormulario;
                    }
                }
            });
        }).catch((error) => {
            console.log('nenhum dado') //arrumar isso
            console.error(error);

        })
}
var idUsuario = sessionStorage.ID_USUARIO;

function kpiMetrica() {
    var idUsuario = sessionStorage.ID_USUARIO;
    console.log(idUsuario)
    fetch(`/usuarios/kpiMetrica/${idUsuario}`)
        .then((response) => {
            response.json().then((json) => {
                if (json.length > 0) {
                    console.log(json[0])
                    for (let i = 0; i < json.length; i++) {
                        historico_dinamico.innerHTML += `
                        <tr>
                        <td>${json[i].data}</td>
                        <td>${json[i].musculo}</td>
                        <td>${json[i].exercicio}</td>
                        <td>${json[i].peso}</td>
                        <td>${json[i].intensidade}</td>
                        <td>${json[i].repeticaoMax}</td>
                        <td>${json[i].repeticaoMin}</td>
                        </tr>`;
                    }
                }
            });
        }).catch((error) => {
            console.log('nenhum dado encontrado!');
            console.error(error);
        });
}

function escolheSexo(idSexo) {
    if (idSexo == 'homem') {
        img_men.classList.add('ativo');
        img_woman.classList.remove('ativo');

    } else {
        img_woman.classList.add('ativo');
        img_men.classList.remove('ativo');

    }
    sexo = idSexo;
    console.log(sexo)

}

function escolheClassificacao(idButton) {
    btn_iniciante.classList.remove('ativo');
    btn_intermediario.classList.remove('ativo');
    btn_avancado.classList.remove('ativo');
    console.log(idButton)
    if (idButton == 'iniciante') {
        btn_iniciante.classList.add('ativo');

    } else if (idButton == 'intermediario') {
        btn_intermediario.classList.add('ativo');

    } else {
        btn_avancado.classList.add('ativo');

    }
    classificacao = idButton;
    console.log(classificacao)


}

function escolheFrequencia(idButton) {
    frequencia_1.classList.remove('ativo');
    frequencia_2.classList.remove('ativo');
    frequencia_3.classList.remove('ativo');
    frequencia_4.classList.remove('ativo');
    frequencia_5.classList.remove('ativo');
    frequencia_6.classList.remove('ativo');
    frequencia_7.classList.remove('ativo');

    console.log(idButton)
    if (idButton == '1') {
        frequencia_1.classList.add('ativo');

    } else if (idButton == '2') {
        frequencia_2.classList.add('ativo');

    } else if (idButton == '3') {
        frequencia_3.classList.add('ativo');

    } else if (idButton == '4') {
        frequencia_4.classList.add('ativo');

    } else if (idButton == '5') {
        frequencia_5.classList.add('ativo');

    } else if (idButton == '6') {
        frequencia_6.classList.add('ativo');

    } else {
        frequencia_7.classList.add('ativo');

    }
    frequencia = idButton;
    console.log(frequencia);
}
var sexo = '';
var classificacao = '';
var frequencia = '';

function fecharRequire() {
    document.querySelector('#close_request').onclick = function () {

        if (window.confirm("Tem certeza que gostaria de cancelar o cadastro ?\n (irá ser deslogado)")) {
            limparSessao()

        }
    }
}

function nomeDinamico() {
    nome_dinamico.innerHTML =
        sessionStorage.NOME_USUARIO

}

function cadastroTreino() {
    var musculo = input_musculo.value;
    var exercicio = input_exercicio.value;
    var peso = Number(input_peso.value);
    var intensidade = select_intensidade.value;
    var maxima = Number(repeticao_maxima.value);
    var minima = Number(repeticao_minima.value);
    fetch("usuarios/cadastroTreino/" + idUsuario, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                musculo,
                exercicio,
                peso,
                intensidade,
                maxima,
                minima
            }),
        }).then(function (resposta) {
            console.log(resposta);
            if (resposta.status == 200) {
                alert("Cadastro realizado com sucesso!")
                setTimeout(() => {
                    window.location.href = 'indexUsuario.html'
                }, 1500)
            } else {
                // button.onclick = cadastrar();
                showMessageError("Houve um erro ao tentar realizar o cadastro!");
                throw "Houve um erro ao tentar realizar o cadastro!";
            }
        })
        .catch(function (resposta) {
            console.error(`Erro: ${resposta}`);
            showMessageError(resposta);
        })
}

function cadastroFinal() {

    fetch("usuarios/cadastroFinal/" + idUsuario, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                sexo,
                classificacao,
                frequencia
            }),
        }).then(function (resposta) {
            console.log(resposta);
            if (resposta.status == 200) {
                alert("Cadastro realizado com sucesso!")
                setTimeout(() => {
                    window.location.href = 'indexUsuario.html'
                }, 1500)
            } else {
                // button.onclick = cadastrar();
                showMessageError("Houve um erro ao tentar realizar o cadastro!");
                throw "Houve um erro ao tentar realizar o cadastro!";
            }
        })
        .catch(function (resposta) {
            console.error(`Erro: ${resposta}`);
            showMessageError(resposta);
        })
}

nomeDinamico()
listarHistorico();
kpiMetrica();
geradorDiaCalendario();


var modalCadastroRequire = `<span class="close" id="close_request">x</span>
<h3 style="color: red; opacity: 0.4;">
*POR FAVOR, PREENCHA O QUESTIONARIO*(OU É DESLOGADO DIRETAMENTE)
</h3>
<h1>Cadastro de informações</h1>
<div class="flex-row container-sexo">
<span id="span_sexo">Sexo:</span>
<div class="flex-column box-sexo" id="woman" onclick="escolheSexo('mulher')">
<img id="img_woman" src="./images/SVG/woman.svg">
<span>Mulher</span>
</div>
    <div class="flex-column box-sexo" id="men" onclick="escolheSexo('homem')">
    
    <img id="img_men" src="./images/SVG/men.svg">
    <span>Homem</span>
    
    </div>
    </div>
    <div class="flex-column container-classificacao">
    <span id="span_sexo">Classificação:</span>
    <div class="flex-row  container-classificacao">
    <button class="button btn-classificacao" id="btn_iniciante"
    onclick="escolheClassificacao('iniciante')">Iniciante</button>
    <button class="button btn-classificacao" id="btn_intermediario"
    onclick="escolheClassificacao('intermediario')">Intermediario</button>
    <button class="button btn-classificacao" id="btn_avancado"
    onclick="escolheClassificacao('avancado')">Avançado</button>
    </div>
    </div>
    <div class="flex-column container-classificacao">
    <span id="span_sexo">Frequencia:</span>
    <div class="flex-row  container-classificacao">
    <button class="button btn-classificacao" id="frequencia_1"
    onclick="escolheFrequencia('1')">1</button>
    <button class="button btn-classificacao" id="frequencia_2"
    onclick="escolheFrequencia('2')">2</button>
    <button class="button btn-classificacao" id="frequencia_3"
    onclick="escolheFrequencia('3')">3</button>
    <button class="button btn-classificacao" id="frequencia_4"
    onclick="escolheFrequencia('4')">4</button>
    <button class="button btn-classificacao" id="frequencia_5"
    onclick="escolheFrequencia('5')">5</button>
    <button class="button btn-classificacao" id="frequencia_6"
            onclick="escolheFrequencia('6')">6</button>
            <button class="button btn-classificacao" id="frequencia_7"
            onclick="escolheFrequencia('7')">7</button>
            </div>
            </div>
            <button class="button destaque ativo" onclick="cadastroFinal()">Concluir</button>
            </div>`;
montaCorpoModal(modalCadastroRequire);

// var tr = document.createElement("tr");
// document.querySelector('#historico_dinamico').appendChild(tr);
// tr.setAttribute('id', i);
// var td = document.createElement("td");
// document.querySelector(i).appendChild(td);
// tr.setAttribute('id', json[0].data);
// td.textContent = json[i].data;
// document.querySelector(i).appendChild(td);
// tr.setAttribute('id', json[0].musculo);
// td.textContent = json[i].musculo;
// document.querySelector(i).appendChild(td);
// tr.setAttribute('id', json[0].exercicio);
// td.textContent = json[i].exercicio;