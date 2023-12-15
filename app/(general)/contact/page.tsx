import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing Page",
  description: "Pagina de precio de mis servicios",
  keywords: ["About Page", "Emiliano", "Informacion", "..."],
};

const page = () => {
  return <span className="text-7xl">contact page</span>;
};

export default page;
