import { Component, Input } from '@angular/core'

@Component({ 
    selector: 'app-warning-alert',
    template: `<h4>Warning! {{ message }}</h4>`,
    styles: [
        `h4 {
            color: orange
        }`
    ]
})
export class WarningAlertComponent { 
    
    @Input()
    message: string = "Something is wrong here...."
}