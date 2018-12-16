import { Component } from '@angular/core'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
})
export class AboutComponent {
  aboutBlurb = `
    My name is Kyle Gearhart, a software engineer working at Pivotal Labs in Tokyo.
    I'm in love with languages—those of the computer, human, and musical variety all pique
    my interest greatly. Until now, I've spent much time learning how things are expressed
    with these mediums, and now I'm turning to expressing myself through them. I hope to
    contribute to a number of subjects, but the most important to me are software craftsmanship,
    language learning, nutrition, and ecological sustainability.
   `
}
