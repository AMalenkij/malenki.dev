type PageHeadingProps = {
  sectionName: string;
  title: string;
  counter?: string | number;
};

export function PageHeading({ sectionName, title, counter }: PageHeadingProps) {
  return (
    <section
      aria-labelledby={title}
      className="flex w-full justify-between py-12"
    >
      <div className="w-full space-y-3 ">
        <h3 className="text-muted-foreground text-xs sm:text-sm md:ml-3.5 lg:ml-3.5">
          {sectionName}
        </h3>
        <div className="flex w-full items-center justify-between">
          <div className="flex">
            <h1 className="font-accent text-6xl sm:text-7xl md:text-8xl">
              {title}
            </h1>
            <div className="flex flex-col items-center gap-y-1 md:gap-y-3.5">
              <p className="p-0.5 font-light text-lg sm:p-1 md:p-3.5">
                {"{ "}
                {counter}
                {" }"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
