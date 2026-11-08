import data from "./cases.json";

export type CaseStudy = {
  slug: string;
  title: string;
  kicker: string;
  category: string;
  summary: string;
  cover: string;
  tools: string[];
  highlights: string[];
  role: string;
  clientName?: string;
  clientWebsite?: string;
  overview: string[];
  challenge: string[];
  objectives: string[];
  steps: { title: string; text: string[] }[];
  stack: string[];
  results: string[];
  note: string;
  contribution: string[];
  screenshots: { src: string; caption: string }[];
};

export const cases = data as CaseStudy[];

export const getCase = (slug: string) => cases.find((c) => c.slug === slug);

/** Prefer the lighter .webp version of a cover when one exists. */
export const coverImage = (c: CaseStudy) => c.cover.replace(/\.png$/, ".webp");
