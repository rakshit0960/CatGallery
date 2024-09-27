import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Heart, Loader2 } from "lucide-react";
import { useState } from "react";
import { Cat } from "../types/catDataTypes";

interface CatCardProps {
  cat: Cat;
}

export default function CatCard({ cat }: CatCardProps) {
  const [liked, setLiked] = useState(false);
  const [loading, setLoading] = useState(true);

  return (
    <Card className="overflow-hidden break-inside-avoid mb-4 shadow-lg rounded-lg ">
      <CardContent className="p-0 relative">
        {loading && (
          <div className="absolute h-full w-full grid place-content-center">
            <Loader2 className="mr-2 h-7 w-7 animate-spin" />
          </div>
        )}
        <img
          src={cat.url}
          className={cn(
            "object-cover rounded-lg transition-opacity duration-700 ease-in-out w-full h-56",
            loading ? "opacity-0" : "opacity-100"
          )}
          onLoad={() => setLoading(false)}
        />
      </CardContent>

      <CardFooter className="flex justify-between items-center p-4">
        <p className="text-sm font-medium">{`Cat #${cat.id}`}</p>
        <Button variant="ghost" size="icon">
          <Heart
            onClick={() => setLiked(!liked)}
            className={cn("h-4 w-4", liked ? "text-red-500" : "text-gray-500")}
          />
        </Button>
      </CardFooter>
    </Card>
  );
}
