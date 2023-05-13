function calcular() {
    // Obtener los valores de los campos de entrada
    let masa = parseFloat(document.getElementById("masa").value);
    let angulo = parseFloat(document.getElementById("angulo").value);
    let coeficienteFriccion = parseFloat(document.getElementById("coeficiente-friccion").value);
    let fuerzaAplicada = parseFloat(document.getElementById("fuerza-aplicada").value);
  
    // Convertir el ángulo a radianes
    let anguloRadianes = angulo * Math.PI / 180;
  
    // Calcular el peso
    let peso = masa * 9.81;
  
    // Calcular la normal
    let normal = peso * Math.cos(anguloRadianes) + fuerzaAplicada * Math.sin(anguloRadianes);
  
    // Calcular la fuerza de fricción
    let fuerzaFriccion = coeficienteFriccion * normal;
  
    // Mostrar los resultados en los campos de salida
    document.getElementById("peso").value = peso.toFixed(2);
    document.getElementById("normal").value = normal.toFixed(2);
    document.getElementById("fuerza-friccion").value = fuerzaFriccion.toFixed(2);
  }
  