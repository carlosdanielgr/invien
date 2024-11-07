import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;

    if (scrollPosition > 50) {
      this.addClass();
    } else this.removeClass();
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  addClass(): void {
    this.renderer.addClass(
      this.el.nativeElement.querySelector('header'),
      'navbar-scrolled'
    );
  }

  removeClass(): void {
    this.renderer.removeClass(
      this.el.nativeElement.querySelector('header'),
      'navbar-scrolled'
    );
  }
}
