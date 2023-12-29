// Deve testar se o codigo verificador é valido sim ou não
// Esta verificação é feita com uma serie de etapas descritas no encunciado
// do exercício
// Esta verificação deve ser feita removendo o ultimo número da sequencia de números
// passada pelo usuário, nisso a função verification vai fazer todas as etapas do enunciado
// utilizando principalmente a função de array reduce
// Após isso verificando se o retornado pelo verification bate com o ultimo número da sequencia
// de números passada pelo usuário, devolvendo true ou false.
// obs: em uma das etapas eu me confundi pensando que era pra testar se os números enviados
// para o verification eram par ou impar, porem era pra testar o índice dos números, nisso
// mostra o valor de prestar mais atenção no enunciado
// obs: o enunciado deste programa foi muito complicado de entender, não sei se foi a minha
// interpretação ou ele esta confuso mesmo, pois não indica de forma correta como ele quer
// que seja este codigo, da onde ele deve ser tirado tive que olhar a resposta para entender
const verification = (num) => {
  let verifNum = num;
  let sumOdd = 0;
  let sumPair = verifNum.reduce((accum, num, index) => {
    if (index == 0 || index % 2 == 0) {
      return accum + num;
    } else {
      sumOdd += num;
      return accum;
    }
  }, 0);

  let finalCod = sumPair * 3 + sumOdd;
  finalCod %= 10;
  if (finalCod == 0) {
    return 0;
  } else {
    return (finalCod = 10 - finalCod);
  }
};

let code = (num) => {
  const code = num.toString().split("").map(Number);
  const withoutLastNumber = code.slice(0, -1);
  const numberVerification = verification(withoutLastNumber);
 return numberVerification === code[code.length -1]
};
console.log(code(301354030348));
