/*document.getElementById("sendButton").addEventListener("click", function() {
    var messageInput = document.getElementById("messageInput");
    var message = messageInput.value.trim();
    if (message !== "") {
      var chat = document.querySelector(".chat");
      var messageElement = document.createElement("div");
      messageElement.classList.add("message", "current-message");
      messageElement.innerHTML = "<p>" + message + "</p>";
      chat.appendChild(messageElement);
      messageInput.value = "";
    }
  }); */

  document.querySelector('.form-landing-page').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var number = document.getElementById('number').value;
    var genero = document.getElementById('genero').value;
    var mensaje = document.getElementById('mensaje').value;


    
    alert('Nombre y Apellido: ' + username + '\nEmail: ' + email + '\nTelefono: ' + number + '\nGenero: ' + genero + '\nMensaje: ' + mensaje);
    this.reset();


   
        

  });