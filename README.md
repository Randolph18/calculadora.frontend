# calculadora.frontend
spring final modulo 2 - talento digital chile

repositorio github
# https://github.com/Randolph18/calculadora.frontend.git

Este código es un pequeño programa que implementa una calculadora básica en JavaScript. Cuando el documento HTML se ha cargado por completo, el código busca el elemento con id "textoPantalla" y establece una función llamada "teclado" como el controlador de eventos para la pulsación de teclas del usuario.

Luego, hay una serie de funciones que se encargan de diferentes aspectos del funcionamiento de la calculadora:

"numero(xx)" se llama cuando se presiona un número en el teclado. Si el valor actual de "x" es "0" o "xi" es igual a 1, el número se muestra en la pantalla y se almacena en "x".
"operar(s)" se llama cuando se presiona un operador (+). Primero se llama a "igualar()" para calcular el resultado de cualquier operación anterior. A continuación, se almacena el valor actual de "x" en "ni", el operador en "op" y "xi" se establece en 1 para indicar que se debe esperar un nuevo número.
"igualar()" se llama cuando se presiona la tecla de igual o de espacio. Primero verifica si no hay ninguna operación pendiente y muestra el valor actual de "x" en la pantalla. De lo contrario, construye una cadena que representa la operación y la resuelve con "eval()". El resultado se muestra en la pantalla, se almacena en "x", "op" se establece en "no" y "xi" se establece en 1.
"borradoTotal()" se llama cuando se presiona la tecla de borrado. Establece la pantalla en "0", "x" en "0", "ni" en "0", "op" en "no" y "coma" en 0 (se utiliza más adelante).
Por último, la función "teclado(elEvento)" se encarga de procesar los eventos de pulsación de teclas. Si se presiona un número, se llama a la función "numero()" con el número correspondiente. Si se presiona el signo de suma, se llama a la función "operar()" con el argumento "+". Si se presiona la tecla de igual o de espacio, se llama a la función "igualar()". Si se presiona la tecla de borrado, se llama a la función "borradoTotal()".

En resumen, este código implementa una calculadora básica que se puede controlar tanto con el teclado como con los botones de la propia calculadora.
