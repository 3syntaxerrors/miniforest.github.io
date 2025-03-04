import { useLanguage } from "@/lib/language-context"
import { Mail } from "lucide-react"

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t py-6 md:py-8">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex items-center gap-2">
          <img
            src="forest_logo.png"
            alt="Mini Forest Logo"
            className="h-6 w-6"
          />
          <span className="text-sm font-medium text-green-700 dark:text-green-400">
            Mini Forest
          </span>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
          <a
            href="mailto:kaprofis@gmail.com"
            className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <Mail className="h-4 w-4" />
            kaprofis@gmail.com
          </a>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <a
              href="/privacy-policy"
              className="hover:underline hover:text-foreground transition-colors"
            >
              {t("privacy_policy")}
            </a>
            <a
              href="/terms-of-service"
              className="hover:underline hover:text-foreground transition-colors"
            >
              {t("terms_of_service")}
            </a>
          </div>
        </div>
        <p className="text-xs text-muted-foreground">{t("copyright")}</p>
      </div>
    </footer>
  )
}
