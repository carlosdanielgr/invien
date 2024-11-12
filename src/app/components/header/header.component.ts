import {
  Component,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
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

  @Input() lightHeader = false;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  addClass(): void {
    this.renderer.addClass(
      this.el.nativeElement.querySelector('header'),
      'header__shadow'
    );
    if (this.lightHeader) return;
    this.renderer.addClass(
      this.el.nativeElement.querySelector('header'),
      'navbar-scrolled'
    );
  }

  removeClass(): void {
    this.renderer.removeClass(
      this.el.nativeElement.querySelector('header'),
      'header__shadow'
    );
    if (this.lightHeader) return;
    this.renderer.removeClass(
      this.el.nativeElement.querySelector('header'),
      'navbar-scrolled'
    );
  }
}
