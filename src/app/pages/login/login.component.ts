import { Router } from '@angular/router';
import { AuthService } from './../../shared/services/auth.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit, ElementRef, OnDestroy } from '@angular/core';
import { routerNgProbeToken } from '@angular/router/src/router_module';

declare var $: any;


@Component({
    selector: 'app-login-cmp',
    templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit, OnDestroy {
    loginForm: FormGroup
    test: Date = new Date();
    temp: any
    private toggleButton: any;
    private sidebarVisible: boolean;
    private nativeElement: Node;

    constructor(private element: ElementRef, private formBuilder: FormBuilder, private service: AuthService, private router: Router) {
        const user = localStorage.getItem('user');
        if (user) {
        this.router.navigate(['/main']);
        }

        this.nativeElement = element.nativeElement;
        this.sidebarVisible = false;
    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required]]
        })
        const navbar: HTMLElement = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
        const body = document.getElementsByTagName('body')[0];
        body.classList.add('login-page');
        body.classList.add('off-canvas-sidebar');
        const card = document.getElementsByClassName('card')[0];
        setTimeout(function() {
            // after 1000 ms we add the class animated to the login/register card
            card.classList.remove('card-hidden');
        }, 700);
    }
    sidebarToggle() {
        const toggleButton = this.toggleButton;
        const body = document.getElementsByTagName('body')[0];
        const sidebar = document.getElementsByClassName('navbar-collapse')[0];
        if (this.sidebarVisible === false) {
            setTimeout(function() {
                toggleButton.classList.add('toggled');
            }, 500);
            body.classList.add('nav-open');
            this.sidebarVisible = true;
        } else {
            this.toggleButton.classList.remove('toggled');
            this.sidebarVisible = false;
            body.classList.remove('nav-open');
        }
    }
    ngOnDestroy() {
      const body = document.getElementsByTagName('body')[0];
      body.classList.remove('login-page');
      body.classList.remove('off-canvas-sidebar');
    }
    loginFn() {
        console.log('clicked')
     console.log(this.loginForm.value)
         this.temp = this.loginForm.value;
        this.service.logIn(this.temp).subscribe(res => {
            localStorage.setItem('user', JSON.stringify(res));

            this.router.navigateByUrl('/main');

        }, err => {
            console.log('got an error', err)
        })
    }
}
