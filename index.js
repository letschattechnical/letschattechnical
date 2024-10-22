const emailjs = require('emailjs-com');

// Replace 'your_service_id', 'your_template_id', and 'your_user_id' with your actual values
emailjs.send('service_sbtrimh', 'template_pgu1jjs', {
    // Your email data
}, 'letschattechnical@gmail.com')
    .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
    })
    .catch(function(error) {
        console.log('FAILED', error);
    });
