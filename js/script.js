 // Fonction appelée lors de la soumission du formulaire
 function generateQRCode() {
    // Récupérer les valeurs des champs de formulaire
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;

    // Créer un code QR à partir des données
    var qrcode = new QRCode(document.getElementById("qrcode"), {
        text: "Nom : " + name + "\nEmail : " + email,
        width: 256,
        height: 256,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });
    var qrCodeMessage1 = document.getElementById("qr-code-message1");
    var qrCodeMessage2 = document.getElementById("qr-code-message2");
    var sub = document.getElementById("sub");
    // qrCodeMessage3.innerHTML = "Hi " + name + "!";
    qrCodeMessage1.innerHTML = "<span class='message'>Your QR code has been generated</span>";
    // qrCodeMessage2.innerHTML = "Please check your email to receive it.";
    qrCodeMessage2.innerHTML = "Please take a capture of your personal QR code to use it after";
    sub.innerHTML = "<span class='message1'>Thank you for your submission <strong>" + name + "</strong>!</span>";
    // alert("Thank you for your submission!")
    // Affichage de résultat tout seul
    document.getElementById("contenu1").style.display = "none";
    document.getElementById("contenu2").style.display = "none";
    document.getElementById("contenu3").style.display = "none";
    document.getElementById("airbus").style.display = "none";
} // Fonction appelée lors de la soumission du formulaire
function generateQRCode() {
    // Récupérer les valeurs des champs de formulaire
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;

    // Créer un code QR à partir des données
    var qrcode = new QRCode(document.getElementById("qrcode"), {
        text: "Nom : " + name + "\nEmail : " + email,
        width: 256,
        height: 256,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });
    var qrCodeMessage1 = document.getElementById("qr-code-message1");
    var qrCodeMessage2 = document.getElementById("qr-code-message2");
    var sub = document.getElementById("sub");
    // qrCodeMessage3.innerHTML = "Hi " + name + "!";
    qrCodeMessage1.innerHTML = "<span class='message'>Your QR code has been generated</span>";
    // qrCodeMessage2.innerHTML = "Please check your email to receive it.";
    qrCodeMessage2.innerHTML = "Please take a capture of your personal QR code to use it after";
    sub.innerHTML = "<span class='message1'>Thank you for your submission <strong>" + name + "</strong>!</span>";
    // alert("Thank you for your submission!")
    // Affichage de résultat tout seul
    document.getElementById("contenu1").style.display = "none";
    document.getElementById("contenu2").style.display = "none";
    document.getElementById("contenu3").style.display = "none";
    document.getElementById("airbus").style.display = "none";
}
