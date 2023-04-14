function QtsCerveja() {
    

    var select = document.getElementById("opcoes");
    var qtdeCervejas = select.options[select.selectedIndex].value;
  
    var divBoxCervejas = document.querySelector(".BoxCervejas");
    divBoxCervejas.innerHTML = "";
  
    for (var i = 0; i < qtdeCervejas; i++) {
      var divCerveja = document.createElement("div");
      divCerveja.classList.add("cerveja");
  
      var inputMl = document.createElement("input");
      inputMl.type = "text";
      inputMl.placeholder = "ML's da cerveja " + (i + 1);
  
      var inputPreco = document.createElement("input");
      inputPreco.type = "text";
      inputPreco.placeholder = "Digite o preço da cerveja " + (i + 1);
      inputPreco.maxLength = "6";
      inputPreco.addEventListener("input", function (event) {
        var input = event.target;
        var value = input.value.replace(/\D/g, "");
        value = (value / 100).toFixed(2).replace(".", ",");
        input.value = value;
      });
  
      divCerveja.appendChild(inputMl);
      divCerveja.appendChild(inputPreco);
  
      divBoxCervejas.appendChild(divCerveja);
    }
  
    var botaoCalcular = document.createElement("button");
    botaoCalcular.textContent = "Calcular";
    botaoCalcular.addEventListener("click", function () {
        document.querySelector(".resultados").style.display = "block";
      calcular();
    });
  
    divBoxCervejas.appendChild(botaoCalcular);
  }
  
  function calcular() {
    var cervejas = document.querySelectorAll(".cerveja");
    var resultados = [];
    
    for (var i = 0; i < cervejas.length; i++) {
      var inputMl = cervejas[i].querySelector('input[type="text"][placeholder*="ML"]');
      var inputPreco = cervejas[i].querySelector('input[type="text"][placeholder*="preço"]');
  
      var ml = parseFloat(inputMl.value.replace(",", "."));
      var preco = parseFloat(inputPreco.value.replace(",", "."));
  
      if (!isNaN(ml) && !isNaN(preco) && ml > 0 && preco > 0) {
        var precoPorLitro = preco / (ml / 1000);
        var nome = "Cerveja " + (i+1);
        resultados.push({nome: nome, precoPorLitro: precoPorLitro});
      }
    }
  
    resultados.sort(function(a, b) {
      return a.precoPorLitro - b.precoPorLitro;
    });
  
    var output = document.querySelector(".resultados");
    output.innerHTML = "";
  
    if (resultados.length > 0) {
      var melhorCustoBeneficio = resultados[0];
      var msg = "O melhor custo-benefício é a " + melhorCustoBeneficio.nome + " custando R$ " + melhorCustoBeneficio.precoPorLitro.toFixed(2) + " por litro.";
  
      var melhor = document.createElement("div");
      melhor.classList.add("melhor");
      melhor.textContent = msg;
      output.appendChild(melhor);
  
      for (var i = 1; i < resultados.length; i++) {
        var cerveja = resultados[i];
        var msg = (i+1) + "° lugar fica a " + cerveja.nome + " custando R$ " + cerveja.precoPorLitro.toFixed(2) + " por litro.";
  
        var item = document.createElement("div");
        item.classList.add("item");
        item.textContent = msg;
        output.appendChild(item);
      }
    } else {
      var msg = "Por favor, preencha os dados corretamente."
      var erro = document.createElement("div");
      erro.classList.add("erro");
      erro.textContent = msg;
      output.appendChild(erro);
    }
    console.log(melhorCustoBeneficio.nome)
  }
  
  
  
  
  
  