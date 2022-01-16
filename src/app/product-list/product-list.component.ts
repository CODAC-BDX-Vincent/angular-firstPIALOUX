import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  constructor(private formBuilder: FormBuilder) {}
  newDivs: addDivisions[] = [];
  ListeNoms: Array<string> = [];
  ListePrenoms: Array<string> = [];
  products = products;
  checkoutForm = this.formBuilder.group({
    name: '',
    address: '',
  });

  onSubmit(): void {
    // Process checkout data here

    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }

  allNoms() {
    this.newDivs.push(new addDivisions(this.ListeNoms, 'Noms'));
    console.log('All Noms :' + this.ListeNoms);
    window.alert('All Noms :' + this.ListeNoms);
  }

  allPrenoms() {
    this.newDivs.push(new addDivisions(this.ListePrenoms, 'Prénoms'));
    console.log('All Prenom :' + this.ListePrenoms);
    window.alert('All Prenoms : ' + this.ListePrenoms);
  }

  onNom(event: any) {
    this.ListeNoms.push(event.target.value);
  }

  onPrenom(event: any) {
    this.ListePrenoms.push(event.target.value);
  }
}
// Here you can define the elements
export class addDivisions {
  name: String | undefined;
  liste: Array<string>;

  constructor(liste: Array<string>, name: String) {
    this.liste = liste;
    this.name = name;
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
