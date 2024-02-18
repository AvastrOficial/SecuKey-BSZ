# SecuKey-BSZ
Este código JavaScript proporciona funcionalidades para generar contraseñas seguras y copiarlas al portapapeles.
Función generatePassword():

Recupera la longitud deseada de la contraseña y las opciones de caracteres especiales seleccionadas por el usuario, como mayúsculas, minúsculas, números y símbolos.
Construye un conjunto de caracteres basado en las opciones seleccionadas por el usuario.
Genera una contraseña aleatoria de la longitud especificada utilizando el conjunto de caracteres construido.
Inserta la contraseña generada en un campo de entrada de texto en el documento HTML.
Función copyPassword():

![image](https://github.com/AvastrOficial/SecuKey-BSZ/assets/91764815/e2ede1c2-fbda-4e16-873a-77e444e9b57c)

## Selecciona el campo de entrada de texto que contiene la contraseña generada.
Selecciona todo el texto dentro del campo de entrada.
Copia el texto seleccionado al portapapeles utilizando el comando document.execCommand("copy").
Muestra un mensaje de confirmación durante 4 segundos utilizando un overlay y luego lo oculta nuevamente.
En resumen, estas funciones permiten a los usuarios generar contraseñas seguras con una variedad de opciones y luego copiar fácilmente esas contraseñas al portapapeles para su uso posterior.
