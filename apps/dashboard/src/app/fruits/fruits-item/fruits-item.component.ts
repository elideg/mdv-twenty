import { FruitsFacade } from '@mdv-twenty/core-state';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Fruit } from '@mdv-twenty/core-data';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mdv-twenty-fruits-fruit',
  templateUrl: './fruits-item.component.html',
  styleUrls: ['./fruits-item.component.scss']
})
export class FruitsItemComponent implements OnInit {
  fruits$: Observable<Fruit>;

  constructor(
    private route: ActivatedRoute,
    private fruitsFacade: FruitsFacade
  ) { }

  ngOnInit() {
    this.fruitsFacade.loadFruits();
    this.route.params.subscribe((param) => this.fruitsFacade.selectFruit(param['id']));
    this.fruits$ = this.fruitsFacade.selectedFruit$
  }

}
