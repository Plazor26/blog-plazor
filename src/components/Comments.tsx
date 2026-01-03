"use client";

import { useEffect } from "react";

export default function Comments() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://giscus.app/client.js";
    script.async = true;
    script.crossOrigin = "anonymous";

    script.setAttribute("data-repo", "Plazor26/blog-plazor");
    script.setAttribute("data-category", "General");
    script.setAttribute("data-mapping", "pathname");
    script.setAttribute("data-reactions-enabled", "1");
    script.setAttribute("data-input-position", "bottom");
    script.setAttribute("data-theme", "light");
    script.setAttribute("data-lang", "en");

    document.getElementById("giscus")?.appendChild(script);
  }, []);

  return <div id="giscus" />;
}
