document.getElementById('botoncin').addEventListener('click', function(){
    let p1= document.getElementById('contrasena').value;
    let p2="1234"
    const persona = '{"domicilio":"Malvinas Argentinas 3582","ciudad":"Mar del Plata", "DNI":"31.453.531", "telefono":"(+54) 223-41393820"}';
    var espacios = false;
    var cont = 0;
    
    while (!espacios && (cont < p1.length)) {
      if (p1.charAt(cont) == " ")
        espacios = true;
      cont++;
    }
    if (espacios) {
      alert ("La contraseña no puede tener espacios en blanco");
      document.getElementById('salida').innerHTML = "";
      return false;
    }
    if (p1.length == 0 || p2.length == 0) {
      alert("El campo contraseña no puede ser nulo (la contraseña es 1234)");
      document.getElementById('salida').innerHTML = "";
      return false;
    }
    if (p1 != p2) {
      alert("Contraseña incorrecta.");
      document.getElementById('salida').innerHTML = "";
      return false;
    } else {
     const obj = JSON.parse(persona);
     document.getElementById("salida1").innerHTML = "Domicilio: "+obj.domicilio;
     document.getElementById("salida2").innerHTML = "Ciudad: "+obj.ciudad;
     document.getElementById("salida3").innerHTML = "DNI: "+obj.DNI;
     document.getElementById("salida4").innerHTML = "Tel: "+obj.telefono;
   }
    });