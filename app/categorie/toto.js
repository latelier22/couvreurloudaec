{taxon.name}
            {/* Vérifier si l'image existe avant de l'afficher */}
            {taxon.images[0] ? (
              <img src={`${API_URL_BASE}/media/cache/sylius_small/${taxon.images[0].path}`} alt={taxon.name} />
            ) : (
              // Image placeholder générique
              <img src={PLACEHOLDER_IMAGE_URL} alt="Image par défaut" />
            )}