  const btn = document.getElementById("btn");

      btn.addEventListener("click", function() {
          let currentVal = this.innerHTML;
          this.innerHTML = parseInt(currentVal)+1;
      });
  