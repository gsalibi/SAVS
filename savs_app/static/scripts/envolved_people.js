function addPerson(actorType) {
    totalActors = (actorType == "autor") ? parseInt(document.getElementById('total_accused').value) + 1 : parseInt(document.getElementById('total_witness').value) + 1

    const actorName = actorType + totalActors
    const actorElement = crateParentWith(actorName);
    const br = document.createElement("br");
    const button = createButton(actorType, totalActors)
    actorElement.appendChild(button);
    const actorTitleText = createActorTitle(actorType, totalActors);
    actorElement.appendChild(actorTitleText);


    // campos
    const nameLegend = createLegend(actorName + "_name", "Qual o nome da pessoa? (caso saiba)");
    const nameField = createInputField(actorName + "_name", "Nome completo ou parcial", false);
    const nameGroup = createGroup([nameLegend, nameField]);

    const connectionUnicampLegend = createLegend(actorName + "_connection_unicamp", "Qual o vínculo da pessoa com a Unicamp? (caso saiba)");
    const connectionUnicampField = createSelectField(actorName + "_connection_unicamp", " <option>Aluna(o) de graduação</option> <option>Aluna(o) de pós-graduação</option> <option>Docente</option> <option>Terceirizada(o)</option> <option>Não possui vínculo com a Unicamp</option> <option>Outro</option> <option>Não sei</option>");
    const connectionUnicampComplementField = createInputField(actorName + "_connection_unicamp_complement", "Qual?", true);
    const connectionUnicampGroup = createGroup([connectionUnicampLegend, connectionUnicampField, connectionUnicampComplementField])

    const instituteLegend = createLegend(actorName + "_institute", "Em que instituto/faculdade/órgão da Unicamp essa pessoa estuda ou trabalha?");
    const instituteField = createInputField(actorName + "_institute", "Se houver e você souber", false);
    const instituteGroup = createGroup([instituteLegend, instituteField]);

    const relationshipVictimLegend = createLegend(actorName + "_relationship_victim", "Você possui ou possuía algum tipo vínculo com esta pessoa?");
    const relationshipVictimField = createSelectField(actorName + "_relationship_victim", " <option>Não possui nenhum vínculo</option> <option>Chefia</option> <option>Colega de trabalho</option> <option>Orientador(a)</option> <option>Colega de turma</option> <option>Amigo(a) pessoal</option> <option>Ex-namorado(a), cônjuge(a), companheiro(a)</option> <option>Outro</option>");
    const relationshipVictimComplementField = createInputField(actorName + "_relationship_victim_complement", "Qual?", true);
    const relationshipVictimGroup = createGroup([relationshipVictimLegend, relationshipVictimField, relationshipVictimComplementField])

    const informationComplementLegend = createLegend(actorName + "_information_complement", "Você tem mais alguma informação sobre essa pessoa?");
    const informationComplementField = createTextArea(actorName + "_information_complement", "Exemplos: número de telefone, informações que permitam identificá-la, etc.");
    const informationComplementGroup = createGroup([informationComplementLegend, informationComplementField])
    // fim dos campos

    actorElement.append(nameGroup, connectionUnicampGroup, instituteGroup, relationshipVictimGroup, informationComplementGroup);

    actorElement.append(br);
    document.getElementById(actorType).appendChild(actorElement);
    (actorType == "autor") ? document.getElementById('total_accused').value = totalActors : document.getElementById('total_witness').value = totalActors;
}

function crateParentWith(id) {
    const parent = document.createElement("div");
    parent.id = id;
    return parent
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

function createGroup(elements) {
    const group = document.createElement("div");
    group.className = "form-group";
    for (element of elements) {
        group.appendChild(element);
    }
    return group
}

function createTextArea(id, placeholder) {
    const textArea = document.createElement("textarea");
    textArea.className = "form-control";
    textArea.name = id;
    textArea.id = id;
    textArea.rows = "3";
    textArea.placeholder = placeholder;
    return textArea
}

function createInputField(id, placeholder, isHidden) {
    const field = document.createElement("INPUT");
    field.type = "text"
    field.className = "form-control"
    field.placeholder = placeholder
    field.id = id
    field.name = id
    if (isHidden)
        field.setAttribute("style", "display: none;");

    return field
}

function createLegend(forID, innerHTML) {
    const legend = document.createElement("LEGEND");
    legend.className = "col-form-label";
    legend.id = forID + "_legend";
    legend.setAttribute("for", forID);
    legend.innerHTML = innerHTML;

    return legend
}

function displayActorComplement(id) {
    if (document.getElementById(id).value == "Outro")
        document.getElementById(id + "_complement").style.display = "block"
    else
        document.getElementById(id + "_complement").style.display = "none"
}

function createSelectField(id, innerHTML) {
    const select = document.createElement("SELECT");
    select.className = "form-control"
    select.placeholder = "Nome completo ou parcial"
    select.id = id
    select.name = id
    select.setAttribute("onChange", "displayActorComplement('" + id + "')");
    select.innerHTML = innerHTML

    return select
}

function getActorTitleText(actorType, actorIndex) {
    const complement = (actorType == "autor") ? "(a) " : " ";
    return capitalize(actorType) + complement + actorIndex + ":";
}

function createActorTitle(actorType, actorIndex) {
    p = document.createElement("p");
    p.id = actorType + actorIndex + "_title";
    p.appendChild(document.createTextNode(getActorTitleText(actorType, actorIndex)));
    return p
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

function updateAuthors(actorType, removedIndex, currentIndex) {
    for (let i = removedIndex + 1; i <= currentIndex; i++) {
        // update id
        document.getElementById(actorType + i).id = actorType + (i - 1)

        // update title text
        document.getElementById(actorType + i + "_title").firstChild.data = getActorTitleText(actorType, (i - 1))
        document.getElementById(actorType + i + "_title").id = actorType + (i - 1) + "_title";

        // update button
        document.getElementById("remove_" + actorType + i).setAttribute("onClick", "removeAuthor('" + actorType + "', " + (i - 1) + ")");
        document.getElementById("remove_" + actorType + i).id = "remove_" + actorType + (i - 1);

        // update campos
        document.getElementById(actorType + i + "_name_legend").setAttribute("for", actorType + (i - 1) + "_name");
        document.getElementById(actorType + i + "_connection_unicamp_legend").setAttribute("for", actorType + (i - 1) + "_connection_unicamp");
        document.getElementById(actorType + i + "_institute_legend").setAttribute("for", actorType + (i - 1) + "_institute");
        document.getElementById(actorType + i + "_relationship_victim_legend").setAttribute("for", actorType + (i - 1) + "_relationship_victim");
        document.getElementById(actorType + i + "_information_complement_legend").setAttribute("for", actorType + (i - 1) + "_information_complement");

        document.getElementById(actorType + i + "_connection_unicamp").name = actorType + (i - 1) + "_connection_unicamp";
        document.getElementById(actorType + i + "_connection_unicamp_complement").name = actorType + (i - 1) + "_connection_unicamp_complement";
        document.getElementById(actorType + i + "_institute").name = actorType + (i - 1) + "_institute";
        document.getElementById(actorType + i + "_name").name = actorType + (i - 1) + "_name"
        document.getElementById(actorType + i + "_relationship_victim").name = actorType + (i - 1) + "_relationship_victim";
        document.getElementById(actorType + i + "_relationship_victim_complement").name = actorType + (i - 1) + "_relationship_victim_complement";
        document.getElementById(actorType + i + "_information_complement").name = actorType + (i - 1) + "_information_complement";

        document.getElementById(actorType + i + "_connection_unicamp").setAttribute("onChange", "displayActorComplement('" + actorType + (i - 1) + "_connection_unicamp')");
        document.getElementById(actorType + i + "_relationship_victim").setAttribute("onChange", "displayActorComplement('" + actorType + (i - 1) + "_relationship_victim')");

        document.getElementById(actorType + i + "_name_legend").id = actorType + (i - 1) + "_name_legend";
        document.getElementById(actorType + i + "_name").id = actorType + (i - 1) + "_name"
        document.getElementById(actorType + i + "_connection_unicamp_legend").id = actorType + (i - 1) + "_connection_unicamp_legend"
        document.getElementById(actorType + i + "_connection_unicamp").id = actorType + (i - 1) + "_connection_unicamp"
        document.getElementById(actorType + i + "_connection_unicamp_complement").id = actorType + (i - 1) + "_connection_unicamp_complement"
        document.getElementById(actorType + i + "_institute_legend").id = actorType + (i - 1) + "_institute_legend";
        document.getElementById(actorType + i + "_institute").id = actorType + (i - 1) + "_institute";
        document.getElementById(actorType + i + "_relationship_victim_legend").id = actorType + (i - 1) + "_relationship_victim_legend";
        document.getElementById(actorType + i + "_relationship_victim").id = actorType + (i - 1) + "_relationship_victim";
        document.getElementById(actorType + i + "_relationship_victim_complement").id = actorType + (i - 1) + "_relationship_victim_complement";
        document.getElementById(actorType + i + "_information_complement_legend").id = actorType + (i - 1) + "_information_complement_legend";
        document.getElementById(actorType + i + "_information_complement").id = actorType + (i - 1) + "_information_complement";
    }
}

const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
}