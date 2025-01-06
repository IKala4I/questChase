import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

import { Quest } from "src/app/shared/interfaces/quest.interface";
import * as quests from "src/assets/mock/quests/quests.json";

@Injectable({
    providedIn: "root"
})
export class QuestsService {
    private questsData: Quest[] = quests.data;

    constructor() {}

    getQuests(): Observable<Quest[]> {
        return of(this.questsData);
    }
}
