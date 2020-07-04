export function getIconUrl (baseUrl: string, style: string, size: string, color: string, name: string) {
  return `${baseUrl}/${style}/${size}/${color.substring(1)}/${name}.png`
}
