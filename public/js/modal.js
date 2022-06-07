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