import { writeFileSync, mkdirSync } from "fs"

const siteUrl = "https://crecermarketingweb.vercel.app"
const routes = ["/", "/soluciones"]
const today = new Date().toISOString().slice(0, 10)

const urls = routes.map(r => `
  <url>
    <loc>${siteUrl}${r}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${r === "/" ? "1.0" : "0.9"}</priority>
  </url>`).join("")

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`.trim()

mkdirSync("./public", { recursive: true })
writeFileSync("./public/sitemap.xml", xml, "utf8")
console.log("sitemap.xml generated in /public")
