// Deve testar se o codigo verificador é valido sim ou não
// Esta verificação é feita com uma serie de etapas descritas no encunciado
// do exercício
// A verificação do codigo faz da seguinte forma: eu vou pegar o ultimo número
// que o usuário me enviar a partir deste número vou fazer todas as etapas
// descritas no enunciado, depois vou checar se este número confere com o ultimo
// número do original

const verification = (num) => {
  let verifNum = num.toString().split("")
  console.log(verifNum)
  let pair = 0;
  let odd = 0;
  let tot = 0;
  let verDigit = 0;

  for (i = 0; i < verifNum.length; i++) {
    if (verifNum[i] % 2 === 0) {
      pair += parseInt(verifNum[i]);
    } else {
      odd += parseInt(verifNum[i]);
    }
  }
  pair *= 3;
  tot = pair + odd;
  tot = tot % 10;
  if (tot == 0) {
    verDigit = 0;
    console.log(true)
  } else {
    verDigit = 10 - tot;
    console.log(false)
  }
  console.log(verDigit);
};

verification(547020743789);
