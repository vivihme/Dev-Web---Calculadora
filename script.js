// Para os números serem exibidos na tela
function insert(num)
    {
    // Para o próximo número não excluir o anterior na calculadora
        var numero = document.getElementById("resultado").innerHTML;
        document.getElementById("resultado").innerHTML = numero + num;
    }
// Para o botão C limpar a tela
function clearDisplay()
    {
        document.getElementById("resultado").innerHTML = "";
    }
// Para o botão < limpar o último dígito
function back()
    {
        var resultado = document.getElementById("resultado").innerHTML;
        document.getElementById("resultado").innerHTML = resultado.substring(0, resultado.length -1)
    }
// Calcular o resultado
function calcular()
    {
        var resultado = document.getElementById("resultado").innerHTML;
        if (resultado) {
            document.getElementById("resultado").innerHTML = eval(resultado);
        } else {
            document.getElementById("resultado").innerHTML = "Nada para calcular!";
        }
    }