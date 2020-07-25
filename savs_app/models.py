from django.db import models

COMPLAINER_POSITION = (
    (
        "Eu sou a pessoa que vivenciou esse episódio",
        "Eu sou a pessoa que vivenciou esse episódio",
    ),
    ("Eu testemunhei esse episódio", "Eu testemunhei esse episódio"),
    (
        "Eu recebi um relato de uma pessoa que vivenciou esse episódio",
        "Eu recebi um relato de uma pessoa que vivenciou esse episódio",
    ),
    (
        "Eu fui acusado(a) de ser autor(a) de um episódio",
        "Eu fui acusado(a) de ser autor(a) de um episódio",
    ),
    ("Outro", "Outro"),
)

COMPLAINER_GENDER = (
    ("Mulher (trans ou cis)", "Mulher (trans ou cis)"),
    ("Homem (trans ou cis)", "Homem (trans ou cis)"),
    ("Gênero Não-binário", "Gênero Não-binário"),
    ("Outro", "Outro"),
    ("Prefiro não responder", "Prefiro não responder"),
)

COMPLAINER_RACE = (
    ("Branco(a)", "Branco(a)"),
    ("Preto(a)", "Preto(a)"),
    ("Amarelo(a) ", "Amarelo(a)"),
    ("Indígena", "Indígena"),
    ("Prefiro não responder", "Prefiro não responder"),
)

COMPLAINER_SUPPORT_REQUESTED = (
    ("Sim", "Sim"),
    ("Não", "Não"),
    ("Não sei dizer", "Não sei dizer"),
)

COMPLAINER_CONNECTION_UNICAMP = (
    ("Aluna(o) de graduação", "Aluna(o) de graduação"),
    ("Aluna(o) de pós-graduação", "Aluna(o) de pós-graduação"),
    ("Terceirizada(o)", "Terceirizada(o)"),
    ("Docente", "Docente"),
    ("Outro", "Outro"),
    ("Sem vínculo com a universidade", "Sem vínculo com a universidade"),
    ("Não sei", "Não sei"),
)

EPISODE_DATE = (
    ("Eu sei a data exata", "Eu sei a data exata"),
    ("Eu não sei a data exata, mas sei aproximadamente", "Eu não sei a data exata, mas sei aproximadamente"),
    ("Não há uma data específica, pois são episódios recorrentes, que continuam acontecendo", "Não há uma data específica, pois são episódios recorrentes, que continuam acontecendo"),
    ("Não há uma data específica, pois eram episódios recorrentes, mas que já deixaram de acontecer", "Não há uma data específica, pois eram episódios recorrentes, mas que já deixaram de acontecer"),
    ("Outro", "Outro"),
)

EPISODE_PERIOD = (
    ("Eu sei o horário exato", "Eu sei o horário exato"),
    ("Eu não sei o horário, mas sei aproximadamente", "Eu não sei o horário, mas sei aproximadamente"),
    ("Não há um horário específico, pois tratam-se de episódios recorrentes. ", "Não há um horário específico, pois tratam-se de episódios recorrentes. "),
    ("Não sei o horário", "Não sei o horário"),
)

EPISODE_LOCATION = (
    ("Na universidade", "Na universidade"),
    ("Na minha casa", "Na minha casa"),
    ("Em uma festa", "Em uma festa"),
    ("Outro", "Outro"),
    ("Foram em vários lugares", "Foram em vários lugares"),
    ("Não foi em um local físico, foi online", "Não foi em um local físico, foi online"),
    ("Não sei o local", "Não sei o local"),
)


PERSON_RELATIONSHIP_VICTIM = (
    ("Não possui nenhum vínculo", "Não possui nenhum vínculo"),
    ("Chefia", "Chefia"),
    ("Colega de trabalho", "Colega de trabalho"),
    ("Orientador(a)", "Orientador(a)"),
    ("Colega de turma", "Colega de turma"),
    ("Amigo(a) pessoal", "Amigo(a) pessoal"),
    ("Ex-namorado(a), cônjuge(a), companheiro(a)", "Ex-namorado(a), cônjuge(a), companheiro(a)"),
    ("Outro", "Outro"),
)

REPORT_STATUS = (
    ("Atendimento não iniciado", "Atendimento não iniciado"),
    ("Em andamento", "Em andamento"),
    ("Atendimento finalizado", "Atendimento finalizado"),
    ("Aguardando retorno", "Aguardando retorno"),
    ("Invalida", "Invalida"),
)


class AnonymousComplaint(models.Model):
    anonymous_position = models.TextField(choices=COMPLAINER_POSITION, default=None)
    anonymous_position_complement = models.TextField(null=True, blank=True)
    anonymous_gender = models.TextField(choices=COMPLAINER_GENDER, default=None)
    anonymous_gender_complement = models.TextField(null=True, blank=True)
    anonymous_race = models.TextField(choices=COMPLAINER_RACE, default=None)
    anonymous_connection_unicamp = models.TextField(choices=COMPLAINER_CONNECTION_UNICAMP, default=None)
    anonymous_connection_unicamp_complement = models.TextField(null=True, blank=True)
    anonymous_support_requested = models.TextField(
        choices=COMPLAINER_SUPPORT_REQUESTED, default=None
    )
    anonymous_support_requested_complement = models.TextField(null=True, blank=True)
    anonymous_why_anonymous1 = models.BooleanField(default=False)
    anonymous_why_anonymous2 = models.BooleanField(default=False)
    anonymous_why_anonymous3 = models.BooleanField(default=False)
    anonymous_why_anonymous4 = models.BooleanField(default=False)
    anonymous_why_anonymous5 = models.BooleanField(default=False)
    anonymous_why_anonymous_complement = models.TextField(null=True, blank=True)
    anonymous_episode_date = models.TextField(choices=EPISODE_DATE, default=None)
    anonymous_episode_date_complement = models.TextField(null=True, blank=True)
    anonymous_episode_date_period = models.TextField(
        choices=EPISODE_PERIOD, default=None
    )
    anonymous_episode_date_period_complement = models.TextField(null=True, blank=True)
    anonymous_episode_location = models.TextField(
        choices=EPISODE_LOCATION, default=None
    )
    anonymous_episode_location_complement = models.TextField(null=True, blank=True)
    anonymous_episode_report = models.TextField(default=None)
    anonymous_created = models.DateTimeField(auto_now_add=True, null=True)
    anonymous_updated_at = models.DateTimeField(auto_now=True, null=True)
    anonymous_current_status = models.TextField(
        choices=REPORT_STATUS, default=None, null=True
    )


class IdentifiedComplaint(models.Model):
    identified_position = models.TextField(choices=COMPLAINER_POSITION, default=None)
    identified_position_complement = models.TextField(null=True, blank=True)
    identified_gender = models.TextField(choices=COMPLAINER_GENDER, default=None)
    identified_gender_complement = models.TextField(null=True, blank=True)
    identified_race = models.TextField(choices=COMPLAINER_RACE, default=None)
    identified_name = models.TextField(default=None)
    identified_cpf = models.TextField(default=None)
    identified_is_social_name = models.BooleanField(default=False)
    identified_zipcode = models.TextField(default=None)
    identified_neighborhood = models.TextField(default=None)
    identified_city = models.TextField(default=None)
    identified_state = models.TextField(default=None)
    identified_address = models.TextField(default=None)
    identified_address_number = models.TextField(default=None)
    identified_email = models.TextField(default=None)
    identified_telephone = models.TextField(default=None)
    identified_connection_unicamp = models.TextField(
        choices=COMPLAINER_CONNECTION_UNICAMP, default=None
    )
    identified_connection_unicamp_complement = models.TextField(null=True, blank=True)
    identified_institute = models.TextField(null=True, blank=True)
    identified_ra = models.TextField(null=True, blank=True)
    identified_course = models.TextField(null=True, blank=True)
    identified_episode_date = models.TextField(choices=EPISODE_DATE, default=None)
    identified_episode_date_complement = models.TextField(null=True, blank=True)
    identified_episode_date_period = models.TextField(
        choices=EPISODE_PERIOD, default=None
    )
    identified_episode_date_period_complement = models.TextField(null=True, blank=True)
    identified_episode_location = models.TextField(
        choices=EPISODE_LOCATION, default=None
    )
    identified_episode_location_complement = models.TextField(null=True, blank=True)
    identified_episode_report = models.TextField(default=None)
    identified_created = models.DateTimeField(auto_now_add=True, null=True)
    identified_updated_at = models.DateTimeField(auto_now=True, null=True)
    identified_current_status = models.TextField(
        choices=REPORT_STATUS, default=None, null=True
    )


class EnvolvedPerson(models.Model):
    anonymous_complaint = models.ForeignKey(
        AnonymousComplaint, on_delete=models.CASCADE, null=True, blank=True
    )
    identified_complaint = models.ForeignKey(
        IdentifiedComplaint, on_delete=models.CASCADE, null=True, blank=True
    )
    is_accused = models.BooleanField(default=None)
    person_name = models.TextField(null=True, blank=True)
    person_connecton_unicamp = models.TextField(choices=COMPLAINER_CONNECTION_UNICAMP, default=None)
    person_connecton_unicamp_complement = models.TextField(null=True, blank=True)
    person_institute = models.TextField(null=True, blank=True)
    person_relationship_victim = models.TextField(choices=PERSON_RELATIONSHIP_VICTIM, default=None)
    person_relationship_victim_complement = models.TextField(null=True, blank=True)
    person_information_complement = models.TextField(null=True, blank=True)


class AnonComplainSummary(AnonymousComplaint):
    class Meta:
        proxy = True
        verbose_name = 'Anonymous Complaint Summary'
        verbose_name_plural = "Anonymous Complaint Summary"
