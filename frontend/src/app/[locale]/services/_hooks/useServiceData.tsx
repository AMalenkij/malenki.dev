import { useTranslations } from "next-intl";
import { ProcessStep } from "../_components/ProcessStep";

export const useServiceData = () => {
	const t = useTranslations("Services");

	const rawData = [
		{
			title: t("steps.level1.title"),
			stepNumber: "01",
			stepTitle: t("steps.level1.stepTitle"),
			description: t("steps.level1.description"),
			details: [
				{
					title: t("steps.level1.details.0.title"),
					description: t("steps.level1.details.0.description"),
				},
				{
					title: t("steps.level1.details.1.title"),
					description: t("steps.level1.details.1.description"),
				},
				{
					title: t("steps.level1.details.2.title"),
					description: t("steps.level1.details.2.description"),
				},
			],
		},
		{
			title: t("steps.level2.title"),
			stepNumber: "02",
			stepTitle: t("steps.level2.stepTitle"),
			description: t("steps.level2.description"),
			details: [
				{
					title: t("steps.level2.details.0.title"),
					description: t("steps.level2.details.0.description"),
				},
				{
					title: t("steps.level2.details.1.title"),
					description: t("steps.level2.details.1.description"),
				},
				{
					title: t("steps.level2.details.2.title"),
					description: t("steps.level2.details.2.description"),
				},
			],
		},
		{
			title: t("steps.level3.title"),
			stepNumber: "03",
			stepTitle: t("steps.level3.stepTitle"),
			description: t("steps.level3.description"),
			details: [
				{
					title: t("steps.level3.details.0.title"),
					description: t("steps.level3.details.0.description"),
				},
				{
					title: t("steps.level3.details.1.title"),
					description: t("steps.level3.details.1.description"),
				},
				{
					title: t("steps.level3.details.2.title"),
					description: t("steps.level3.details.2.description"),
				},
			],
		},
		{
			title: t("steps.level4.title"),
			stepNumber: "04",
			stepTitle: t("steps.level4.stepTitle"),
			description: t("steps.level4.description"),
			details: [
				{
					title: t("steps.level4.details.0.title"),
					description: t("steps.level4.details.0.description"),
				},
				{
					title: t("steps.level4.details.1.title"),
					description: t("steps.level4.details.1.description"),
				},
				{
					title: t("steps.level4.details.2.title"),
					description: t("steps.level4.details.2.description"),
				},
			],
		},
	];

	const data = rawData.map((item) => ({
		title: item.title,
		content: (
			<ProcessStep
				stepNumber={item.stepNumber}
				title={item.stepTitle}
				description={item.description}
				details={item.details}
			/>
		),
	}));

	return data;
};
