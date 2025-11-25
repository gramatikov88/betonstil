import React from 'react';

export interface Product {
  id: number;
  title: string;
  category: string;
  image: string;
  price?: string;
  description: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface GalleryItem {
  id: number;
  image: string;
  title: string;
  category: string;
}

export interface ProcessStep {
  id: number;
  number: string;
  title: string;
  description: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  image: string;
}