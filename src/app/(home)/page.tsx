import React from "react"
import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"
import { Check, Folder, Users, Clock, ShieldCheck } from "lucide-react"

export const metadata: Metadata = {
  title: "Ahason – All-in-One Digital Life Platform",
  description:
    "Simplify your digital world with Ahason. One platform for privacy, identity, and everything you do online — calm, clear, and fully yours.",
  keywords: [
    "ahason",
    "digital identity",
    "privacy platform",
    "lifestyle app",
    "secure login",
    "all in one app",
  ],
  robots: "index, follow",
  openGraph: {
    title: "Ahason – All-in-One Digital Life Platform",
    description:
      "Simplify your digital world with Ahason. One platform for privacy, identity, and everything you do online — calm, clear, and fully yours.",
    url: "https://ahason.com",
    type: "website",
    images: [
      {
        url: "https://ahason.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ahason Hero Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahason – All-in-One Digital Life Platform",
    description:
      "Simplify your digital world with Ahason. One platform for privacy, identity, and everything you do online — calm, clear, and fully yours.",
    images: ["https://ahason.com/og-image.png"],
  },
  alternates: {
    canonical: "https://ahason.com",
  },
}

export default function HomePage() {
  return (
    <div className="bg-white text-black">
      {/* Header */}
      <header className="max-w-5xl mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">Ahason</div>
        <div className="text-sm text-gray-500">EN</div>
      </header>

      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-4 md:px-6 text-center py-12">
        <h1 className="text-4xl md:text-6xl font-extrabold">
          Everything You Are. All in One Place.
        </h1>
        <p className="mt-4 text-base md:text-lg text-gray-500">
          Ahason simplifies your digital world — with privacy, power, and
          personally built in.
        </p>
        <div className="mt-6">
          <Button variant="default" asChild>
            <a href="#">Get Started</a>
          </Button>
        </div>
      </section>

      {/* Section 1: Life. Simplified. */}
      <section className="max-w-5xl mx-auto px-4 md:px-6 py-12 md:flex md:space-x-8">
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-5xl font-extrabold">Life. Simplified.</h2>
          <p className="mt-4 text-base md:text-lg text-gray-500">
            Tired of jumping between apps, logins, and chaos? Ahason brings your
            digital life together — clean, calm, and fully yours.
          </p>
        </div>
        <ul className="mt-6 md:mt-0 md:w-1/2 space-y-4">
          <li className="flex items-start">
            <Check className="h-6 w-6 text-blue-500 mt-1" />
            <span className="ml-2 text-base text-gray-500">Private by design</span>
          </li>
          <li className="flex items-start">
            <Check className="h-6 w-6 text-blue-500 mt-1" />
            <span className="ml-2 text-base text-gray-500">Smart and intuitive</span>
          </li>
          <li className="flex items-start">
            <Check className="h-6 w-6 text-blue-500 mt-1" />
            <span className="ml-2 text-base text-gray-500">Works across your lifestyle</span>
          </li>
          <li className="flex items-start">
            <Check className="h-6 w-6 text-blue-500 mt-1" />
            <span className="ml-2 text-base text-gray-500">
              Designed for humans, not algorithms
            </span>
          </li>
        </ul>
      </section>

      {/* Section 2: One place. Infinite possibilities. */}
      <section className="max-w-5xl mx-auto px-4 md:px-6 py-12">
        <h2 className="text-3xl md:text-5xl font-extrabold text-center">
          One place. Infinite possibilities.
        </h2>
        <p className="mt-4 text-base md:text-lg text-gray-500 text-center">
          From staying organized to staying connected — Ahason gives you the tools
          to live better online.
        </p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Feature Card 1 */}
          <Card className="p-6 text-center">
            <CardHeader className="flex flex-col items-center">
              <Folder className="h-6 w-6 text-blue-500 mb-4" />
              <CardTitle>Manage your digital world</CardTitle>
              <CardDescription>
                Organize tasks, files, and apps all in one place.
              </CardDescription>
            </CardHeader>
          </Card>
          {/* Feature Card 2 */}
          <Card className="p-6 text-center">
            <CardHeader className="flex flex-col items-center">
              <Users className="h-6 w-6 text-blue-500 mb-4" />
              <CardTitle>Connect with people who matter</CardTitle>
              <CardDescription>
                Stay in touch with friends and family effortlessly.
              </CardDescription>
            </CardHeader>
          </Card>
          {/* Feature Card 3 */}
          <Card className="p-6 text-center">
            <CardHeader className="flex flex-col items-center">
              <Clock className="h-6 w-6 text-blue-500 mb-4" />
              <CardTitle>Save time, energy, and attention</CardTitle>
              <CardDescription>
                Let Ahason handle the busywork so you can focus on what matters.
              </CardDescription>
            </CardHeader>
          </Card>
          {/* Feature Card 4 */}
          <Card className="p-6 text-center">
            <CardHeader className="flex flex-col items-center">
              <ShieldCheck className="h-6 w-6 text-blue-500 mb-4" />
              <CardTitle>Always stay in control</CardTitle>
              <CardDescription>
                Enjoy full privacy and control over your data.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Section 3: Built for all walks of life. */}
      <section className="max-w-5xl mx-auto px-4 md:px-6 py-12 md:flex md:space-x-8">
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-5xl font-extrabold">
            Built for all walks of life.
          </h2>
          <p className="mt-4 text-base md:text-lg text-gray-500">
            Whether you{'\''}re a creator, a student, a parent, or just someone who
            wants less digital noise — Ahason adapts to you.
          </p>
        </div>
        <ul className="mt-6 md:mt-0 md:w-1/2 space-y-4">
          <li className="flex items-start">
            <Check className="h-6 w-6 text-blue-500 mt-1" />
            <span className="ml-2 text-base text-gray-500">Clarity over clutter</span>
          </li>
          <li className="flex items-start">
            <Check className="h-6 w-6 text-blue-500 mt-1" />
            <span className="ml-2 text-base text-gray-500">
              Privacy without compromise
            </span>
          </li>
          <li className="flex items-start">
            <Check className="h-6 w-6 text-blue-500 mt-1" />
            <span className="ml-2 text-base text-gray-500">Freedom, not friction</span>
          </li>
          <li className="flex items-start">
            <Check className="h-6 w-6 text-blue-500 mt-1" />
            <span className="ml-2 text-base text-gray-500">Less apps, More you</span>
          </li>
        </ul>
      </section>

      {/* Section 4: Final CTA */}
      <section className="max-w-5xl mx-auto px-4 md:px-6 text-center py-12">
        <h2 className="text-3xl md:text-5xl font-extrabold">
          Ready to reclaim your digital life?
        </h2>
        <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
          <Button variant="default" asChild>
            <a href="#">Get Started</a>
          </Button>
          <Button variant="outline" asChild>
            <a href="#">Follow Us on Shagram</a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-5xl mx-auto px-4 md:px-6 py-6 flex flex-col sm:flex-row justify-between text-sm text-gray-500">
        <div>© 2025 Ahason. All rights reserved.</div>
        <div>Built for humans. Powered by purpose.</div>
      </footer>
    </div>
  )
}
