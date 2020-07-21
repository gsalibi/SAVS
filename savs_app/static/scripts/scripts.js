function displayForms() {
    if (document.getElementById("inlineIdentified").checked) {
        document.getElementById("form-identified").style.display = "block";
        document.getElementById("identified-text").style.display = "block";
        document.getElementById("anonymous-text").style.display = "none";
        document.getElementById("anonymous-questions").style.display = "none";
        updateIDs(true)
        updateRequired(true)
    }
    else {
        document.getElementById("form-identified").style.display = "none";
        document.getElementById("identified-text").style.display = "none";
        document.getElementById("anonymous-text").style.display = "block";
        document.getElementById("anonymous-questions").style.display = "block";
        updateIDs(false)
        updateRequired(false)
    }
    document.getElementById("commom-questions").style.display = "block";
    document.getElementById("form-1").style.display = "block";
    document.getElementById("form-2").style.display = "block";
    document.getElementById("submit").style.display = "block";
}


function updateIDs(isIdentified) {
    if (isIdentified) {
        document.getElementById("id_anonymous_position").name = "identified_position"
        document.getElementById("id_anonymous_position_complement").name = "identified_position_complement"
        document.getElementById("id_anonymous_gender").name = "identified_gender"
        document.getElementById("id_anonymous_gender_complement").name = "identified_gender_complement"
        document.getElementById("id_anonymous_connection_unicamp").name = "identified_connection_unicamp"
        document.getElementById("id_anonymous_connection_unicamp_complement").name = "identified_connection_unicamp_complement"
        document.getElementById("id_anonymous_episode_date").name = "identified_episode_date"
        document.getElementById("id_anonymous_episode_date_complement").name = "identified_episode_date_complement"
        document.getElementById("id_anonymous_episode_date_period").name = "identified_episode_date_period"
        document.getElementById("id_anonymous_episode_date_period_complement").name = "identified_episode_date_period_complement"
        document.getElementById("id_anonymous_episode_location").name = "identified_episode_location"
        document.getElementById("id_anonymous_episode_location_complement").name = "identified_episode_location_complement"
        document.getElementById("id_anonymous_episode_report").name = "identified_episode_report"  
    } else {
        document.getElementById("id_anonymous_position").name = "anonymous_position"
        document.getElementById("id_anonymous_position_complement").name = "anonymous_position_complement"
        document.getElementById("id_anonymous_gender").name = "anonymous_gender"
        document.getElementById("id_anonymous_gender_complement").name = "anonymous_gender_complement"
        document.getElementById("id_anonymous_connection_unicamp").name = "anonymous_connection_unicamp"
        document.getElementById("id_anonymous_connection_unicamp_complement").name = "anonymous_connection_unicamp_complement"
        document.getElementById("id_anonymous_episode_date").name = "anonymous_episode_date"
        document.getElementById("id_anonymous_episode_date_complement").name = "anonymous_episode_date_complement"
        document.getElementById("id_anonymous_episode_date_period").name = "anonymous_episode_date_period"
        document.getElementById("id_anonymous_episode_date_period_complement").name = "anonymous_episode_date_period_complement"
        document.getElementById("id_anonymous_episode_location").name = "anonymous_episode_location"
        document.getElementById("id_anonymous_episode_location_complement").name = "anonymous_episode_location_complement"
        document.getElementById("id_anonymous_episode_report").name = "anonymous_episode_report" 
    }

}

function updateRequired(isIdentified) {
    if (isIdentified) {
        document.getElementById("id_identified_name").required = true
        document.getElementById("id_identified_cpf").required = true
        document.getElementById("id_identified_zipcode").required = true
        document.getElementById("id_identified_address_number").required = true
        document.getElementById("id_identified_email").required = true
        document.getElementById("id_identified_telephone").required = true
    } else {
        document.getElementById("id_identified_name").required = false
        document.getElementById("id_identified_cpf").required = false
        document.getElementById("id_identified_zipcode").required = false
        document.getElementById("id_identified_address_number").required = false
        document.getElementById("id_identified_email").required = false
        document.getElementById("id_identified_telephone").required = false
    }
}


function displayUniversityInfos() {
    var selected = document.getElementById("id_identified_connection_unicamp").value;

    if (selected === "Aluna(o) de graduação" || selected ===  "Aluna(o) de pós-graduação"){ 
        document.getElementById("id_identified_connection_unicamp_complement").style.display = "none";
        document.getElementById("id_identified_course").style.display = "block";
        document.getElementById("id_identified_ra").style.display = "block";
        document.getElementById("id_identified_institute").style.display = "block";
    }
    else if (selected === "Terceirizada(o)") {
        document.getElementById("id_identified_connection_unicamp_complement").style.display = "none";
        document.getElementById("id_identified_course").style.display = "none";
        document.getElementById("id_identified_ra").style.display = "none";
        document.getElementById("id_identified_institute").style.display = "block";
    } else if (selected === "Docente") {
        document.getElementById("id_identified_connection_unicamp_complement").style.display = "none";
        document.getElementById("id_identified_course").style.display = "none";
        document.getElementById("id_identified_ra").style.display = "block";
        document.getElementById("id_identified_institute").style.display = "block";
    } else if (selected === "Outro") {
        document.getElementById("id_identified_connection_unicamp_complement").style.display = "block";
        document.getElementById("id_identified_course").style.display = "none";
        document.getElementById("id_identified_ra").style.display = "none";
        document.getElementById("id_identified_institute").style.display = "none";
    } else {
        document.getElementById("id_identified_connection_unicamp_complement").style.display = "none";
        document.getElementById("id_identified_course").style.display = "none";
        document.getElementById("id_identified_ra").style.display = "none";
        document.getElementById("id_identified_institute").style.display = "none";
    }

}

function displayOpenField(element, options, fieldID) {
    for (option of options) {
        if (element.selectedIndex == option) {
            document.getElementById(fieldID).style.display = "block";
            document.getElementById(fieldID).required = true;
            break;
        }
        else {
            document.getElementById(fieldID).style.display = "none";
            document.getElementById(fieldID).required = false;
        }
    }
}

function displayOpenFieldChecked(element, fieldID) {
    if (element.checked)
        document.getElementById(fieldID).style.display = "block";
    else
        document.getElementById(fieldID).style.display = "none";
}


actorNumber = [1, 1];
total_accused = 1
total_witness = 0
function addPerson(actorType) {
    index = (actorType == "acusado") ? 0 : 1
    const placeholders = [
        ["A", "Qual o nome dessa pessoa? (caso saiba)"],
        ["B", "Qual o vínculo dessa pessoa com a universidade? (caso saiba)"],
        ["C", "Qual o Instituto/Faculdade/Órgão onde a pessoa estuda ou trabalha (caso saiba)"],
        ["D", "Qual tipo vínculo você possui ou possuía com essa pessoa? (caso se aplique)"],
        ["E", "Você tem mais alguma informação sobre essa pessoa? Exemplos: número de telefone celular, você a viu antes, como a conhece, quaisquer características físicas (cor do cabelo, marcas identificáveis, tatuagens, roupas, marcas de nascença) ou qualquer coisa que você se lembre dela."]]

    const p = document.createElement("p");
    const node = document.createTextNode(capitalize(actorType) + " " + actorNumber[index] + ":");
    const br = document.createElement("br");
    p.appendChild(node);
    document.getElementById(actorType).appendChild(br);
    document.getElementById(actorType).appendChild(p);

    for (placeholder of placeholders) {
        var group = document.createElement("div");
        var element = document.createElement("textarea");
        group.className = "form-group";
        element.className = "form-control";
        element.name = actorType + actorNumber[index] + placeholder[0];
        element.id = actorType + actorNumber[index] + "Textarea" + placeholder[0];
        element.rows = "3";
        element.placeholder = placeholder[1];
        group.appendChild(element);
        document.getElementById(actorType).appendChild(group);
    }
    actorNumber[index]++;
    document.getElementById('total_accused').value = actorNumber[0] - 1;
    document.getElementById('total_witness').value = actorNumber[1] - 1;
    
}


// CEP
function clearAddressForm() {
    //Limpa valores do formulário de cep.
    document.getElementById('address').value = ("");
    document.getElementById('neighborhood').value = ("");
    document.getElementById('city').value = ("");
    document.getElementById('state').value = ("");
}

function meu_callback(conteudo) {
    if (!("erro" in conteudo)) {
        //Atualiza os campos com os valores.
        document.getElementById('city').value = (conteudo.localidade);
        document.getElementById('id_identified_city').value = conteudo.localidade;
        document.getElementById('state').value = (conteudo.uf);
        document.getElementById('id_identified_state').value = conteudo.uf;
        address = document.getElementById('address');
        neighborhood = document.getElementById('neighborhood');
        address.value = conteudo.logradouro;
        document.getElementById('id_identified_address').value = conteudo.logradouro;
        neighborhood.value = conteudo.bairro;
        document.getElementById('id_identified_neighborhood').value = conteudo.bairro;

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
            document.getElementById('state').value = "...";

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

const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
}


function updateEnvolvedPersonForm() {
    document.getElementById('id_is_accused').checked = true;
    document.getElementById('id_person_name').value = document.getElementById('acusado1TextareaA').value;
    document.getElementById('id_person_connecton_with_unicamp').value = document.getElementById('acusado1TextareaB').value;
    document.getElementById('id_person_institute').value = document.getElementById('acusado1TextareaC').value;
    document.getElementById('id_person_relationship_with_victim').value = document.getElementById('acusado1TextareaD').value;
    document.getElementById('id_person_information_complement').value = document.getElementById('acusado1TextareaE').value;
}