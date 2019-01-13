import { Component } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ],
})
export class AppComponent {
  linkedInProfileURL = 'https://www.linkedin.com/in/hunter-kyle-gearhart-1a486845'

  constructor(private router: Router) {
  }

  showAboutPage(): void {
    this.router.navigate([ 'about' ])
  }

  navigateToMainContents() {
    this.router.navigate([ '' ])
  }
}
