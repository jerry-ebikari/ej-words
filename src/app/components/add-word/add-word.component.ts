import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { WordService } from 'src/app/services/word.service';

@Component({
  selector: 'app-add-word',
  templateUrl: './add-word.component.html',
  styleUrls: ['./add-word.component.scss']
})
export class AddWordComponent implements OnInit {

  form!: FormGroup;
  adding: boolean = false;

  constructor(private wordService: WordService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      word: new FormControl('', Validators.required),
      definition: new FormControl('', Validators.required),
      wordCount: new FormControl(0, Validators.required),
    })
  }

  updateWordCount() {
    this.form.get('wordCount')?.setValue(this.form.get('word')?.value.length);
  }

  submit() {
    if (this.form.valid) {
      this.adding = true;
      this.wordService.addWord(this.form.value)
      .subscribe((res) => {
        this.adding = false;
        this.form.reset();
        this.form.get('wordCount')?.setValue(0);
      }, (err) => {
        this.adding = false;
        alert('Failed');
      })
    }
  }

}
