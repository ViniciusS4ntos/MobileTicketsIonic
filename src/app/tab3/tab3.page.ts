import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardContent, IonList, IonLabel, IonItem } from '@ionic/angular/standalone';
import { SenhasService } from '../services/senhas';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardContent, IonList, IonLabel, IonItem],
})
export class Tab3Page {

  constructor(public senhasService: SenhasService) {}

}