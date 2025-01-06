import { Component, OnInit } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { CommonModule } from "@angular/common";

import { Testimonial } from "src/app/shared/interfaces/testimonial.interface";
import { FeaturedQuest } from "src/app/shared/interfaces/featured-quest.interface";
import { News } from "src/app/shared/interfaces/news.interface";
import { HomeService } from "src/app/shared/services/ordinary/home.service";
import { delay, forkJoin } from "rxjs";

@Component({
    selector: "app-home",
    imports: [CommonModule, MatButtonModule, MatCardModule, MatProgressSpinnerModule],
    templateUrl: "./home.component.html",
    styleUrl: "./home.component.css"
})
export class HomeComponent implements OnInit {
    featuredQuests: FeaturedQuest[] = [];
    testimonials: Testimonial[] = [];
    news: News[] = [];
    isLoading: boolean = true;

    constructor(private homeService: HomeService) {}

    ngOnInit(): void {
        this.fetchData();
    }

    fetchData(): void {
        this.isLoading = true;

        forkJoin({
            featuredQuests: this.homeService.getFeaturedQuests(),
            testimonials: this.homeService.getTestimonials(),
            news: this.homeService.getNews()
        })
            .pipe(delay(2000))
            .subscribe({
                next: ({ featuredQuests, testimonials, news }) => {
                    this.featuredQuests = featuredQuests;
                    this.testimonials = testimonials;
                    this.news = news;
                    this.isLoading = false;
                },
                error: error => {
                    console.error("Error fetching data:", error);
                    this.isLoading = false;
                }
            });
    }
}
