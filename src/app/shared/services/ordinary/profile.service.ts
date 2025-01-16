import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";

import { ProfileData } from "src/app/shared/interfaces/profile.interface";
import * as profile from "src/assets/mock/profile/profile.json";

@Injectable({
    providedIn: "root"
})
export class ProfileService {
    private profileData: ProfileData = profile;

    constructor(private http: HttpClient) {}

    getProfileData(): Observable<ProfileData> {
        return of(this.profileData);
    }
}
