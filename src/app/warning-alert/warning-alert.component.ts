import { Component } from '@angular/core'

@Component({ 
    selector: 'app-warning-alert',
    template: `<h4>Warning! Something is wrong here....</h4>`,
    styles: [
        `h4 {
            color: orange
        }`
    ]
})
export class WarningAlertComponent { 

}