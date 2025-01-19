import { Component } from "@angular/core";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { CommonModule } from "@angular/common";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatButton } from "@angular/material/button";
import { provideNativeDateAdapter } from "@angular/material/core";

@Component({
    selector: "app-create-quest",
    imports: [CommonModule, ReactiveFormsModule, MatInputModule, MatDatepickerModule, MatButton],
    templateUrl: "./create-quest.component.html",
    styleUrl: "./create-quest.component.css",
    providers: [provideNativeDateAdapter()]
})
export class CreateQuestComponent {
    createQuestForm: FormGroup;

    constructor(private fb: FormBuilder) {
        this.createQuestForm = this.fb.group({
            title: ["", [Validators.required, Validators.minLength(5)]],
            description: ["", [Validators.required, Validators.minLength(10)]],
            requirement: ["", Validators.required],
            reward: ["", Validators.required],
            endDate: [null, Validators.required] // Using a date picker for the end date
        });
    }

    onSubmit(): void {
        if (this.createQuestForm.valid) {
            console.log("Quest Created:", this.createQuestForm.value);
            // Add logic to submit the form
        } else {
            console.error("Form is invalid");
        }
    }
}
