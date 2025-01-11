
     // Fonction de réservation
     document.getElementById('reservation-form').addEventListener('submit', function(event) {
         event.preventDefault(); // Empêche le rechargement de la page
         let name = document.getElementById('name').value;
         let date = document.getElementById('date').value;
let time = document.getElementById('time').value;
         let people = document.getElementById('people').value;
         let message = `Merci name ! Votre réservation pour{people} personnes est confirmée le date à{time}.`;
         document.getElementById('reservation-message').textContent = message;
     });

     // Fonction de contact
     document.getElementById('contact-form').addEventListener('submit', function(event) {
         event.preventDefault(); // Empêche le rechargement de la page
         let contactName = document.getElementById('contact-name').value;
         let contactEmail = document.getElementById('contact-email').value;
         let contactMessage = document.getElementById('contact-message').value;
         alert(`Message envoyé par contactName ({contactEmail}) :\n\n${contactMessage}`);
     });
     