import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Url } from 'src/app/models/url.model';
import { UrlsService } from 'src/app/services/urls.service';

@Component({
  selector: 'app-edit-url',
  templateUrl: './edit-url.component.html',
  styleUrls: ['./edit-url.component.css'],
})
export class EditUrlComponent implements OnInit {
  urlDetails: Url = {
    id: '',
    originalUrl: '',
    shortUrl: '',
    createdDate: '',
    userName: '',
  };

  constructor(
    private route: ActivatedRoute,
    private urlsService: UrlsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');

        if (id) {
          this.urlsService.getUrl(id).subscribe({
            next: (response) => {
              this.urlDetails = response;
              console.log(response);
            },
          });
        }
      },
    });
  }

  editUrl() {
    this.urlsService.editUrl(this.urlDetails).subscribe({
      next: (response) => {
        console.log(response);
        this.router.navigate(['urls']);
      },
    });
  }

  onDeleteClick(id:string) {
    if (id) {
      this.urlsService.deleteUrl(id).subscribe({
        next: (response) => {
          console.log(response);
          this.router.navigate(['urls']);
        },
      });
    }
  }
}
