import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";

import { FeaturedQuest } from "src/app/shared/interfaces/featured-quest.interface";
import { Testimonial } from "src/app/shared/interfaces/testimonial.interface";
import { News } from "src/app/shared/interfaces/news.interface";

import * as featuredQuests from "src/assets/mock/home/featured-quests.json";
import * as testimonials from "src/assets/mock/home/testimonials.json";
import * as news from "src/assets/mock/home/news.json";

@Injectable({
    providedIn: "root"
})
export class HomeService {
    featuredQuestsData: FeaturedQuest[] = featuredQuests.data;
    testimonialsData: Testimonial[] = testimonials.data;
    newsData: News[] = news.data;

    constructor(private http: HttpClient) {}

    getFeaturedQuests(): Observable<FeaturedQuest[]> {
        return of(this.featuredQuestsData);
    }

    getTestimonials(): Observable<Testimonial[]> {
        return of(this.testimonialsData);
    }

    getNews(): Observable<News[]> {
        return of(this.newsData);
    }
}
