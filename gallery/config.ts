import data from '../config/icons-config.json'

interface IIconInfo {
  name: string
  tags: Array<string>
}

export class IconInfo implements IIconInfo {
  name: string
  tags: Array<string>

  constructor (name: any, tags: any) {
    this.name = name
    this.tags = tags
  }
}

export class IconConfig {
  url: string
  size: string
  style: string
  icons : Array<IconInfo>

  constructor () {
    const icon8Data: any = data.config[0].icon8
    this.url = icon8Data.url
    this.size = icon8Data.size
    this.style = icon8Data.style
    this.icons = []
    icon8Data.icons.forEach((ele: any) => {
      this.icons.push(new IconInfo(ele.name, ele.tags))
    })
  }
}
