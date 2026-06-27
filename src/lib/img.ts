/**
 * Build an Unsplash delivery URL for a given photo id. Demo imagery only —
 * Next's image optimizer downscales these to the right size per device.
 */
export function unsplash(id: string, w = 1400): string {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=70`;
}
