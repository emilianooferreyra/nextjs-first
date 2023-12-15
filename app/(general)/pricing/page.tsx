import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "SEO title",
  description: "Esta es la pagina de mis servicios",
};

const page = () => {
  return <span className="text-7xl">pricing page</span>;
};

export default page;
