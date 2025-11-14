import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
})
export class Home implements AfterViewInit, OnDestroy {

  private mainIntervalId: any;
  private projectIntervalId: any;

  ngAfterViewInit() {
    this.initMainSlider();
    this.initProjectSlider();
  }

  ngOnDestroy() {
    clearInterval(this.mainIntervalId);
    clearInterval(this.projectIntervalId);
  }

  private initMainSlider() {
    const slides = document.querySelectorAll<HTMLDivElement>('.main-intro-slider .slide');
    const nextBtn = document.querySelector('.main-intro-slider .next') as HTMLButtonElement;
    const prevBtn = document.querySelector('.main-intro-slider .prev') as HTMLButtonElement;
    const dotsContainer = document.querySelector('.main-intro-slider .dots') as HTMLElement;
    let current = 0;

    slides.forEach((_, index) => {
      const dot = document.createElement('div');
      dot.classList.add('dot');
      if (index === 0) dot.classList.add('active');
      dot.addEventListener('click', () => goToSlide(index));
      dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll<HTMLDivElement>('.main-intro-slider .dot');

    const showSlide = (index: number) => {
      slides.forEach(slide => slide.classList.remove('active'));
      dots.forEach(dot => dot.classList.remove('active'));
      slides[index].classList.add('active');
      dots[index].classList.add('active');
    };

    const goToSlide = (index: number) => {
      current = index;
      showSlide(current);
    };

    nextBtn?.addEventListener('click', () => {
      current = (current + 1) % slides.length;
      showSlide(current);
    });

    prevBtn?.addEventListener('click', () => {
      current = (current - 1 + slides.length) % slides.length;
      showSlide(current);
    });

    this.mainIntervalId = setInterval(() => {
      current = (current + 1) % slides.length;
      showSlide(current);
    }, 8000);
  }

  private initProjectSlider() {
    const projectSlides = document.querySelectorAll<HTMLDivElement>('.project-slider .slide');
    const nextBtn = document.querySelector('.project-slider .next') as HTMLButtonElement;
    const prevBtn = document.querySelector('.project-slider .prev') as HTMLButtonElement;
    const dotsContainer = document.querySelector('.project-slider .dots') as HTMLElement;
    let current = 0;

    projectSlides.forEach((_, index) => {
      const dot = document.createElement('div');
      dot.classList.add('dot');
      if (index === 0) dot.classList.add('active');
      dot.addEventListener('click', () => goToSlide(index));
      dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll<HTMLDivElement>('.project-slider .dot');

    const showSlide = (index: number) => {
      projectSlides.forEach(slide => slide.classList.remove('active'));
      dots.forEach(dot => dot.classList.remove('active'));
      projectSlides[index].classList.add('active');
      dots[index].classList.add('active');
    };

    const goToSlide = (index: number) => {
      current = index;
      showSlide(current);
    };

    nextBtn?.addEventListener('click', () => {
      current = (current + 1) % projectSlides.length;
      showSlide(current);
    });

    prevBtn?.addEventListener('click', () => {
      current = (current - 1 + projectSlides.length) % projectSlides.length;
      showSlide(current);
    });

    this.projectIntervalId = setInterval(() => {
      current = (current + 1) % projectSlides.length;
      showSlide(current);
    }, 8000);
  }
constructor(private router: Router) {}

goToPage(path: string) {
  window.scrollTo({ top: 0, behavior: 'smooth' });

  setTimeout(() => {
    this.router.navigate([path]);
  }, 300);
}
}
