// GetTaxons.js
import axios from "axios";

const API_URL_BASE = "http://sylius.latelier22.fr";

async function GetProductVariant(variant) {
  try {
    const API_URL = API_URL_BASE + variant
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching taxons:", error);
    throw error;
  }
}

export default GetProductVariant;
