import { Component, OnInit } from '@angular/core';
import {Recipe} from "../../shared/recipe.model";

@Component({
  selector: 'app-recipes-home',
  templateUrl: './recipes-home.component.html',
  styleUrls: ['./recipes-home.component.css']
})
export class RecipesHomeComponent implements OnInit {

  recipes: Recipe[];

  constructor() { }

  ngOnInit() {
  }

}
