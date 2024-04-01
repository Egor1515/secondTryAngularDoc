import { Component, inject } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housing-location';
import { HousingLocationService } from '../housing-location.service';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [
        CommonModule,
        HousingLocationComponent
    ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export class HomeComponent {
    housingLocationList: HousingLocation[] = []
    housingService: HousingLocationService = inject(HousingLocationService)

    constructor() {
        this.housingLocationList = this.housingService.getAllHousingLocations();
    }
}
