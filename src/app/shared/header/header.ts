import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrls: ['./header.scss']
})
export class Header {


selectedTab: string | null = null;

selectTab(tab: string) {
  if (!this.selectedTab) {
    this.selectedTab = tab;
  }
}


}
