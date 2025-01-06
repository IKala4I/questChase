import { Component, OnDestroy, OnInit } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { CommonModule } from "@angular/common";
import { delay, forkJoin, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

import { Testimonial } from "src/app/shared/interfaces/testimonial.interface";
import { FeaturedQuest } from "src/app/shared/interfaces/featured-quest.interface";
import { News } from "src/app/shared/interfaces/news.interface";
import { HomeService } from "src/app/shared/services/ordinary/home.service";

@Component({
    selector: "app-home",
    imports: [CommonModule, MatButtonModule, MatCardModule, MatProgressSpinnerModule],
    templateUrl: "./home.component.html",
    styleUrl: "./home.component.css"
})
export class HomeComponent implements OnInit, OnDestroy {
    featuredQuests: FeaturedQuest[] = [];
    testimonials: Testimonial[] = [];
    news: News[] = [];
    isLoading: boolean = true;

    private destroy$ = new Subject<void>();

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
            .pipe(delay(2000), takeUntil(this.destroy$))
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

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
