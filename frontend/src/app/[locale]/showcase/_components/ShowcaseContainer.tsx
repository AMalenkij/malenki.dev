"use client";

import { LayoutGrid, List } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import type { AppProject } from "@/modules/showcase/showcase.adapter";
import { ShowcaseGridView } from "./ShowcaseGridView";
import { ShowcaseListView } from "./ShowcaseListView";

type ShowcaseContainerProps = {
    projects: AppProject[];
};

type ViewMode = "list" | "grid";

export function ShowcaseContainer({ projects }: ShowcaseContainerProps) {
    const [viewMode, setViewMode] = useState<ViewMode>("list");
    const [activeTag, setActiveTag] = useState<string>("All");

    // Extract unique tags and sort them alphabetically
    const uniqueTags = Array.from(
        new Set(projects.flatMap((project) => project.tags || [])),
    ).sort();

    const allTags = ["All", ...uniqueTags];

    // Filter projects based on active tag
    const filteredProjects =
        activeTag === "All"
            ? projects
            : projects.filter((project) => project.tags?.includes(activeTag));

    return (
        <div className="w-full flex flex-col gap-6">
            {/* Toolbar */}
            <div className="flex flex-col-reverse md:flex-row justify-between items-start md:items-center gap-4 mb-2">
                {/* Tag Filters */}
                <div className="flex flex-wrap items-center gap-2">
                    {allTags.map((tag) => (
                        <Button
                            key={tag}
                            onClick={() => setActiveTag(tag)}
                            variant={activeTag === tag ? "default" : "secondary"}
                            className="rounded-full h-8 px-4"
                        >
                            {tag}
                        </Button>
                    ))}
                </div>

                {/* View Toggle */}
                <div className="flex items-center rounded-md border border-border bg-muted/30 p-1 shrink-0">
                    <Button
                        onClick={() => setViewMode("list")}
                        variant="ghost"
                        size="icon-sm"
                        className={
                            viewMode === "list"
                                ? "bg-background text-foreground shadow-sm hover:bg-background hover:text-foreground focus-visible:ring-1"
                                : "text-muted-foreground hover:text-foreground hover:bg-muted"
                        }
                        aria-label="List view"
                    >
                        <List className="size-4" />
                    </Button>
                    <Button
                        onClick={() => setViewMode("grid")}
                        variant="ghost"
                        size="icon-sm"
                        className={
                            viewMode === "grid"
                                ? "bg-background text-foreground shadow-sm hover:bg-background hover:text-foreground focus-visible:ring-1"
                                : "text-muted-foreground hover:text-foreground hover:bg-muted"
                        }
                        aria-label="Grid view"
                    >
                        <LayoutGrid className="size-4" />
                    </Button>
                </div>
            </div>

            {/* Content */}
            <div className="w-full min-h-[500px]">
                {filteredProjects.length === 0 ? (
                    <div className="w-full py-20 flex justify-center text-muted-foreground">
                        No projects found for this tag.
                    </div>
                ) : viewMode === "list" ? (
                    <ShowcaseListView projects={filteredProjects} />
                ) : (
                    <ShowcaseGridView projects={filteredProjects} />
                )}
            </div>
        </div>
    );
}
