const { google } = require('googleapis')

let googleCalendar = null

class GoogleCalendarService {
    static createConnection(auth){
        if(!googleCalendar){
            googleCalendar = google.calendar({ version: 'v3', auth })
        }

        return googleCalendar
    }

    static getCalendarScope(scope){
        const scopes =  {
            'read/write': 'https://www.googleapis.com/auth/calendar',
            'readonly': 'https://www.googleapis.com/auth/calendar.readonly'
        }

        return [scopes[scope]]
    }

    static async getCalendarsList(){
        const { data } = await googleCalendar.calendarList.list()

        return data
    }

    static async getCalendarDataById(calendarId){
        const { data } = await googleCalendar.calendars.get({ calendarId })
        
        return data
    }

    static async getEventsByCalendarId(calendarId){
        const { data } = await googleCalendar.events.list({
            calendarId
        })

        return data
    }
}

module.exports = GoogleCalendarService