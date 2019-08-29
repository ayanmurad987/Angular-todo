import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() {
  }

  heroes = ['Test 1']
  inputText = ""
  editIndex = ""

  ngOnInit() {
  }



  onChange(e) {
    this.inputText = e.target.value
  }

  addData() {
    if (!this.editIndex ) {
      this.inputText && this.heroes.push(this.inputText)
      this.inputText = ""
    }
    else {
      this.heroes[Number(this.editIndex)-1] = this.inputText
      this.inputText = ""
      this.editIndex = ""
    }
  }

  dltData(i) {
    this.heroes.splice(i, 1)
  }
  editData(i) {
    this.editIndex = i+1
    this.inputText = this.heroes[i]
  }

}
