var mode = document.getElementById("mode");
      
      mode.onclick = function() {
        document.body.classList.toggle("darkmode");
        if (document.body.classList.contains("darkmode")) {
          document.getElementById("sun").style.display = "none";
          document.getElementById("moon").style.display = "inline";
        } else {
          document.getElementById("sun").style.display = "inline";
          document.getElementById("moon").style.display = "none";
        }
      }