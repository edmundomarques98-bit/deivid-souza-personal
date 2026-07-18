export const whatsappBaseUrl = "https://wa.me/+558899971666";

export function whatsappLink(message?: string) {
  if (!message) return whatsappBaseUrl;
  return `${whatsappBaseUrl}?text=${encodeURIComponent(message)}`;
}
