"use client"

import type React from "react"

import { useState } from "react"
import {
  Search,
  HelpCircle,
  Cpu,
  User,
  CreditCard,
  Gamepad2,
  Send,
  Paperclip,
} from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function SupportContent() {
  const { t } = useLanguage()
  const [searchQuery, setSearchQuery] = useState("")
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    issueType: "",
    message: "",
  })
  const [formErrors, setFormErrors] = useState({
    name: false,
    email: false,
    issueType: false,
    message: false,
  })

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setContactForm((prev) => ({ ...prev, [name]: value }))
    setFormErrors((prev) => ({ ...prev, [name]: false }))
  }

  const handleSelectChange = (value: string) => {
    setContactForm((prev) => ({ ...prev, issueType: value }))
    setFormErrors((prev) => ({ ...prev, issueType: false }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const errors = {
      name: !contactForm.name,
      email: !contactForm.email || !/\S+@\S+\.\S+/.test(contactForm.email),
      issueType: !contactForm.issueType,
      message: !contactForm.message,
    }

    setFormErrors(errors)

    if (!Object.values(errors).some(Boolean)) {
      // Submit form logic would go here
      console.log("Form submitted:", contactForm)
      // Reset form
      setContactForm({
        name: "",
        email: "",
        issueType: "",
        message: "",
      })
    }
  }

  const supportCategories = [
    { id: "faq", icon: <HelpCircle className="h-5 w-5" />, label: t("faq") },
    {
      id: "technical",
      icon: <Cpu className="h-5 w-5" />,
      label: t("technical_issues"),
    },
    {
      id: "account",
      icon: <User className="h-5 w-5" />,
      label: t("account_support"),
    },
    // { id: "billing", icon: <CreditCard className="h-5 w-5" />, label: t("billing") },
    // { id: "gameplay", icon: <Gamepad2 className="h-5 w-5" />, label: t("gameplay") },
  ]

  return (
    <div className="space-y-8">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold tracking-tight text-green-800 dark:text-green-300">
          {t("support_title")}
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          {t("support_subtitle")}
        </p>
      </div>

      <div className="relative max-w-md mx-auto">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input
          placeholder={t("search_placeholder")}
          className="pl-10"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {supportCategories.map((category) => (
          <Card
            key={category.id}
            className="hover:shadow-md transition-shadow cursor-pointer"
          >
            <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
              <div className="p-2 rounded-full bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300">
                {category.icon}
              </div>
              <p className="font-medium">{category.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="faq" className="max-w-3xl mx-auto">
        {/* <TabsList className="grid grid-cols-2">
          <TabsTrigger value="faq">{t("faq")}</TabsTrigger>
          <TabsTrigger value="contact">{t("contact_us")}</TabsTrigger>
        </TabsList> */}
        <TabsContent value="faq" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>{t("faq_title")}</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>{t("faq1_question")}</AccordionTrigger>
                  <AccordionContent>{t("faq1_answer")}</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>{t("faq2_question")}</AccordionTrigger>
                  <AccordionContent>{t("faq2_answer")}</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>{t("faq3_question")}</AccordionTrigger>
                  <AccordionContent>{t("faq3_answer")}</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>{t("faq4_question")}</AccordionTrigger>
                  <AccordionContent>{t("faq4_answer")}</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>{t("faq5_question")}</AccordionTrigger>
                  <AccordionContent>{t("faq5_answer")}</AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>
        {/* <TabsContent value="contact" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>{t("contact_form_title")}</CardTitle>
              <CardDescription>
                {t("contact_form_subtitle")} -{" "}
                <a
                  href="mailto:kaprofis@gmail.com"
                  className="text-primary hover:underline"
                >
                  kaprofis@gmail.com
                </a>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">{t("name")}</Label>
                  <Input
                    id="name"
                    name="name"
                    value={contactForm.name}
                    onChange={handleInputChange}
                    className={formErrors.name ? "border-red-500" : ""}
                  />
                  {formErrors.name && (
                    <p className="text-sm text-red-500">
                      {t("required_field")}
                    </p>
                  )}
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">{t("email")}</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={contactForm.email}
                    onChange={handleInputChange}
                    className={formErrors.email ? "border-red-500" : ""}
                  />
                  {formErrors.email && (
                    <p className="text-sm text-red-500">{t("valid_email")}</p>
                  )}
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="issueType">{t("issue_type")}</Label>
                  <Select
                    value={contactForm.issueType}
                    onValueChange={handleSelectChange}
                  >
                    <SelectTrigger
                      id="issueType"
                      className={formErrors.issueType ? "border-red-500" : ""}
                    >
                      <SelectValue placeholder={t("issue_type_placeholder")} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="technical">
                        {t("issue_technical")}
                      </SelectItem>
                      <SelectItem value="account">
                        {t("issue_account")}
                      </SelectItem>
                      <SelectItem value="billing">
                        {t("issue_billing")}
                      </SelectItem>
                      <SelectItem value="gameplay">
                        {t("issue_gameplay")}
                      </SelectItem>
                      <SelectItem value="other">{t("issue_other")}</SelectItem>
                    </SelectContent>
                  </Select>
                  {formErrors.issueType && (
                    <p className="text-sm text-red-500">
                      {t("required_field")}
                    </p>
                  )}
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="message">{t("message")}</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder={t("message_placeholder")}
                    value={contactForm.message}
                    onChange={handleInputChange}
                    className={formErrors.message ? "border-red-500" : ""}
                  />
                  {formErrors.message && (
                    <p className="text-sm text-red-500">
                      {t("required_field")}
                    </p>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <Button type="button" variant="outline" size="sm">
                    <Paperclip className="h-4 w-4 mr-2" />
                    {t("attach_file")}
                  </Button>
                </div>
                <Button type="submit" className="w-full">
                  <Send className="h-4 w-4 mr-2" />
                  {t("submit")}
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent> */}
      </Tabs>
    </div>
  )
}
