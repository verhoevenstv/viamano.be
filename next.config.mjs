/** @type {import('next').NextConfig} */
const nextConfig = {
  // Statische export: bouwt de site tot kant-en-klare bestanden in /out,
  // die op elke gewone webhosting (zoals site.eu) geüpload kunnen worden.
  output: "export",
  // Geen server-side beeldoptimalisatie op statische hosting.
  images: { unoptimized: true },
  // Nette map-URL's (/over-mij/ -> /over-mij/index.html) voor Apache-hosting.
  trailingSlash: true,
  reactStrictMode: true,
};

export default nextConfig;
