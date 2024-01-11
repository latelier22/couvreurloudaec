// GetTaxons.js
import axios from "axios";

const API_URL = "http://sylius.latelier22.fr/api/v2/shop/taxons";

async function GetTaxons() {
  try {
    const response = await axios.get(API_URL);
    return response.data['hydra:member'];
  } catch (error) {
    console.error("Error fetching taxons:", error);
    throw error;
  }
}

export default GetTaxons;
