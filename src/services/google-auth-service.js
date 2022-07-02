const { google } = require('googleapis')

class GoogleAuthService {
    static async getJwtAuth({clientEmail, privateKey, scopes}){
        return new google.auth.JWT({ email: clientEmail, key: privateKey, scopes })
    }
}

module.exports = GoogleAuthService