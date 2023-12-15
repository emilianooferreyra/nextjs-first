import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "SEO title",
  description: "SEO Description",
  keywords: ["About Page", "Emiliano", "Informacion", "..."],
};

const page = () => {
  return <span className="text-7xl">about page</span>;
};

export default page;
