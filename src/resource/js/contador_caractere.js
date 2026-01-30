    
        const textarea = document.getElementById('problema');
        const contador = document.getElementById('contador');
        const limite = parseInt(textarea.getAttribute('maxlength'));

        textarea.addEventListener('input', function () {
            const caracteresDigitados = textarea.value.length;
            const caracteresRestantes = limite - caracteresDigitados;
            contador.textContent = caracteresRestantes + ' caracteres restantes';
        });
