import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardContent, IonInput, IonButton } from '@ionic/angular/standalone';
import { SenhasService } from '../services/senhas';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardContent, IonInput, IonButton, FormsModule],
})
export class Tab1Page {

  constructor(public senhasService: SenhasService) {}

}