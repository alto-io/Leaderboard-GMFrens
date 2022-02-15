import { topCollections } from "./mock-data";

const CollectionService = {
    fetchTopCollections: () => {
        return topCollections
    }
}

export default CollectionService;