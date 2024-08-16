document.getElementById('emailbutton').addEventListener('click', function () {
    
    const email = 'daim_choudhary@yahoo.co.uk';
    const subject = 'Subject Here';

    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}`;

});