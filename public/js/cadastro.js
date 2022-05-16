function validaNome() {
    var nome = input_nome.value;
    if (nome.length < 5 || nome.length == '') {
        input_nome.style.borderColor = 'red';
        label_nome.style.color = 'red';
    } else {
        input_nome.style.borderColor = ``;
        label_nome.style.color = ``;
    }
}

function validaSobrenome() {
    var sobrenome = input_sobrenome.value;
    if (sobrenome.length < 5 || sobrenome.length == '') {
        input_sobrenome.style.borderColor = 'red';
        label_sobrenome.style.color = 'red';
    } else {
        input_sobrenome.style.borderColor = ``;
        label_sobrenome.style.color = ``;
    }
}
//function validaEmail() { }
function validadtNasc() {
    var dtNasc = input_dtNasc.value;
    if (dtNasc.length == 2) {
        input_dtNasc.value += "/";
    }
    if (dtNasc.length == 5) {
        input_dtNasc.value += "/";
    }
    const inverteData = new Array(
        dtNasc.split("/")[2], //ano
        dtNasc.split("/")[1], // mês
        dtNasc.split("/")[0] // dia
    );
    dataReal = (inverteData[0] + '/' + inverteData[1] + '/' + inverteData[2]);
    // console.log(dataReal);
}

function validaSenha() {
    var senha = input_senha.value;
    if (senha.length < 8) {
        if (senha != '') {} else {
            input_senha.style.borderColor = "red";
        }
    } else {
        input_senha.style.borderColor = ``;
    }
}

function validaConfirmaSenha() {
    var validaSenha = input_confirma_senha.value;
    if (validaSenha == input_senha.value) {
        input_confirma_senha.style.borderColor = 'green';
        label_confirma_senha.style.color = 'green';
    } else {
        input_confirma_senha.style.borderColor = 'red';
        label_confirma_senha.style.color = 'red';
    }
}