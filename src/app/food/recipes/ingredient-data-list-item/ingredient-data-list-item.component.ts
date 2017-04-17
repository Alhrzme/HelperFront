import {Component, Input, OnInit} from '@angular/core';
import {IngredientData} from "../../shared/IngredientData.model";

@Component({
  selector: 'app-ingredient-data-list-item',
  templateUrl: './ingredient-data-list-item.component.html',
  styleUrls: ['./ingredient-data-list-item.component.css']
})
export class IngredientDataListItemComponent implements OnInit {

  @Input() ingredientData: IngredientData;
  constructor() { }

  ngOnInit() {
  }

}
