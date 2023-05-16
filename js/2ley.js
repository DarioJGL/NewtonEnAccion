function calcular() {
  const fuerza = document.getElementById("fuerza").value;
  const masa = document.getElementById("masa").value;
  const aceleracion = document.getElementById("aceleracion").value;

  let resultado = "";

  if (fuerza === "" && masa !== "" && aceleracion !== "") {
    resultado = `Fuerza = ${masa * aceleracion} N`;
  } else if (masa === "" && fuerza !== "" && aceleracion !== "") {
    resultado = `Masa = ${fuerza / aceleracion} kg`;
  } else if (aceleracion === "" && fuerza !== "" && masa !== "") {
    resultado = `Aceleración = ${fuerza / masa} m/s²`;
  } else {
    resultado = "Introduce dos valores para calcular el tercero";
  }

  document.getElementById("resultado").textContent = resultado;
}

