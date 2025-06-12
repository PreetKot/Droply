"use client";

import { Spinner } from "@heroui/spinner";

export default function FileLoadingState() {
  return (
    <div className="flex flex-col justify-center items-center py-20">
      <Spinner size="lg" color="success" />
      <p className="mt-4 text-lime-400">Loading your files...</p>
    </div>
  );
}