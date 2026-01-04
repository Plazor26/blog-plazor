"use client";

import { useEffect } from "react";

type AdSlotProps = {
  slot: string;
  format?: "auto" | "rectangle" | "horizontal";
};

export default function AdSlot({ slot, format = "auto" }: AdSlotProps) {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      // silently fail in dev
    }
  }, []);

  return (
    <div className="my-12 flex justify-center">
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-8438735279878088"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  );
}
