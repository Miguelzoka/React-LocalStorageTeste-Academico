const disciplinaValidator = {

    nome: {
        required: "O campo NOME é obrigatório!",
        minLenght: {
            value: 5,
            message: "O mínimo é de 5 caracteres!",
        },

        maxLenght: {
            value: 50,
            message: "O máximo é de 50 caracteres!",
        },
        pattern: {
            value: /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/,
            message: "Digite somente letras!",
          },
    },

    cnpj: {
        required: "O campo é obrigatório!",
        maxLenght: {
            value: 18,
            message: "O máximo é 18"
        },
        pattern: {
            value: /[0-9]+$/,
            message: "Digite somente números!",
          },
    }

}

export default disciplinaValidator