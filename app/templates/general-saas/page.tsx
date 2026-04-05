import type { Metadata } from "next";
import { GeneralSaasPage } from "@/components/templates/GeneralSaasPage";

export const metadata: Metadata = {
  title: "General SaaS Template | LaunchX",
  description:
    "Production-ready Next.js SaaS starter kit. Auth, payments, database, emails, SEO — configured and ready to ship. $149 one-time purchase.",
  openGraph: {
    title: "General SaaS Template | LaunchX",
    description:
      "Production-ready Next.js SaaS starter kit. Auth, payments, database, emails, SEO — configured and ready to ship.",
    type: "website",
  },
};

export default function GeneralSaasTemplatePage() {
  return <GeneralSaasPage />;
}
