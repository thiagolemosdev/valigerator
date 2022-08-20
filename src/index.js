import GeraCPF from "./modules/GeraCPF";
import ValidaCPF from "./modules/ValidaCPF";

(function () {
  const btnGerarCpf = document.querySelector(".btn-gerar-cpf");
  const btnGerarSenha = document.querySelector(".btn-gerar-senha");
  const gerado = document.querySelector(".gerado");

  const btnValidaCpf = document.querySelector(".btn-valida-cpf");
  const inputCpf = document.querySelector(".valida-cpf");
  const valido = document.querySelector(".valido");

  btnValidaCpf.addEventListener("click", () => {
    const cpf = inputCpf.value;
    if (!cpf) {
      return;
    }

    const cpfValido = new ValidaCPF(cpf);
    if (cpfValido.valida()) {
      valido.innerHTML = "CPF valido";
      valido.classList.remove("invalido");
    } else {
      valido.innerHTML = "CPF invalido";
      valido.classList.add("invalido");
    }
  });

  btnGerarCpf.addEventListener("click", () => {
    const cpf = new GeraCPF();
    gerado.innerHTML = cpf.geraNovoCpf();
  });
})();
