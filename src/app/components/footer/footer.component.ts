import { Component } from '@angular/core';
import { creatorConfig } from 'src/utils/creatorConfig';
import {
  faGithub,
  faTwitter,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  twitter = faTwitter;
  github = faGithub;
  linkedIn = faLinkedin;

  // links
  twitter_url = creatorConfig.TWITTER_URL;
  github_url = creatorConfig.GITHUB_URL;
  linkedin_url = creatorConfig.LINKEDIN_URL;
}
