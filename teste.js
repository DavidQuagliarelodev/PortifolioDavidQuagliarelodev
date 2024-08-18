let bebida = "chá";
let valor = 0;
switch (bebida) {
  case "café":
    valor = 3.45;
    console.log(
      "Bebida escolhida: " + bebida + " Valor: R$" + valor.toFixed(2)
    );
    break;
  case "leite":
    valor = 2.50;
    console.log(
      "Bebida escolhida: " + bebida + " Valor: R$" + valor.toFixed(2)
    );
    break;
  case "chá":
    valor = 3.50;
    console.log(
      "Bebida escolhida: " + bebida + " Valor: R$" + valor.toFixed(2)
    );
    break;
  default:
    console.log("Por gentileza escolha entre: café, leite ou chá");
}
