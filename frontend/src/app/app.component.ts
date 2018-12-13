import { Component } from '@angular/core'
import { BlogArticleService } from './blog-article.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  linkedInProfileURL = 'https://www.linkedin.com/in/hunter-kyle-gearhart-1a486845'

  constructor(private router: Router) {
  }

  showAboutPage(): void {
    this.router.navigate([ 'about' ])
  }
}
