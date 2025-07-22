'use client';

import { useEffect, useState, useTransition } from "react";
import Image from "next/image";
import { Skeleton } from "./ui/skeleton";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { Terminal } from "lucide-react";

export function EventCollage({ imageUrls }: { imageUrls: string[] }) {
    const [collageData, setCollageData] = useState<{ collageDataUri: string } | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [isPending, startTransition] = useTransition();

    useEffect(() => {
        startTransition(async () => {
            
        });
    }, [imageUrls]);

    if (isPending) {
        return <Skeleton className="w-full aspect-video rounded-lg" />;
    }

    
    if (collageData) {
        return (
            <div className="relative w-full aspect-video rounded-lg overflow-hidden glass-card">
                <Image
                    src={collageData.collageDataUri}
                    alt="Event Collage"
                    fill
                    className="object-cover"
                />
            </div>
        )
    }

    return null;
}
