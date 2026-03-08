import { redirect } from "@/i18n/routing";

export default function IndexPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  redirect({ href: "/home", locale });
}
