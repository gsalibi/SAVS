from django.db import models

COMPLAINER_POSITION = (
    ("Eu sou a pessoa que vivenciou esse episódio", "Eu sou a pessoa que vivenciou esse episódio"),
    ("Eu testemunhei esse episódio", "Eu testemunhei esse episódio"),
    ("Eu recebi um relato de uma pessoa que vivenciou esse episódio", "Eu recebi um relato de uma pessoa que vivenciou esse episódio"),
    ("Eu fui acusado(a) de ser autor(a) de um episódio", "Eu fui acusado(a) de ser autor(a) de um episódio"),
    ("Outro", "Outro"),
)

COMPLAINER_GENDER = (
    ("Mulher (trans ou cis)", "Mulher (trans ou cis)"),
    ("Homem (trans ou cis)", "Homem (trans ou cis)"),
    ("Gênero Não-binário", "Gênero Não-binário"),
    ("Outro", "Outro"),
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
    ("Não tenho vínculo com a universidade", "Não tenho vínculo com a universidade"),
)

COMPLAINER_WHY_ANONYMOUS = (
    ("Porque a pessoa que vivenciou o episódio não quer fazer uma queixa", "Porque a pessoa que vivenciou o episódio não quer fazer uma queixa"),
    ("Porque tenho medo de retaliações que possam prejudicar a minha carreira e/ou a minha vida acadêmica", "Porque tenho medo de retaliações que possam prejudicar a minha carreira e/ou a minha vida acadêmica"),
    ("Porque não quero receber apoio e orientações do SAVS", "Porque não quero receber apoio e orientações do SAVS"),
    ("Porque meu objetivo é que a universidade apenas tenha conhecimento deste episódio", "Porque meu objetivo é que a universidade apenas tenha conhecimento deste episódio"),
    ("Outro", "Outro"),
)

EPISODE_DATE = (
    ("Na semana passada", "Na semana passada"),
    ("No mês passado", "No mês passado"),
    ("No ano passado", "No ano passado"),
    ("Eu sei a data exata", "Eu sei a data exata"),
    ("Não sei", "Não sei"),
)

EPISODE_PERIOD = (
    ("Manhã", "Manhã"),
    ("Tarde", "Tarde"),
    ("Noite", "Noite"),
    ("Madrugada", "Madrugada"),
    ("Eu sei o horário exato", "Eu sei o horário exato"),
    ("Não sei", "Não sei"),
)

EPISODE_LOCATION = (
    ("Na universidade", "Na universidade"),
    ("Na minha casa", "Na minha casa"),
    ("Em uma festa", "Em uma festa"),
    ("Em um bar", "Em um bar"),
    ("Foi online, por meio de:", "Foi online, por meio de:"),
    ("Outro:", "Outro:"),
    ("Não sei", "Não sei"),
)

class AnonymousComplaint(models.Model):
    anonymous_position = models.TextField(choices=COMPLAINER_POSITION, default=None)
    anonymous_position_complement = models.TextField(null=True, blank=True)
    anonymous_gender = models.TextField(choices=COMPLAINER_GENDER, default=None)
    anonymous_gender_complement = models.TextField(null=True, blank=True)
    anonymous_connection_unicamp = models.TextField(choices=COMPLAINER_CONNECTION_UNICAMP, default=None)
    anonymous_connection_unicamp_complement = models.TextField(null=True, blank=True)
    anonymous_support_requested = models.TextField(choices=COMPLAINER_SUPPORT_REQUESTED, default=None)
    anonymous_support_requested_complement = models.TextField(null=True, blank=True)
    anonymous_why_anonymous = models.TextField(choices=COMPLAINER_WHY_ANONYMOUS, default=None)
    anonymous_why_anonymous_complement = models.TextField(null=True, blank=True)
    anonymous_episode_date = models.TextField(choices=EPISODE_DATE, default=None)
    anonymous_episode_date_complement = models.TextField(null=True, blank=True)
    anonymous_episode_date_period = models.TextField(choices=EPISODE_PERIOD, default=None)
    anonymous_episode_date_period_complement = models.TextField(null=True, blank=True)
    anonymous_episode_location = models.TextField(choices=EPISODE_LOCATION, default=None)
    anonymous_episode_location_complement = models.TextField(null=True, blank=True)
    anonymous_episode_report = models.TextField(default=None)


class IdentifiedComplaint(models.Model):
    identified_position = models.TextField(choices=COMPLAINER_POSITION, default=None)
    identified_position_complement = models.TextField(null=True, blank=True)
    identified_gender = models.TextField(choices=COMPLAINER_GENDER, default=None)
    identified_gender_complement = models.TextField(null=True, blank=True)
    identified_name = models.TextField(default=None)
    identified_cpf = models.TextField(default=None)
    identified_is_social_name = models.BooleanField(null=True, default=None)
    identified_zipcode = models.TextField(default=None)
    identified_neighborhood = models.TextField(default=None)
    identified_city = models.TextField(default=None)
    identified_state = models.TextField(default=None)
    identified_address = models.TextField(default=None)
    identified_address_number = models.TextField(default=None)
    identified_email = models.TextField(default=None)
    identified_telephone = models.TextField(default=None)
    identified_connection_unicamp = models.TextField(choices=COMPLAINER_CONNECTION_UNICAMP, default=None)
    identified_connection_unicamp_complement = models.TextField(null=True, blank=True)
    identified_institute = models.TextField(null=True, blank=True)
    identified_ra = models.TextField(null=True, blank=True)
    identified_course = models.TextField(null=True, blank=True)
    identified_episode_date = models.TextField(choices=EPISODE_DATE, default=None)
    identified_episode_date_complement = models.TextField(null=True, blank=True)
    identified_episode_date_period = models.TextField(choices=EPISODE_PERIOD, default=None)
    identified_episode_date_period_complement = models.TextField(null=True, blank=True)
    identified_episode_location = models.TextField(choices=EPISODE_LOCATION, default=None)
    identified_episode_location_complement = models.TextField(null=True, blank=True)
    identified_episode_report = models.TextField(default=None)


class EnvolvedPerson(models.Model):
    anonymous_complaint = models.ForeignKey(
        AnonymousComplaint, on_delete=models.CASCADE, null=True, blank=True)
    identified_complaint = models.ForeignKey(
        IdentifiedComplaint, on_delete=models.CASCADE, null=True, blank=True)
    is_accused = models.BooleanField(default=None)
    person_name = models.TextField(null=True, blank=True)
    person_connecton_with_unicamp = models.TextField(null=True, blank=True)
    person_institute = models.TextField(null=True, blank=True)
    person_relationship_with_victim = models.TextField(null=True, blank=True)
    person_information_complement = models.TextField(null=True, blank=True)
