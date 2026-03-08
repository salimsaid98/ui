import { Component } from '@angular/core';

@Component({
  selector: 'app-faq-section',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent {
  faqs = [
    { q: 'faq.q1', a: 'faq.a1', open:false},
    { q: 'faq.q2', a: 'faq.a2', open:false},
    { q: 'faq.q3', a: 'faq.a3', open:false},
    { q: 'faq.q4', a: 'faq.a4', open:false}
  ];

  toggle(i: number) {
    this.faqs[i].open = !this.faqs[i].open;
  }
}
