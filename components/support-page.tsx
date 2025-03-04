"use client"
import { LanguageProvider } from "@/lib/language-context"
import Header from "@/components/header"
import SupportContent from "@/components/support-content"
import Footer from "@/components/footer"

export default function SupportPage() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 dark:from-green-950 dark:to-green-900">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <SupportContent />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}

