
// MyPage.js
import {API_URL_BASE} from "../../API"
import { Suspense} from "react";
import GetTaxons from '../../API/GetTaxons';
import GetProductsByTaxonCode from "../../API/GetProductsByTaxonCode";
import GetProductVariant from "../../API/GetProductVariant";
import formatPrice from "../../Utils/formatPrice";







async function MyPage ({ params }) {
  // Fonction pour obtenir le code à partir du slug dans les données des taxons
  function getCodeFromSlug(product, targetSlug) {
    const matchingTaxon = product.find((taxon) => taxon.slug === targetSlug);
    if (matchingTaxon) {
      console.log(matchingTaxon.slug)
      return matchingTaxon.code;
    }
    return null;
  }

        const taxons = await GetTaxons();
        const targetSlug = params.taxonSlug;
        const taxonCode = getCodeFromSlug(taxons, targetSlug);
        const products = await GetProductsByTaxonCode(taxonCode);

        //console.log("products",products)

        // Fonction asynchrone pour obtenir le variant par défaut de chaque produit
        const getDefaultVariant = async (variant) => {
          try {
            const variantData = await GetProductVariant(variant);
            return variantData;
          } catch (error) {
            console.error("Error fetching variant:", error);
            return null;
          }
        };

        // Mise à jour de chaque produit avec le variant par défaut
        const updatedProducts = await Promise.all(
          products.map(async (product) => {
            if (product.variants && product.variants.length > 0) {
              const imagethumbnailPath = product.images[0].path.split("/media/image")[1]
              const defaultVariantData = await getDefaultVariant(product.variants[0]);
              return { ...product, imagethumbnailPath, defaultVariant: defaultVariantData };
            }
            return product;
          })
        );


  return (
    <Suspense>
      <div>
        CATEGORIES:
        {taxons.map((taxon) => (
          <div key={taxon["@id"]}>
            <a href={`/categorie/${taxon.slug}`} key={taxon.code}>
              {taxon.name}
              <img src={`${API_URL_BASE}/media/cache/sylius_small${taxon.imagethumbnailPath}`} />
            </a>
          </div>
        ))}
      </div>
      <div>
        PRODUITS:
        {updatedProducts.map((product) => (
          <div key={product["@id"]}>
            {product.name}
            <img src={`${API_URL_BASE}/media/cache/sylius_shop_product_thumbnail${product.imagethumbnailPath}`} />
            {product.defaultVariant && (
              <div>
                Default Variant: {formatPrice(product.defaultVariant.price)}
                {/* Ajoutez d'autres propriétés de variantes ici si nécessaire */}
              </div>
            )}
          </div>
        ))}
       

      </div>
    </Suspense>
  );
};

export default MyPage;
