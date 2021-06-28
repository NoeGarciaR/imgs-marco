import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})

export class ImagesComponent implements OnInit {

  images: any = [
    {name: 'Image1', url: 'https://image.shutterstock.com/image-vector/vector-antonyms-opposites-cartoon-characters-260nw-1246528834.jpg'},
    {name: 'Image2', url: 'https://image.shutterstock.com/image-vector/vector-antonyms-opposites-cartoon-characters-260nw-1246528834.jpg'},
    {name: 'Image3', url: 'https://image.shutterstock.com/image-vector/vector-antonyms-opposites-cartoon-characters-260nw-1246528834.jpg'},
    {name: 'Image4', url: 'https://image.shutterstock.com/image-vector/vector-antonyms-opposites-cartoon-characters-260nw-1246528834.jpg'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

  removeImg(number: any) {
    var indice = this.images.indexOf(number); // obtenemos el indice
    this.images.splice(indice, 1);
  }
}
