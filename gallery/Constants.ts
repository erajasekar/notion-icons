export default class Constants {
    public static readonly IS_PROD = process.env.NODE_ENV === 'production'
    public static readonly APP_BASE_URL = Constants.IS_PROD ? 'https://notion.erajasekar.com' : 'http://localhost:3333'
}
