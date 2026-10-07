/// <reference types="vite/client" />

interface Window {
  // Google Ads click-to-call conversion, defined in index.html
  gtag_report_conversion?: (url?: string) => boolean;
}
