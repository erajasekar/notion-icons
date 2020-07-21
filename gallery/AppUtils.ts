import Constants from './Constants'

export function getCurrentPageUrl (urlPath: string) {
  return Constants.APP_BASE_URL + urlPath
}
