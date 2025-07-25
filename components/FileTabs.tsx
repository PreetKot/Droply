"use client";

import { File, Star, Trash } from "lucide-react";
import { Tabs, Tab } from "@heroui/tabs";
import Badge from "@/components/ui/Badge";
import type { File as FileType } from "@/lib/db/schema";

interface FileTabsProps {
  activeTab: string;
  onTabChange: (key: string) => void;
  files: FileType[];
  starredCount: number;
  trashCount: number;
}

export default function FileTabs({
  activeTab,
  onTabChange,
  files,
  starredCount,
  trashCount,
}: FileTabsProps) {
  return (
    <Tabs
      selectedKey={activeTab}
      onSelectionChange={(key) => onTabChange(key as string)}
      color="primary"
      variant="underlined"
      classNames={{
        base: "w-full overflow-x-auto",
        tabList: "gap-2 sm:gap-4 md:gap-6 flex-nowrap min-w-full",
        tab: "py-3 whitespace-nowrap text-lime-400 data-[selected=true]:text-black data-[selected=true]:bg-lime-400",
        cursor: "bg-lime-400",
      }}
    >
      <Tab
        key="all"
        title={
          <div className="flex items-center gap-2 sm:gap-3">
            <File className="h-4 w-4 sm:h-5 sm:w-5 text-lime-400" />
            <span className="font-medium">All Files</span>
            <Badge
              variant="flat"
              color="default"
              size="sm"
              className="bg-black text-lime-400"
              aria-label={`${files.filter((file) => !file.isTrash).length} files`}
            >
              {files.filter((file) => !file.isTrash).length}
            </Badge>
          </div>
        }
      />
      <Tab
        key="starred"
        title={
          <div className="flex items-center gap-2 sm:gap-3">
            <Star className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400" />
            <span className="font-medium">Starred</span>
            <Badge
              variant="flat"
              color="warning"
              size="sm"
              className="bg-yellow-400 text-black"
              aria-label={`${starredCount} starred files`}
            >
              {starredCount}
            </Badge>
          </div>
        }
      />
      <Tab
        key="trash"
        title={
          <div className="flex items-center gap-2 sm:gap-3">
            <Trash className="h-4 w-4 sm:h-5 sm:w-5 text-red-500" />
            <span className="font-medium">Trash</span>
            <Badge
              variant="solid"
              color="danger"
              size="sm"
              className="bg-red-500 text-white"
              aria-label={`${trashCount} files in trash`}
            >
              {trashCount}
            </Badge>
          </div>
        }
      />
    </Tabs>
  );
}
