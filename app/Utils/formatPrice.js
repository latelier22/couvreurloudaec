// Fonction pour formater le prix en euros avec virgule
function formatPrice(priceInCents) {
    const priceInEuros = priceInCents / 100;
    return priceInEuros.toLocaleString("fr-FR", { style: "currency", currency: "EUR" });
  }

export default formatPrice;