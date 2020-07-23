function displayForms() {
    if (document.getElementById("inlineIdentified").checked) {
        document.getElementById("form-identified").style.display = "block";
        document.getElementById("identified-text").style.display = "block";
        document.getElementById("anonymous-text").style.display = "none";
        document.getElementById("anonymous-questions").style.display = "none";
        updateIDs(true)
        updateRequired(true)
    } else {
        document.getElementById("form-identified").style.display = "none";
        document.getElementById("identified-text").style.display = "none";
        document.getElementById("anonymous-text").style.display = "block";
        document.getElementById("anonymous-questions").style.display = "block";
        updateIDs(false)
        updateRequired(false)
    }
    document.getElementById("form-1").style.display = "block";
    document.getElementById("form-2").style.display = "block";
    document.getElementById("submit").style.display = "block";
}


function updateIDs(isIdentified) {
    if (isIdentified) {
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


function displayUniversityInfos(id_base) {
    alert(id_base + "_connection_unicamp_complement")
    var selected = document.getElementById(id_base + "_connection_unicamp").value;

    if (selected === "Aluna(o) de graduação" || selected === "Aluna(o) de pós-graduação") {
        document.getElementById(id_base + "_connection_unicamp_complement").style.display = "none";
        document.getElementById(id_base + "_course").style.display = "block";
        document.getElementById(id_base + "_ra").style.display = "block";
        document.getElementById(id_base + "_institute").style.display = "block";
    } else if (selected === "Docente") {
        document.getElementById(id_base + "_connection_unicamp_complement").style.display = "none";
        document.getElementById(id_base + "_course").style.display = "none";
        document.getElementById(id_base + "_ra").style.display = "block";
        document.getElementById(id_base + "_institute").style.display = "block";
    } else if (selected === "Outro") {
        document.getElementById(id_base + "_connection_unicamp_complement").style.display = "block";
        document.getElementById(id_base + "_course").style.display = "none";
        document.getElementById(id_base + "_ra").style.display = "none";
        document.getElementById(id_base + "_institute").style.display = "none";
    } else {
        document.getElementById(id_base + "_connection_unicamp_complement").style.display = "none";
        document.getElementById(id_base + "_course").style.display = "none";
        document.getElementById(id_base + "_ra").style.display = "none";
        document.getElementById(id_base + "_institute").style.display = "none";
    }

}

function displayOpenField(element, options, fieldID) {
    for (option of options) {
        if (element.selectedIndex == option) {
            document.getElementById(fieldID).style.display = "block";
            document.getElementById(fieldID).required = true;
            break;
        } else {
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




function createButton(actorType, actorIndex) {
    const button = document.createElement("button");
    button.className = "bttn";
    button.id = "remove_" + actorType + actorIndex;
    button.type = "button";
    button.setAttribute("onClick", "removeAuthor('" + actorType + "', " + actorIndex + ")");
    button.innerHTML = '<i class="fas fa-times"></i>';
    return button
}

function crateParent(id) {
    const parent = document.createElement("div");
    parent.id = id;
    return parent
}

function createGroup(elements) {
    const group = document.createElement("div");
    group.className = "form-group";
    for (element of elements) {
        group.appendChild(element);
    }
    return group
}

function createTextArea(id) {
    const textArea = document.createElement("textarea");
    textArea.className = "form-control";
    textArea.name = id;
    textArea.id = id;
    textArea.rows = "3";
    textArea.placeholder = "Você tem mais alguma informação sobre essa pessoa? Exemplos: número de telefone, informações que permitam identificá-la, etc.";
    return textArea
}

function getActorTitleText(actorType, actorIndex) {
    const complement = (actorType == "autor") ? "(a) " : " ";
    return capitalize(actorType) + complement + actorIndex + ":";
}


function addPerson(actorType) {
    totalActors = (actorType == "autor") ? parseInt(document.getElementById('total_accused').value) + 1 : parseInt(document.getElementById('total_witness').value) + 1

    const actorName  = actorType + totalActors
    const actorElement = crateParent(actorName);
    const actorTitleText = document.createTextNode(getActorTitleText(actorType, totalActors));
    const br = document.createElement("br");
    const button = createButton(actorType, totalActors)

    actorElement.appendChild(actorTitleText);
    actorElement.appendChild(button);

    // para cada campo
    var campo1 = createTextArea(actorName + "_person_information_complement");
    var group = createGroup([campo1]);
    actorElement.append(group);


    actorElement.append(br);
    document.getElementById(actorType).appendChild(actorElement);
    (actorType == "autor") ? document.getElementById('total_accused').value = totalActors : document.getElementById('total_witness').value = totalActors;
}


function updateAuthors(actorType, removedIndex, currentIndex) {
    for (let i = removedIndex + 1; i <= currentIndex; i++) {
        // update title text
        document.getElementById(actorType + i).firstChild.data = getActorTitleText(actorType, (i - 1))
        document.getElementById(actorType + i).id = actorType + (i - 1);

        // update button
        document.getElementById("remove_" + actorType + i).setAttribute("onClick", "removeAuthor('" + actorType + "', " + (i - 1) + ")");
        document.getElementById("remove_" + actorType + i).id = "remove_" + actorType + (i - 1);

        // update campos
        document.getElementById(actorType + i + "_person_information_complement").name = actorType + (i-1) + "_person_information_complement"
        document.getElementById(actorType + i + "_person_information_complement").id = actorType + (i-1) + "_person_information_complement"
    }
}

function removeAuthor(actorType, actorIndex) {
    var element = document.getElementById(actorType + actorIndex);
    element.parentNode.removeChild(element);

    if (actorType == 'autor') {
        updateAuthors(actorType, actorIndex, parseInt(document.getElementById('total_accused').value))
        document.getElementById('total_accused').value = parseInt(document.getElementById('total_accused').value) - 1;
    } else {
        updateAuthors(actorType, actorIndex, parseInt(document.getElementById('total_witness').value))
        document.getElementById('total_witness').value = parseInt(document.getElementById('total_witness').value) - 1;
    }
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