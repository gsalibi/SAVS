from django.shortcuts import render
from .models import AnonymousComplaint, IdentifiedComplaint, EnvolvedPerson
from .forms import AnonymousComplaintForm, IdentifiedComplaintForm, EnvolvedPersonForm


def index_view(request):
    return render(request, "base.html")

def home_view(request):
    return render(request, "home.html")

def sobre_view(request):
    return render(request, "sobre.html")


def queixa_view(request):
    new_complaint = None
    is_identified = request.POST.get("type_complaint") == 'identified'
    identified_form = IdentifiedComplaintForm(request.POST or None)
    anonymous_form = AnonymousComplaintForm(request.POST or None)
    envolved_form = EnvolvedPersonForm(request.POST or None)

    if is_identified:
        if identified_form.is_valid():
            new_complaint = identified_form.save()
            identified_form = IdentifiedComplaintForm()
    else:
        if anonymous_form.is_valid():
            new_complaint = anonymous_form.save()
            anonymous_form = AnonymousComplaintForm()

    if new_complaint != None:
        total_accused = request.POST.get("total_accused")
        total_witness = request.POST.get("total_witness")

        # add accused
        for i in range(1, int(total_accused) + 1):
            envolved_form = EnvolvedPersonForm(request.POST or None)
            if envolved_form.is_valid():
                new_envolved = envolved_form.save(commit=False)
                new_envolved.is_accused = True
                new_envolved.person_name = request.POST.get("autor" + str(i) + "_name")
                new_envolved.person_connecton_with_unicamp = request.POST.get("autor" + str(i) + "_connection_unicamp")
                new_envolved.person_connecton_unicamp_complement = request.POST.get("autor" + str(i) + "_connection_unicamp_complement")
                new_envolved.person_institute = request.POST.get("autor" + str(i) + "_institute")
                new_envolved.person_relationship_victim = request.POST.get("autor" + str(i) + "_relationship_victim")
                new_envolved.person_relationship_victim_complement = request.POST.get("autor" + str(i) + "_relationship_victim_complement")
                new_envolved.person_information_complement = request.POST.get("autor" + str(i) + "_information_complement")
                if is_identified:
                    new_envolved.identified_complaint = new_complaint
                else:
                    new_envolved.anonymous_complaint = new_complaint
                new_envolved.save()
                envolved_form = EnvolvedPersonForm(None)
                
        # add witnesses
        for i in range(1, int(total_witness) + 1):
            envolved_form = EnvolvedPersonForm(request.POST or None)
            if envolved_form.is_valid():
                new_envolved = envolved_form.save(commit=False)
                new_envolved.is_accused = False
                new_envolved.person_name = request.POST.get("testemunha" + str(i) + "_name")
                new_envolved.person_connecton_with_unicamp = request.POST.get("testemunha" + str(i) + "_connection_unicamp")
                new_envolved.person_connecton_unicamp_complement = request.POST.get("testemunha" + str(i) + "_connection_unicamp_complement")
                new_envolved.person_institute = request.POST.get("testemunha" + str(i) + "_institute")
                new_envolved.person_relationship_victim = request.POST.get("testemunha" + str(i) + "_relationship_victim")
                new_envolved.person_relationship_victim_complement = request.POST.get("testemunha" + str(i) + "_relationship_victim_complement")
                new_envolved.person_information_complement = request.POST.get("testemunha" + str(i) + "_information_complement")
                if is_identified:
                    new_envolved.identified_complaint = new_complaint
                else:
                    new_envolved.anonymous_complaint = new_complaint
                new_envolved.save()
                envolved_form = EnvolvedPersonForm(None)
        new_complaint = None

    context = {
        'anonymous_form': anonymous_form,
        'identified_form': identified_form,
        'envolved_form': envolved_form
    }
    return render(request, "queixa.html", context)


def igualdade_view(request):
    return render(request, "igualdade.html")


def violencia_view(request):
    return render(request, "violencia-sexual.html")


def savs_view(request):
    return render(request, "savs.html")


def participe_view(request):
    return render(request, "participe.html")


def test_show_complaints_view(request):
    context = {
        'anonymous_complaints': AnonymousComplaint.objects.all(),
        'identified_complaints': IdentifiedComplaint.objects.all(),
        'envolved_people': EnvolvedPerson.objects.all()
    }
    return render(request, "TEST_SHOW_COMPLAINTS.html", context)
