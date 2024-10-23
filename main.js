function clickpares() { 
    let pares = document.getElementsByName("pares");
    let paresToppings = document.getElementsByName("paresToppings");
    let paresDrinks = document.getElementsByName("paresDrinks");
    let selectedPares = 0;
    let selectedToppings = 0;
    let selectedDrinks = 0; // Will store the sum of selected drinks
    let grandTotal = 0;

    // Get selected Pares value
    for (var i = 0; i < pares.length; i++) {
        if (pares[i].checked) {
            selectedPares = pares[i].value;
            break;
        }
    }

    // Sum all selected toppings
    for (var i = 0; i < paresToppings.length; i++) {
        if (paresToppings[i].checked) {
            selectedToppings += Number(paresToppings[i].value);
        }
    }

    // Sum all selected drinks (if multiple drinks can be selected)
    for (var i = 0; i < paresDrinks.length; i++) {
        if (paresDrinks[i].checked) {
            selectedDrinks += Number(paresDrinks[i].value);
        }
    }

    // Calculate grand total
    grandTotal = Number(selectedPares) + selectedToppings + selectedDrinks;
    document.getElementById("total").innerHTML = "Php " + grandTotal.toFixed(2);

    // Handle flavor image logic
    var selectedFlavor = document.querySelector('input[name="pares"]:checked');
    if (selectedFlavor) {
        var flavorID = selectedFlavor.id;
        var flavorImage = document.getElementById('i' + flavorID);
        var imgSizeElements = document.querySelectorAll('.imgToppings');

        if (flavorImage && imgSizeElements.length > 0) {
            var imgSrc = flavorImage.src;

            imgSizeElements.forEach(function(newImgElement) {
                newImgElement.src = imgSrc;
            });
        } else {
            console.error('Image elements not found');
        }
    } else {
        alert('Please select a Pares Size before Toppings and Drinks.');
    }
}
