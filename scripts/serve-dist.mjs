import http from "node:http";
import fs from "node:fs";
import path from "node:path";

const dist = path.resolve(import.meta.dirname, "../dist");
const port = Number(process.env.PORT || 4173);

const routes = new Map([
  ["/", "index.html"],
  ["/about", "about.html"],
  ["/our-brews", "our-brews.html"],
  ["/media", "media.html"],
]);

const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".webp": "image/webp",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".xml": "application/xml; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".webmanifest": "application/manifest+json",
  ".ico": "image/x-icon",
  ".json": "application/json",
};

function sendFile(res, filePath, status = 200) {
  const ext = path.extname(filePath);
  res.writeHead(status, { "Content-Type": types[ext] || "application/octet-stream" });
  fs.createReadStream(filePath).pipe(res);
}

const server = http.createServer((req, res) => {
  const url = new URL(req.url || "/", `http://127.0.0.1:${port}`);
  let pathname = decodeURIComponent(url.pathname);

  if (pathname.endsWith("/index.html")) pathname = pathname.slice(0, -11) || "/";

  const shellName = pathname.replace(/\/$/, "") || "/";
  const htmlName = routes.get(shellName === "" ? "/" : shellName);
  if (htmlName && (pathname === shellName || pathname === `${shellName}/` || shellName === "/")) {
    sendFile(res, path.join(dist, htmlName));
    return;
  }

  const filePath = path.join(dist, pathname);
  if (pathname !== "/" && fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    sendFile(res, filePath);
    return;
  }

  sendFile(res, path.join(dist, "index.html"));
});

server.listen(port, "127.0.0.1", () => {
  console.log(`Serving dist at http://127.0.0.1:${port}`);
});
