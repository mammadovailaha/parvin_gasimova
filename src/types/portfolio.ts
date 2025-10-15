export interface BrandingWork {
  id: number;
  name: string;
  slug: string;
  images: string[];
}

export interface Work {
  id: number;
  type: "carousel" | "video" | "single";
  ProjectName: string;
  year: string;
  about: string;
  images?: string[];
  video?: string;
}

export interface PortfolioItem {
  id: number;
  serviceName: string;
  serviceImage: string;
  isBranding?: boolean;
  brandings?: BrandingWork[];
  works?: Work[];
}