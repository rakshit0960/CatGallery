import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useCatData } from "../hooks/useCatData";
import CatCard from "./CatCard";

export default function CatGallery() {
  const { cats, loading, error, loadMore } = useCatData();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Cat Gallery</h1>
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"> */}
      <div className="column-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6">
        {cats.map((cat) => (
          <CatCard key={cat.id} cat={cat} />
        ))}
      </div>
      <div className="mt-8 text-center">
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <Button onClick={loadMore} disabled={loading} className="px-6 py-2">
          {loading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Loading...
            </>
          ) : (
            "Load More"
          )}
        </Button>
      </div>
    </div>
  );
}
