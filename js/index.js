// Fonction pour activer le mode sombre
function darkMode() {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
        document.getElementById("logo").src = "img/logo-blanc.png";
    } else {
        document.getElementById("logo").src = "img/logo-noir.png";
    }
}

document.getElementById("darkmode").addEventListener("click", darkMode);

// Fonction pour ouvrir et fermer le menu responsive
function menuResponsive() {
    document.querySelector("nav").classList.toggle("active");
    const toggleButton = document.getElementById("toggle-button");
    toggleButton.classList.toggle("fa-bars");
    toggleButton.classList.toggle("fa-times");
}

document.getElementById("toggle-button").addEventListener("click", menuResponsive);

// Fermeture du menu responsive au scroll
window.addEventListener("scroll", function () {
    document.querySelector("nav").classList.remove("active");
    document.getElementById("toggle-button").classList.add("fa-bars");
    document.getElementById("toggle-button").classList.remove("fa-times");
});

// Fonction pour ouvrir la modale d'inscription à la newsletter
function openNewsletterModal() {
    const newsletter = document.createElement("div");
    newsletter.classList.add("form-container");
    newsletter.innerHTML = `
        <i class="fas fa-times" id="close-newsletter"></i>
        <h3 class="subtitle">Inscription à la newsletter</h3>
        <form>
            <input type="email" id="email-input" placeholder="Votre adresse mail">
            <button type="button" id="subscribe-button">S'inscrire</button>
        </form>
    `;
    
    document.body.appendChild(newsletter);

    // Gérer le clic sur le bouton d'inscription
    const subscribeButton = document.getElementById("subscribe-button");
    subscribeButton.addEventListener("click", function() {
        const emailInput = document.getElementById("email-input");
        const email = emailInput.value.trim(); // Récupérer la valeur de l'e-mail

        if (email !== "") {
            const successMessage = document.createElement("p");
            successMessage.textContent = "Merci pour votre inscription à la newsletter";
            newsletter.querySelector("form").style.display = "none";
            newsletter.appendChild(successMessage);
        } else {
            alert("Veuillez entrer une adresse mail valide");
        }
    });

    // Gérer le clic sur le bouton de fermeture
    document.getElementById("close-newsletter").addEventListener("click", function() {
        newsletter.remove();
    });
}

// Ouvrir la modale d'inscription à la newsletter lorsque le bouton est cliqué
document.getElementById("newsletter").addEventListener("click", openNewsletterModal);






// Modale contact
const contactButton = document.querySelector('#contact-button');

contactButton.addEventListener("click", () => {
    const isContactExist = document.querySelector('dialog');
    if(isContactExist !== null){
        closeContact(isContactExist);
        isContactExist.remove();
        return;
    }
        openContact();
        if(nav.classList.contains('active')){
            menuResponive();
        }
});


function closeContact(isContactExist){
    isContactExist.remove();
}

function openContact(){
    const formulaire =`
    <dialog open>
    <i class="fa-solid fa-x closeContact"></i>
    <h1 class="subtitle">Contactez-nous</h1>
    <form action="#" method="">
        <input id="name" type="text" placeholder="Votre nom et prénom">
        <input id="phone" type="tel" placeholder="Votre numéro de téléphone">
        <input id="company" type="text" placeholder="Le nom de votre entreprise">
        <input id="mail" type="email" placeholder="Votre adresse mail">
        <select>
            <option value="Je veux des renseignements concernant l'accompagnement perso">Je veux des renseignements concernant l'accompagnement perso</option>
            <option value="Je veux des renseignements concernant l'accompagnement small group">Je veux des renseignements concernant l'accompagnement small group</option>
            <option value="Je veux des renseignements concernant la formation digitale">Je veux des renseignements concernant la formation digitale</option>
            <option value="Je veux des renseignements concernant le coaching digital">Je veux des renseignements concernant le coaching digital</option>
            <option value="J'ai une autre demande">J'ai une autre demande</option>
        </select>
        <textarea cols="30" rows="10" placeholder="Précisez votre demande afin de faciliter l'échange lorsqu'un de nos conseillers vous appellera"></textarea>
        <label for="RGPD"><input id="RGPD" type="checkbox" required="required">  En soumettant ce formulaire, j'accepte que les informations saisies soient transmises par mail à l'équipe de SkillFacile dans le but d'être recontacté concernant la demande effectuée. Je comprends que j'ai un droit de modification, d'accès et de suppression de mes informations personnelles.</label>
        <input id="submit" type="submit" value="Envoyer la demande">                    
    </form>
</dialog>
    `;
    const emplacement = document.querySelector('#admin');
    emplacement.insertAdjacentHTML('beforebegin', formulaire);

    const closeButton = document.querySelector('.closeContact');
    const dialog = document.querySelector('dialog');

    closeButton.addEventListener("click", () => {
        dialog.remove();
    });


     // Message contact envoyé

     const sendButton = document.querySelector("#submit");

     sendButton.addEventListener("click", (e) => {
        //  if(inputElement.value !== ""){
            const form = document.querySelector("form");
            const RGPD = document.querySelector("#RGPD");
            
            // let bool = RGPD.ckecked;

            // console.log(RGPD.checked);
            if(RGPD.checked){
                const message = `<p>Votre message à bien été envoyé</p>`;
                form.style.display = "none";
                const titre = document.querySelector('h1');
                titre.insertAdjacentHTML("beforeend", message);
                RGPD.checked = false; 
            }
        
         e.preventDefault();
     });
}




























    
