import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-global-search',
  templateUrl: './global-search.component.html',
  styleUrls: ['./global-search.component.scss']
})
export class GlobalSearchComponent {
  @Output() searchEvent = new EventEmitter<string>();

  form1: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form1 = this.fb.group({
      search: ['']
    });
  }


  searchResults(event: Event) {
    event.preventDefault();
    const searchValue = this.form1?.get('search')?.value    
    this.searchEvent.emit(searchValue)    
  }
}
