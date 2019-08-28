import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../recipes.model';
import { RecipesService } from '../recipes.service';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {
  loadedRecipe: Recipe;
  constructor(private activatedRoute: ActivatedRoute, private recipeSvc: 
    RecipesService, private router: Router, private alertController: AlertController, private toastController: ToastController ) { }
 

  async presentAlert(){
    const alert = await this.alertController.create({
      header: 'Delete Recipe',
      message: 'Are You Sure You Want to Delete This Recipe?',
      buttons: [
        {
          text :'YES',
          handler: () => this.deleteRecipe()
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });
    await alert.present();
  }  

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Recipe has been deleted',
      duration: 2000
    });
    toast.present();
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
      paramMap =>{
        if (!paramMap.has('recipeId')) {return;}
        this.loadedRecipe = this.recipeSvc.getRecipe(paramMap.get('recipeId'));
      });
  }

  deleteRecipe(){
    this.recipeSvc.deleteRecipe(this.loadedRecipe.id);
    this.router.navigate(['/recipes']);
    
    this.presentToast();
  }

}
