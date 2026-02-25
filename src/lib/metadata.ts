import { Metadata } from "@/types/drawing";

export async function getMetadata(): Promise<Metadata> {
  const res = await fetch("/data/metadata.json");
  const data: Metadata = await res.json();
  return data;
}
