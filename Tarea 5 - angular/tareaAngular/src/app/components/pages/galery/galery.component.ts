import { Component, OnInit } from '@angular/core';

interface Image {
  id: number;
  title: string;
  url: string;
}
interface slice {
  id: number;
  slice: Image[];
}

@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.scss']
})
export class GaleryComponent implements OnInit {


  MichaelScottAkaGod = [
    {
      id: 0,
      url: '../../../../assets/images/descarga1.jpg',
      title: 'Michael Scott 1'
    },
    {
      id: 1,
      url: '../../../../assets/images/descarga2.jpg',
      title: 'Michael Scott 2'
    },
    {
      id: 2,
      url: '../../../../assets/images/descarga3.jpg',
      title: 'Michael Scott 3'
    },
    {
      id: 3,
      url: '../../../../assets/images/descarga4.jpg',
      title: 'Michael Scott 4'
    },
    {
      id: 4,
      url: '../../../../assets/images/descarga5.jpg',
      title: 'Michael Scott 5'
    },
    {
      id: 5,
      url: '../../../../assets/images/descarga6.jpg',
      title: 'Michael Scott 6'
    },
    {
      id: 6,
      url: '../../../../assets/images/descarga7.jpg',
      title: 'Michael Scott 7'
    },
    {
      id: 7,
      url: '../../../../assets/images/descarga8.jpg',
      title: 'Michael Scott 8'
    }
  ];

  slicedList: slice[] = [
    {id: 0, slice: this.MichaelScottAkaGod.slice(0, 3)},
    {id: 1, slice: this.MichaelScottAkaGod.slice(3, 6)},
    {id: 2, slice: this.MichaelScottAkaGod.slice(6, 9)}
  ];

  selected : Image = this.MichaelScottAkaGod[0];
  sliceSelected: slice = this.slicedList[0];

  interval: any;
  isPLaying: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  select(item: Image) {
    this.selected = item;
  }
  nextSlice() {
    if (this.sliceSelected.id < this.slicedList.length - 1) {
      this.sliceSelected = this.slicedList[this.sliceSelected.id + 1];
    }
  }
  beforeSlice() {
    if(this.sliceSelected.id > 0) {
      this.sliceSelected = this.slicedList[this.sliceSelected.id - 1];
    }
  }
  play(){
    let actualId = this.selected.id;
    this.isPLaying = true;
    this.interval = setInterval(() => {
      if (actualId < this.MichaelScottAkaGod.length - 1) {
        actualId++;
      } else {
        actualId = 0;
      }
      this.selected = this.MichaelScottAkaGod[actualId];
      let index = this.sliceSelected.slice.findIndex(item => item.id === actualId);
      if(index === -1 && this.sliceSelected.id < this.slicedList.length - 1) {
        this.nextSlice();
      } else if (index === -1 && this.sliceSelected.id === this.slicedList.length - 1) {
        this.sliceSelected = this.slicedList[0];
      }
    }, 3000);

  }

  stop(){
    clearInterval(this.interval);
    this.isPLaying = false;
  }

  makeBigger(){
    let image = document.getElementById('image');
    if(image){
      let height = image.clientHeight;
      image.style.height = height * 1.05 + 'px';
      let width = image.clientWidth;
      image.style.width = width * 1.05 + 'px';
    }
  }

  makeSmaller(){
    let image = document.getElementById('image');
    if(image){
      let height = image.clientHeight;
      image.style.height = height * 0.95 + 'px';
      let width = image.clientWidth;
      image.style.width = width * 0.95 + 'px';
    }
  }

  nextImage(){
    let actualId = this.selected.id;
    if (actualId < this.MichaelScottAkaGod.length - 1) {
      actualId++;
    } else {
      actualId = 0;
    }
    this.selected = this.MichaelScottAkaGod[actualId];
    let index = this.sliceSelected.slice.findIndex(item => item.id === actualId);
    if(index === -1 && this.sliceSelected.id < this.slicedList.length - 1) {
      this.nextSlice();
    } else if (index === -1 && this.sliceSelected.id === this.slicedList.length - 1) {
      this.sliceSelected = this.slicedList[0];
    }
  }

  beforeImage(){
    let actualId = this.selected.id;
    if (actualId > 0) {
      actualId--;
    } else {
      actualId = this.MichaelScottAkaGod.length - 1;
    }
    this.selected = this.MichaelScottAkaGod[actualId];
    let index = this.sliceSelected.slice.findIndex(item => item.id === actualId);
    if(index === -1 && this.sliceSelected.id > 0) {
      this.beforeSlice();
    } else if (index === -1 && this.sliceSelected.id === 0) {
      this.sliceSelected = this.slicedList[2];
    }
  }

}
