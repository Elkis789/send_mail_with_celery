from django.shortcuts import render

def send_mail(request):
    if request.method == 'POST':
        subject = request.POST.get('subject')
        email = request.POST.get('email')
        message = request.POST.get('message')
        print(subject, email, message)
        if 'file' in request.FILES:
            file = request.FILES['file']
            print(file)
    return render(request, 'send_mail.html')