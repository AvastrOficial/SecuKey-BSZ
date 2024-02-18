 function generatePassword() {
            const length = document.getElementById('length').value;
            const includeUppercase = document.getElementById('uppercase').checked;
            const includeLowercase = document.getElementById('lowercase').checked;
            const includeNumbers = document.getElementById('numbers').checked;
            const includeSymbols = document.getElementById('symbols').checked;
            const includeAlchemicalSymbols = document.getElementById('alchemical') ? document.getElementById('alchemical').checked : false;
            const includeEgyptianSymbols = document.getElementById('egyptian') ? document.getElementById('egyptian').checked : false;
            const includeCuneiformSymbols = document.getElementById('cuneiform') ? document.getElementById('cuneiform').checked : false;

            let charset = '';
            if (includeUppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            if (includeLowercase) charset += 'abcdefghijklmnopqrstuvwxyz';
            if (includeNumbers) charset += '0123456789';
            if (includeSymbols) charset += '!@#$%^&*()_+-=[]{}|;:,.<>?';
            if (includeAlchemicalSymbols) charset += '∆∇∏∑√∞≈≡≤≥⊕⊗⊥⋅';
            if (includeEgyptianSymbols) charset += '𓀀𓀁𓀂𓀃𓀄𓀅𓀆𓀇𓀈𓀉𓀊𓀋𓍿';
            if (includeCuneiformSymbols) charset += '𒀀𒀁𒀂𒀃𒀄𒀅𒀆𒀇𒀈𒀉𒀊𒀋𒀌𒀍𒀎';

            if (charset === '') {
                alert('Por favor, selecciona al menos un tipo de caracteres para generar la contraseña.');
                return;
            }

            let password = '';
            for (let i = 0; i < length; i++) {
                const randomIndex = Math.floor(Math.random() * charset.length);
                password += charset[randomIndex];
            }

            document.getElementById('password').value = password;
        }

function copyPassword() {
  var passwordField = document.getElementById("password");
  passwordField.select();
  passwordField.setSelectionRange(0, 99999);
  document.execCommand("copy");
  window.getSelection().removeAllRanges();

  var overlay = document.getElementById("overlay");
  var message = document.getElementById("message");

  overlay.style.display = "flex";
  setTimeout(function() {
    overlay.style.display = "none";
  }, 4000); // Cambiado a 4000 milisegundos (4 segundos)
}


      
      document.getElementById("menuButton").addEventListener("click", function() {
  var menu = document.getElementById("menu");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
});
