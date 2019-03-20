import { NewsLetterService } from './../../shared/services/newsLetter.service';
import { Component, OnInit } from '@angular/core';

declare var grapesjs: any;

@Component({
  selector: 'app-newsletter-container',
  templateUrl: './newsletter-container.component.html',
  styleUrls: ['./newsletter-container.component.scss']
})
export class NewsletterContainerComponent implements OnInit {
  e: any = '';
  constructor(private newsLetterService: NewsLetterService) {}

  ngOnInit() {
    this.e = grapesjs.init({
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
    const html = this.e.getHtml();
    const css = this.e.getCss();
    const obj = {
      html: html,
      css: css
    };

    this.newsLetterService.saveTemplate(obj).subscribe(
      res => {
        console.log('res ', res);
      },
      err => {
        console.log(err);
      }
    );
    console.log('html = ', html);
    console.log('css = ', css);
  }
}
