
/// <reference types="vite/client" />

// Add custom property to HTMLImageElement for fetchPriority
interface HTMLImageElement {
  fetchPriority?: 'high' | 'low' | 'auto';
}
