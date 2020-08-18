function sendm() {
    let a1 = document.querySelector("#txt1").value;
    a1.trim();
  
    if (a1 === "") {
      var x = document.getElementById("#micid");
      x.disabled = true;
    } else {
      let z = document.querySelector(".msg2");
      z.style.visibility = "visible";
      var b1 = document.querySelector(".msg").cloneNode(true);
      b1.removeAttribute("class");
  
      b1.children[0].innerHTML = a1;
  
      const temp = document.querySelector(".b");
      temp.appendChild(b1);
      document.querySelector("#txt1").value = "";
    }
  }