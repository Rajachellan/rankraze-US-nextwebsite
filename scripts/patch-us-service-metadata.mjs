import fs from "fs";
import path from "path";

/** Per-file string replacements (order matters for overlaps). */
const filePatches = {
  "src/app/(services-main-group)/(web-services)/web-hosting/page.tsx": [
    ['"https://rankraze.us/web-hosting-company-service-in-chennai"', '"https://rankraze.us/web-hosting"'],
    ["Web Hosting Company Service in Chennai", "Web Hosting in Texas"],
    ["Web Hosting Service Company in Chennai", "Web Hosting Service Company in Texas"],
    ["Best Web Hosting in Chennai", "Best Web Hosting in Texas"],
    ["web hosting service in Chennai", "web hosting service in Texas"],
    ["best web hosting in Chennai", "best web hosting in Texas"],
    ["web hosting Chennai", "web hosting Texas"],
    ["web hosting company in Chennai", "web hosting company in Texas"],
    ["web hosting services in Chennai", "web hosting services in Texas"],
    ["website hosting Chennai", "website hosting Texas"],
    ["Web Hosting services in chennai", "Web Hosting services in Texas"],
    ["reliability for Chennai", "reliability for Texas clients"],
    ["perfectly suits Chennai", "perfectly suits Texas brands"],
  ],
  "src/app/(services-main-group)/(web-services)/web-analytic/page.tsx": [
    ['"https://rankraze.us/web-analytics-service-in-chennai"', '"https://rankraze.us/web-analytic"'],
    ["Web Analytics Service in chennai", "Web Analytics Services in Dallas"],
    ["Web Analytics Service in Chennai", "Web Analytics Services in Dallas"],
    ["web analytics services b2b directory Chennai", "web analytics services Dallas"],
    ["web analytics services from Chennai", "web analytics services from Dallas"],
    ["web analytics services service provider in Chennai", "web analytics services provider in Dallas"],
    ["Web Analytics Services in Chennai", "Web Analytics Services in Dallas"],
    ["Web Development services in chennai", "Web analytics services in Dallas"],
  ],
  "src/app/(services-main-group)/(web-services)/mobile-app-development/page.tsx": [
    ['"https://rankraze.us/mobile-app-development-company-chennai"', '"https://rankraze.us/mobile-app-development"'],
    ["Mobile App Development Company Chennai", "Mobile App Development in Dallas"],
    ["Mobile Application Development Company in Chennai", "Mobile Application Development in Dallas"],
    ["Mobile App Development Company in Chennai", "Mobile App Development Company in Dallas"],
    ["affordable price in Chennai", "affordable pricing in Texas"],
    ["android app development company in Chennai", "android app development company in Dallas"],
    ["android application developers in Chennai", "android application developers in Dallas"],
    ["android application development company in Chennai", "android application development company in Dallas"],
    ["mobile app development in Chennai", "mobile app development in Texas"],
    ["mobile application development company in Chennai", "mobile application development company in Dallas"],
    ["Mobile Application services in chennai", "Mobile application services in Dallas"],
  ],
  "src/app/(services-main-group)/(extended-reality)/virtual-reality-development-company-dallas/page.tsx": [
    ['"https://rankraze.us/virtual-reality-development-chennai-india"', '"https://rankraze.us/virtual-reality-development-company-dallas"'],
    ["Virtual Reality Development Company in Chennai, India", "Virtual Reality Development Company in Dallas, Texas"],
    ["VR development company in Chennai, India", "VR development company in Dallas, Texas"],
    ["virtual reality companies in Chennai", "virtual reality companies in Dallas"],
    ["video marketing services in chennai", "VR development services in Dallas"],
  ],
  "src/app/(services-main-group)/(extended-reality)/augmented-reality-development-in-texas/page.tsx": [
    ['"https://rankraze.us/augmented-reality-development"', '"https://rankraze.us/augmented-reality-development-in-texas"'],
    ["AR Development | Augmented Reality Development Company in Chennai, India - Rankraze", "AR Development | Augmented Reality Development in Texas | Rankraze"],
    ["Rankraze AR development companies in Chennai, India - We offer", "Rankraze builds augmented reality experiences in Texas — we offer"],
    ["Rankraze AR development company in Chennai, india – We offer", "Rankraze AR development company in Texas — we offer"],
    ["ar companies in chennai", "AR companies in Dallas"],
    ["augmented reality companies in chennai", "augmented reality companies in Dallas"],
    ["video marketing services in chennai", "AR development services in Texas"],
  ],
};

function walkApply(dir, fn) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walkApply(p, fn);
    else if (ent.name === "page.tsx" || ent.name === "page.jsx") fn(p);
  }
}

for (const [rel, pairs] of Object.entries(filePatches)) {
  const abs = path.join(process.cwd(), rel);
  if (!fs.existsSync(abs)) continue;
  let c = fs.readFileSync(abs, "utf8");
  for (const [a, b] of pairs) {
    if (!c.includes(a)) continue;
    c = c.split(a).join(b);
  }
  fs.writeFileSync(abs, c);
}

/** Light pass: fix common alt text in service pages */
walkApply(path.join(process.cwd(), "src/app/(services-main-group)"), (file) => {
  let c = fs.readFileSync(file, "utf8");
  const n = c
    .replace(/video marketing services in chennai/gi, "video marketing services in Dallas")
    .replace(/Services in chennai/gi, "Services in Dallas")
    .replace(/services in chennai/gi, "services in Dallas");
  if (n !== c) fs.writeFileSync(file, n);
});
