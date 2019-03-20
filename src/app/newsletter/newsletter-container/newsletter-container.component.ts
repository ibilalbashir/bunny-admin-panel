import { Component, OnInit } from '@angular/core';

declare var grapesjs: any;

@Component({
  selector: 'app-newsletter-container',
  templateUrl: './newsletter-container.component.html',
  styleUrls: ['./newsletter-container.component.scss']
})
export class NewsletterContainerComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    const e = grapesjs.init({
      container: '#gjs',
      plugins: ['gjs-preset-newsletter'],
      pluginsOpts: {
        'gjs-preset-newsletter': {
          modalTitleImport: 'Import template'
          // ... other options
        }
      }
    });
  }
  saveFn(value) {
    console.log('value is ', value);
  }
}
