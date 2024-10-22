const form = document.getElementById('contact-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const   
 name = document.getElementById('name').value;
    const email = document.getElementById('email').value;   

    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;   


    const templateParams = {
        name:   
 name,
        email: email,
        subject: subject,
        message: message
    };

    emailjs.send('template_pgu1jjs', 'service_sbtrimh', templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('Your message has been sent   
 successfully!');
        })
        .catch(function(error) {
            console.log('FAILED', error);
            alert('An error occurred while sending your message. Please try again later.');
        });
});
