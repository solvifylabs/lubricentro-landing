import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dishflow.solvifylabs.com"),

  title: {
    default: "Dishflow — El sistema que tu cocina necesitaba",
    template: "%s | Dishflow",
  },
  description:
    "Gestioná pedidos, armá combos, imprimí tickets y controlá delivery desde un solo dashboard. Diseñado para el ritmo de la cocina argentina.",

  keywords: [
    "sistema de gestión gastronómica",
    "software para restaurantes",
    "gestión de pedidos",
    "sistema de delivery",
    "cocina en tiempo real",
    "dashboard restaurante",
    "dishflow",
  ],

  authors: [{ name: "Solvify Labs", url: "https://solvifylabs.com" }],
  creator: "Solvify Labs",
  publisher: "Solvify Labs",

  alternates: {
    canonical: "https://dishflow.solvifylabs.com",
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
    url: "https://dishflow.solvifylabs.com",
    siteName: "Dishflow",
    title: "Dishflow — El sistema que tu cocina necesitaba",
    description:
      "Gestioná pedidos, armá combos, imprimí tickets y controlá delivery desde un solo dashboard.",
    images: [
      {
        url: "/screenshots/dashboard.png",
        width: 1200,
        height: 630,
        alt: "Dashboard de Dishflow — Sistema de gestión gastronómica",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Dishflow — El sistema que tu cocina necesitaba",
    description:
      "Gestioná pedidos, armá combos, imprimí tickets y controlá delivery desde un solo dashboard.",
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
              name: "Dishflow",
              applicationCategory: "BusinessApplication",
              operatingSystem: "Web",
              description:
                "Sistema de gestión para locales gastronómicos. Pedidos, combos, tickets y delivery desde un dashboard.",
              url: "https://dishflow.solvifylabs.com",
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
