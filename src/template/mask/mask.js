$(document).ready(function () {
    // Máscaras padrão
    $('.date').mask('00/00/0000');
    $('.time').mask('00:00:00');
    $('.date_time').mask('00/00/0000 00:00:00');
    
    // Máscara para CEP
    $('.cep').mask('00000-000');
    
    $('.cnpj').mask('00.000.000/0000-00');
    $('.tel').mask('(00) 0000-0000');
    $('.phone_us').mask('(000) 000-0000');
    $('.mixed').mask('AAA 000-S0S');
    $('.cpf').mask('000.000.000-00', {reverse: true});
    $('.dinheiro').mask('00000000.00', {reverse: true});
    $('.porcentagem').mask('00.00', {reverse: true});
    $('.money').mask('000.000.000.000.000,00', {reverse: true});
    
    // TRATAMENTO ESPECIAL PARA CELULAR/TELEFONE
    function aplicarMascaraTelefone($elemento) {
        var valor = $elemento.val().replace(/\D/g, '');
        
        if (valor.length <= 10) {
            $elemento.mask('(00) 0000-0000');
        } else {
            $elemento.mask('(00) 00000-0000');
        }
        
        // Formata o valor atual se tiver números suficientes
        if (valor.length === 10) {
            $elemento.val(valor.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3'));
        } else if (valor.length === 11) {
            $elemento.val(valor.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3'));
        }
    }
    
    // FUNÇÃO PARA FORMATAR CEP CORRETAMENTE
    function formatarCEP(cep) {
        // Remove tudo que não é número
        var numeros = cep.replace(/\D/g, '');
        
        // Se tiver 8 dígitos, formata corretamente
        if (numeros.length === 8) {
            return numeros.replace(/(\d{5})(\d{3})/, '$1-$2');
        }
        // Se tiver menos de 8 mas tem algum valor, mantém como está
        return cep;
    }
    
    // Inicialização quando a página carrega
    setTimeout(function() {
        // Formata celulares
        $('.cel').each(function() {
            var $campo = $(this);
            var valorOriginal = $campo.val().replace(/\D/g, '');
            
            // Se tem valor, formata
            if (valorOriginal.length >= 10) {
                if (valorOriginal.length === 10) {
                    $campo.val(valorOriginal.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3'));
                } else if (valorOriginal.length === 11) {
                    $campo.val(valorOriginal.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3'));
                }
            }
            
            // Aplica a máscara
            aplicarMascaraTelefone($campo);
        });
        
        // Formata CEPs ao carregar a página - CORREÇÃO AQUI
        $('.cep').each(function() {
            var $campo = $(this);
            var cepValor = $campo.val();
            
            // Se o campo tem valor
            if (cepValor && cepValor.trim() !== '') {
                // Remove qualquer formatação existente
                var cepNumeros = cepValor.replace(/\D/g, '');
                
                // Garante que tem 8 dígitos
                if (cepNumeros.length === 8) {
                    // Formata corretamente: 86061030 -> 86061-030
                    var cepFormatado = cepNumeros.replace(/(\d{5})(\d{3})/, '$1-$2');
                    $campo.val(cepFormatado);
                } else if (cepNumeros.length > 0 && cepNumeros.length < 8) {
                    // Se tem menos de 8 dígitos, completa com zeros
                    cepNumeros = cepNumeros.padEnd(8, '0');
                    var cepFormatado = cepNumeros.replace(/(\d{5})(\d{3})/, '$1-$2');
                    $campo.val(cepFormatado);
                }
            }
        });
    }, 100);
    
    // Eventos para celular
    $('.cel')
        .on('input', function() {
            aplicarMascaraTelefone($(this));
        })
        .on('focus click', function(e) {
            setTimeout(function() {
                aplicarMascaraTelefone($(e.target));
            }, 50);
        })
        .focusout(function() {
            var $campo = $(this);
            var valor = $campo.val().replace(/\D/g, '');
            
            if ($campo.val().length > 0 && (valor.length < 10 || valor.length > 11)) {
                $campo.val('');
            }
            aplicarMascaraTelefone($campo);
        });
    
    // Validação de números apenas
    $('.num').keypress(function (event) {
        var tecla = (window.event) ? event.keyCode : event.which;
        if ((tecla > 47 && tecla < 58))
            return true;
        else {
            if (tecla != 8)
                return false;
            else
                return true;
        }
    });
    
    // Validações específicas
    $(".telpree").focusout(function () {
        if ($('#telcel').val().length < 14)
            $('#telcel').val('');
    });
    
    $(".datapree").focusout(function () {
        if ($('.date').val().length < 10)
            $('.date').val('');
    });
});