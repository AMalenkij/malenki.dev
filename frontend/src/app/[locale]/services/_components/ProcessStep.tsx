type StepDetail = {
	title: string;
	description: string;
};

type ProcessStepProps = {
	stepNumber: string;
	title: string;
	description: string;
	details: StepDetail[];
	className?: string;
};

export function ProcessStep({
	stepNumber,
	title,
	description,
	details,
	className,
}: ProcessStepProps) {
	return (
		<div className={className}>
			{/* Title and badge */}
			<div className="mb-6">
				<div className="inline-block px-3 py-1 text-xs font-medium border border-border rounded-full mb-4">
					{stepNumber}
				</div>
				<h2 className="text-2xl md:text-3xl font-semibold text-foreground">
					{title}
				</h2>
			</div>

			{/* Main description */}
			<p className="text-lg text-muted-foreground leading-relaxed mb-8 text-balance">
				{description}
			</p>

			{/* List details */}
			<div className="space-y-6 border-l border-border pl-6">
				{details.map((item) => (
					<div key={item.title} className="last:pb-6">
						<h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
						<p className="text-muted-foreground leading-relaxed">
							{item.description}
						</p>
					</div>
				))}
			</div>
		</div>
	);
}
