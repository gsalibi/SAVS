function displayForms() {
    var radios = document.forms["type"];

    if (radios[0].checked)
        document.getElementById("form-identified").style.display = "block";
    else
        document.getElementById("form-identified").style.display = "none";

    document.getElementById("form-1").style.display = "block";
    document.getElementById("form-2").style.display = "block";
    document.getElementById("form-3").style.display = "block";
    document.getElementById("form-4").style.display = "block";
    document.getElementById("submit").style.display = "block";
}


function displayUniversityInfos() {
    var checkBox = document.forms["form-identified"][11];

    if (checkBox.selectedIndex < 5)
        document.getElementById("inputInstitute").style.display = "block";
    else
        document.getElementById("inputInstitute").style.display = "none";

    if (checkBox.selectedIndex < 3)
        document.getElementById("inputCourse").style.display = "block";
    else
        document.getElementById("inputCourse").style.display = "none";

}


/* 
function displayExactLocation() {
    var select = document.forms["form-1"][4];

    if (select.selectedIndex == 5)
        document.getElementById("exactLocation").style.display = "block";
    else
        document.getElementById("exactLocation").style.display = "none";
}
 */

function displayTextArea(element, textArea) {
    if (element.selectedIndex == 1)
        document.getElementById(textArea).style.display = "block";
    else
        document.getElementById(textArea).style.display = "none";
}


authorID = 1;
function addAuthor() {
    const placeholders = [
        ["A", "Qual o nome dessa pessoa? (caso saiba)"],
        ["B", "Qual o vínculo dessa pessoa com a universidade? (caso saiba)"],
        ["C", "Qual o Instituto/Faculdade/Órgão onde a pessoa estuda ou trabalha (caso saiba)"],
        ["D", "Qual tipo vínculo você possui ou possuía com essa pessoa? (caso se aplique)"],
        ["E", "Você tem mais alguma informação sobre essa pessoa? Exemplos: número de telefone celular, você a viu antes, como a conhece, quaisquer características físicas (cor do cabelo, marcas identificáveis, tatuagens, roupas, marcas de nascença) ou qualquer coisa que você se lembre dela."]]

    const para = document.createElement("p");
    const node = document.createTextNode("Autor " + authorID + ":");
    const br = document.createElement("br");
    para.appendChild(node);
    document.getElementById("author").appendChild(br);
    document.getElementById("author").appendChild(para);

    for (placeholder of placeholders) {
        var group = document.createElement("div");
        var element = document.createElement("textarea");
        group.className = "form-group";
        element.className = "form-control";
        element.id = "author" + authorID + "Textarea" + placeholder[0];
        element.rows = "3";
        element.placeholder = placeholder[1];
        group.appendChild(element);
        document.getElementById("author").appendChild(group);
    }
    authorID++;
}


// CEP
function clearAddressForm() {
    //Limpa valores do formulário de cep.
    document.getElementById('address').value = ("");
    document.getElementById('neighborhood').value = ("");
    document.getElementById('city').value = ("");
    document.getElementById('uf').value = ("");
}

function meu_callback(conteudo) {
    if (!("erro" in conteudo)) {
        //Atualiza os campos com os valores.
        document.getElementById('city').value = (conteudo.localidade);
        document.getElementById('uf').value = (conteudo.uf);
        address = document.getElementById('address');
        neighborhood = document.getElementById('neighborhood');
        address.value = conteudo.logradouro;
        neighborhood.value = conteudo.bairro;

        if (address.value == "")
            address.disabled = false;
        else
            address.disabled = true;

        if (neighborhood.value == "")
            neighborhood.disabled = false;
        else
            neighborhood.disabled = true;
    } //end if.
    else {
        //CEP não Encontrado.
        clearAddressForm();
        alert("CEP não encontrado.");
    }
}

function cepSearch(valor) {

    //Nova variável "cep" somente com dígitos.
    var cep = valor.replace(/\D/g, '');

    //Verifica se campo cep possui valor informado.
    if (cep != "") {

        //Expressão regular para validar o CEP.
        var validacep = /^[0-9]{8}$/;

        //Valida o formato do CEP.
        if (validacep.test(cep)) {

            //Preenche os campos com "..." enquanto consulta webservice.
            document.getElementById('address').value = "...";
            document.getElementById('neighborhood').value = "...";
            document.getElementById('city').value = "...";
            document.getElementById('uf').value = "...";

            //Cria um elemento javascript.
            var script = document.createElement('script');

            //Sincroniza com o callback.
            script.src = 'https://viacep.com.br/ws/' + cep + '/json/?callback=meu_callback';

            //Insere script no documento e carrega o conteúdo.
            document.body.appendChild(script);

        } //end if.
        else {
            //cep é inválido.
            clearAddressForm();
            alert("Formato de CEP inválido.");
        }
    } //end if.
    else {
        //cep sem valor, limpa formulário.
        clearAddressForm();
    }
}
