import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  constructor(private route: ActivatedRoute) {}

  shouldHideFooter(): boolean {
    const currentRoute = this.route.root.firstChild?.snapshot.routeConfig?.path;
    return currentRoute === 'login' || currentRoute === 'signup';
  }
}
