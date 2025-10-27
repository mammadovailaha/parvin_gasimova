export interface BrandingWork {
  id: number;
  name: string;
  slug: string;
  images: string[];
  cover:string;
  about?:string;
  category?:string;
}
export interface print {
  id: number;
  name: string;
  slug: string;
  images: string[];
}

export interface Post {
  id: number;
  images: string[];
}

export interface Work {
  id: number;
  company: string;
  year: string;
  posts?: Post[];
  images?: string[];
}

export interface PortfolioItem {
  id: number;
  serviceName: string;
  serviceImage: string;
  isBranding?: boolean;
  isPrint?:boolean;
  brandings?: BrandingWork[];
  print?:print[];
  works?: Work[];
}