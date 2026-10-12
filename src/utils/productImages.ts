import { Product } from '../types';

/**
 * Maps all 16 strategic products to their exact physical photography asset files
 * stored in /public/assets/images/products/
 */
export const PRODUCT_IMAGE_FILENAME_MAP: Record<string, string> = {
  'challenger': 'challenger.jpg',
  'humifarm': 'humifarm.jpg',
  'jumper': 'jumper.jpg',
  'full-charger': 'full-charger.jpg',
  'redfol': 'red-full.jpg',
  'red-full': 'red-full.jpg',
  'doping': 'doping.jpg',
  'siligard': 'siligard.jpg',
  'stormy': 'stormy.jpg',
  'fiction': 'fiction.jpg',
  'top-star': 'top-star.jpg',
  'tiger-k-high': 'tiger-k.jpg',
  'tiger-k': 'tiger-k.jpg',
  'tiger-p-high': 'tiger-p.jpg',
  'tiger-p': 'tiger-p.jpg',
  'sol-max': 'sulmax.jpg',
  'sulmax': 'sulmax.jpg',
  'salt-stop': 'salt-stop.jpg',
  'angela': 'angela.jpg',
  'ph-best': 'ph-best.jpg'
};

/**
 * Resolves a reliable, absolute or basePath-aware URL for any product photo
 * Works seamlessly in root dev server, sub-directories, GitHub Pages (/pishgaman),
 * and nested routes like /products/challenger/ or /en/products/challenger/.
 */
export function getProductImageUrl(product?: { id?: string; slug?: string; imageUrl?: string } | null): string {
  if (!product) return '';

  const isGhPages = typeof window !== 'undefined' && window.location.pathname.startsWith('/pishgaman');
  const basePath = isGhPages ? '/pishgaman' : '';

  // 1. Try resolving by slug or ID
  const key = (product.slug || product.id || '').toLowerCase().trim();
  const filename = PRODUCT_IMAGE_FILENAME_MAP[key];

  if (filename) {
    return `${basePath}/assets/images/products/${filename}`;
  }

  // 2. Try resolving from imageUrl if provided
  if (product.imageUrl && product.imageUrl.trim() !== '') {
    const raw = product.imageUrl.trim();
    // If it is already an absolute http/https link
    if (raw.startsWith('http://') || raw.startsWith('https://')) {
      return raw;
    }
    // Extract filename if points to /assets/images/products/
    const match = raw.match(/([^/]+\.(?:jpg|jpeg|png|webp))/i);
    if (match && match[1]) {
      return `${basePath}/assets/images/products/${match[1]}`;
    }
    // Clean relative prefixes like ./ or /
    const clean = raw.replace(/^\.?\//, '');
    return `${basePath}/${clean}`;
  }

  return '';
}
