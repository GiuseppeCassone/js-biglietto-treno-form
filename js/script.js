const buttonElement = document.querySelector("button");

buttonElement.addEventListener(`click`,
    
    function() {

      const distance = document.getElementById(`kmInput`).value;
    
      let basePrice = distance * 0.21;
      
      const age = document.getElementById(`ageInput`).value;
      
      
      
      if (!isNaN(age) && Number.isInteger(Number(age)) && (age > 0 && age < 110) && !isNaN(distance) && Number.isInteger(Number(distance)) && distance > 0){
          
          if (age < 18) {
          
            //   document.getElementById(`yourDiscount`).innerHTML = `Hai i requisiti per uno sconto del 20%`
          
              basePrice = (basePrice * 0.20)
          }
      
          if (age > 17 && age < 65) {
      
            //   document.getElementById(`yourDiscount`).innerHTML = `Non hai i requisiti per uno sconto`
          }
          
          if (age > 64) {
          
            //   document.getElementById(`yourDiscount`).innerHTML = `Hai i requisiti per uno sconto del 40%`
          
              basePrice = (basePrice * 0.40)
          }
          
          document.getElementById(`finalPrice`).innerHTML = `Il prezzo del tuo biglietto è di ${basePrice.toFixed(2)}`;
      
      } else {
      
          document.getElementById(`finalPrice`).innerHTML = `Non hai inserito i dati in maniera corretta!`;
      }

    }
)



