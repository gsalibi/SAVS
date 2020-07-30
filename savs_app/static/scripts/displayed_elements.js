
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
        document.getElementById("id_identified_institute").required = true
        document.getElementById("id_identified_ra").required = true
        document.getElementById("id_identified_course").required = true
        document.getElementById("id_anonymous_support_requested_complement").required = false
    } else {
        document.getElementById("id_identified_name").required = false
        document.getElementById("id_identified_cpf").required = false
        document.getElementById("id_identified_zipcode").required = false
        document.getElementById("id_identified_address_number").required = false
        document.getElementById("id_identified_email").required = false
        document.getElementById("id_identified_telephone").required = false
        document.getElementById("id_identified_institute").required = false
        document.getElementById("id_identified_ra").required = false
        document.getElementById("id_identified_course").required = false
        document.getElementById("id_anonymous_support_requested_complement").required = true
    }
}

function displayUniversityInfos(id_base) {
    var selected = document.getElementById(id_base + "_connection_unicamp").value;

    if (selected === "Aluna(o) de graduação" || selected === "Aluna(o) de pós-graduação") {
        document.getElementById(id_base + "_connection_unicamp_complement").style.display = "none";
        document.getElementById(id_base + "_connection_unicamp_complement").required = false
        document.getElementById(id_base + "_course").style.display = "block";
        document.getElementById(id_base + "_course").required = true
        document.getElementById(id_base + "_ra").style.display = "block";
        document.getElementById(id_base + "_ra").required = true
        document.getElementById(id_base + "_institute").style.display = "block";
        document.getElementById(id_base + "_institute").required = true
    } else if (selected === "Docente") {
        document.getElementById(id_base + "_connection_unicamp_complement").style.display = "none";
        document.getElementById(id_base + "_connection_unicamp_complement").required = false
        document.getElementById(id_base + "_course").style.display = "none";
        document.getElementById(id_base + "_course").required = false
        document.getElementById(id_base + "_ra").style.display = "block";
        document.getElementById(id_base + "_ra").required = true
        document.getElementById(id_base + "_institute").style.display = "block";
        document.getElementById(id_base + "_institute").required = true
    } else if (selected === "Outro") {
        document.getElementById(id_base + "_connection_unicamp_complement").style.display = "block";
        document.getElementById(id_base + "_connection_unicamp_complement").required = true
        document.getElementById(id_base + "_course").style.display = "none";
        document.getElementById(id_base + "_course").required = false
        document.getElementById(id_base + "_ra").style.display = "none";
        document.getElementById(id_base + "_ra").required = false
        document.getElementById(id_base + "_institute").style.display = "none";
        document.getElementById(id_base + "_institute").required = false
    } else {
        document.getElementById(id_base + "_connection_unicamp_complement").style.display = "none";
        document.getElementById(id_base + "_connection_unicamp_complement").required = false
        document.getElementById(id_base + "_course").style.display = "none";
        document.getElementById(id_base + "_course").required = false
        document.getElementById(id_base + "_ra").style.display = "none";
        document.getElementById(id_base + "_ra").required = false
        document.getElementById(id_base + "_institute").style.display = "none";
        document.getElementById(id_base + "_institute").required = false
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
    if (element.checked) {
        document.getElementById(fieldID).style.display = "block";
        document.getElementById(fieldID).required = true;
    } else {
        document.getElementById(fieldID).style.display = "none";
        document.getElementById(fieldID).required = false;
    }
}

function displayDateComplement(selectedDateOption) {
    if (selectedDateOption === "Eu sei a data exata") {
        document.getElementById("id_anonymous_episode_date_complement").type = "date";
    } else if (selectedDateOption === "Eu não sei a data exata, mas sei aproximadamente") {
        document.getElementById("id_anonymous_episode_date_complement").type = "text";
        document.getElementById("id_anonymous_episode_date_complement").placeholder = "Se possível, indique se foi há um mês, há mais de 6 meses, há 1 ano etc";
    }
}

function displayDatePeriodComplement(selectedDateOption) {
    if (selectedDateOption === "Eu sei o horário exato") {
        document.getElementById("id_anonymous_episode_date_period_complement").type = "time";
    } else if (selectedDateOption === "Eu não sei o horário, mas sei aproximadamente") {
        document.getElementById("id_anonymous_episode_date_period_complement").type = "text";
        document.getElementById("id_anonymous_episode_date_period_complement").placeholder = "Se possível, indique se foi de manhã, à tarde, à noite etc";
    }
}