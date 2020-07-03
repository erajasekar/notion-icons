export function getImgUrl (baseUrl: string, style: string, size: string, color: string, name: string) {
  return `${baseUrl}/${style}/${size}/${color}/${name}.png`
}
