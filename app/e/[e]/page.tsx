"use client";

import { useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";

export default function RedirectToLuma({ params }: { params: { e: string } }) {
  const e = params.e;
  const router = useRouter();

    const lumaLinkData = useMemo(() => [
        {
            e: "designiti",
            link: "https://lu.ma/hr33xw5b"
        },
        {
            e: "ptop",
            link: "https://lu.ma/ptop"
        },
        {
            e: "webverse-p1e2",
            link: "https://lu.ma/webverse-p1e2"
        },
        {
            e: "webverse-p1e1",
            link: "https://lu.ma/webverse-p1e1"
        },
        {
            e: "converge",
            link: "https://lu.ma/convergeapexia"
        },
        {



            
            e: "genesis",
            link: "https://lu.ma/ra9xr4gm"



            
        },
    ], []);

  useEffect(() => {
    const linkData = lumaLinkData.find((data) => data.e === e);

    if (linkData) {
      const linkWithUTM = `${linkData.link}?utm_source=apexiaSortURL`;
      window.location.href = linkWithUTM;
    } else {
      router.replace("/events");
    }
  }, [e, lumaLinkData, router]);

  return null;
}
