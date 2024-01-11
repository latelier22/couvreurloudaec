// getTaxonImage.js
import axios from "axios";
import {API_URL_BASE, API_URL_TAXON_IMAGE} from "./index"


async function getTaxonImage(id, filter_size) {

    const API_URL = API_URL_BASE + API_URL_TAXON_IMAGE+ "/" + id + "?" + "filter=" + filter_size


  try {
    const response = await axios.get(API_URL);
    const imagePath = response.data.path
    const imageUrl = `${API_URL_BASE}/media/cache/resolve/${filter_size}/${imagePath}`;
    console.log(imageUrl)
    return imageUrl;
    } 
    catch (error) {
    console.error("Error getting taxon image:", error);
    throw error;
  }
}

export default getTaxonImage;