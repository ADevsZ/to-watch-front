import { Component, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent {
  searchForm;
  // searchText;

  constructor(private formBuilder: FormBuilder) {
    this.searchForm = this.formBuilder.group({
      search: '',
    });
    // this.searchText = this.searchForm.value;
  }
}
