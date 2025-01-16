import { Component, OnDestroy, OnInit } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { CommonModule } from "@angular/common";
import { delay, forkJoin, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

import { Testimonial } from "src/app/shared/interfaces/testimonial.interface";
import { FeaturedQuest } from "src/app/shared/interfaces/featured-quest.interface";
import { News } from "src/app/shared/interfaces/news.interface";
import { HomeService } from "src/app/shared/services/ordinary/home.service";

@Component({
    selector: "app-home",
    imports: [CommonModule, MatButtonModule, MatCardModule],
    templateUrl: "./home.component.html",
    styleUrls: ["../../../shared/styles.css"]
})
export class HomeComponent implements OnInit, OnDestroy {
    featuredQuests: FeaturedQuest[] | null = null;
    testimonials: Testimonial[] | null = null;
    news: News[] | null = null;

    private destroy$ = new Subject<void>();

    constructor(private homeService: HomeService) {}

    ngOnInit(): void {
        this.fetchData();
    }

    fetchData(): void {
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
                },
                error: error => {
                    console.error("Error fetching data:", error);
                }
            });
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
