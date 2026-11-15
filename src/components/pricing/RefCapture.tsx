"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { storeRef } from "@/lib/signup";

/** Guarda ?ref= de cualquier página (30 días) para aplicarlo después en la contratación. */
export function RefCapture() {
  const pathname = usePathname();
  useEffect(() => {
    const ref = new URLSearchParams(window.location.search).get("ref");
    if (ref) storeRef(ref.trim());
  }, [pathname]);
  return null;
}
