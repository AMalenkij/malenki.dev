import { useTranslations } from "next-intl";
import { Timeline } from "./_components/timeline";
import { useServiceData } from "./_hooks/useServiceData";

export default function ServicesPage() {
	const t = useTranslations("Services");
	const data = useServiceData();

	return (
		<main className="container mx-auto px-4">
			<div className="mx-auto py-20 flex flex-col">
				<h2 className="text-lg md:text-9xl mb-4 text-foreground font-bold">
					{t("hero.title")}
				</h2>
				<div className="w-xl ml-auto text-right text-muted-foreground md:text-2xl leading-relaxed">
					<p>{t("hero.subtitle")}</p>
					<p>{t("hero.description")}</p>
				</div>
			</div>
			<Timeline data={data} />
		</main>
	);
}
