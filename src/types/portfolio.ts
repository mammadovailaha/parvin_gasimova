// src/types/portfolio.ts

export interface Work {
  id: number;
  type: string;
  ProjectName: string;
  year: string;
  about: string;
  images?: string[];
  image?: string[];
  video?: string;
}

export interface PortfolioItem {
  id: number;
  serviceName: string;
  serviceImage: string;
  works: Work[];
}