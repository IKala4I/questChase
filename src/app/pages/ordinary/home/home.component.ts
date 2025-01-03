import { Component } from "@angular/core";
import { MatButton } from "@angular/material/button";
import { MatCard, MatCardContent, MatCardImage } from "@angular/material/card";
import { NgForOf } from "@angular/common";

@Component({
    selector: "app-home",
    imports: [MatButton, MatCard, NgForOf, MatCardImage, MatCardContent],
    templateUrl: "./home.component.html",
    styleUrl: "./home.component.css"
})
export class HomeComponent {}
