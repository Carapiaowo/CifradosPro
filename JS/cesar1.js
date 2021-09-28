





var app = new function () {

    this.doCrypt = function (isDecrypt) {

        //Obtenemos los valores que vamos a manejar.

        str = document.getElementById("target").value;
        amount = document.getElementById("shift").value;

        //Opción de encriptar o desencriptar

        if (isDecrypt) {
            amount = (amount - 2 * (amount));
            document.getElementById("target").value = caesarShift(str, amount);
        } else {
            amount = (amount * 1);
            document.getElementById("target").value = caesarShift(str, amount);
        }
    };

    //Declaramos la función para la encriptación

    var caesarShift = function (str, llave) {
        if (llave < 0) {
            return caesarShift(str, llave + 26);
        }

        var output = "";

        for (var i = 0; i < str.length; i++) {
            var c = str[i];

            if (c.match(/[a-z]/i)) {
                var code = str.charCodeAt(i);

                if (code >= 65 && code <= 90) {
                    c = String.fromCharCode(((code - 65 + llave) % 26) + 65);
                }

                else if (code >= 97 && code <= 122) {
                    c = String.fromCharCode(((code - 97 + llave) % 26) + 97);
                }
            }

            output += c;
        }

        return output;
    };

};



