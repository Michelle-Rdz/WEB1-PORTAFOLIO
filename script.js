document.getElementById("tipForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const subtotal = parseFloat(document.getElementById("subtotal").value);
    const porcentaje = parseFloat(document.getElementById("porcentaje").value);

    if (isNaN(subtotal) || isNaN(porcentaje)) {
        alert("Por favor, completa ambos campos correctamente.");
        return;
    }

    const propina = subtotal * (porcentaje / 100);
    const totalConPropina = subtotal + propina;

    document.getElementById("resultado").innerHTML = `
        Propina sugerida: $${propina.toFixed(2)}<br>
        Total a pagar con propina: $${totalConPropina.toFixed(2)}
    `;
});
