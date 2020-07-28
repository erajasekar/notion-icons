import { IIconInfo } from '../gallery/config'

export function getIconUrl (baseUrl: string, style: string, size: string, color: string, name: string) {
  return `${baseUrl}/${style}/${size}/${color.substring(1)}/${name}.png`
}

export function filterIconByNameOrTag (icon: IIconInfo, searchKeyword: string) {
  const keyword = searchKeyword.toLowerCase()
  return icon.name.includes(keyword) || icon.tags.findIndex((t: any) => t.includes(keyword)) >= 0
}
