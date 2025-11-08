import { Component, signal } from '@angular/core';
import { Header } from './shared/header/header';
import { Footer } from './shared/footer/footer';
import {  RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ Header, Footer,RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  protected readonly title = signal('hitech-infosystems');
}
