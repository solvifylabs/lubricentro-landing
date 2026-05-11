import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lubricentro.solvifylabs.com"),

  title: {
    default: "Lubricentro — El sistema que tu taller necesitaba",
    template: "%s | Lubricentro",
  },
  description:
    "Gestioná clientes, vehículos, servicios, stock, ventas y lava-auto desde un solo sistema. Diseñado para talleres y lubricentros.",

  keywords: [
    "sistema de gestión para talleres",
    "software para lubricentros",
    "gestión de servicios automotor",
    "control de stock repuestos",
    "CRM vehiculos",
    "dashboard taller mecánico",
    "lubricentro",
  ],

  authors: [{ name: "Solvify Labs", url: "https://solvifylabs.com" }],
  creator: "Solvify Labs",
  publisher: "Solvify Labs",

  alternates: {
    canonical: "https://lubricentro.solvifylabs.com",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://lubricentro.solvifylabs.com",
    siteName: "Lubricentro",
    title: "Lubricentro — El sistema que tu taller necesitaba",
    description:
      "Gestioná clientes, vehículos, servicios, stock, ventas y lava-auto desde un solo sistema.",
    images: [
      {
        url: "/screenshots/dashboard.png",
        width: 1200,
        height: 630,
        alt: "Dashboard de Lubricentro — Sistema de gestión para talleres",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Lubricentro — El sistema que tu taller necesitaba",
    description:
      "Gestioná clientes, vehículos, servicios, stock, ventas y lava-auto desde un solo sistema.",
    images: ["/screenshots/dashboard.png"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/logo.webp",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${geist.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Lubricentro",
              applicationCategory: "BusinessApplication",
              operatingSystem: "Web",
              description:
                "Sistema de gestión para talleres y lubricentros. Clientes, vehículos, servicios, stock y ventas desde un dashboard.",
              url: "https://lubricentro.solvifylabs.com",
              publisher: {
                "@type": "Organization",
                name: "Solvify Labs",
                url: "https://solvifylabs.com",
              },
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
