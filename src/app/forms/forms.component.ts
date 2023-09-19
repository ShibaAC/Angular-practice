import { Component, OnInit ,Output , EventEmitter} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GirdDataService } from '../gird-data.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  //宣告一個變數 !是跟ts說你等等會初始化 先閉嘴
  contactForm!: FormGroup;

  constructor(private fb: FormBuilder , private gridDataservice: GirdDataService) { }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name:['' , Validators.required],
      email:[''  , Validators.email],
      pwd:['' , [Validators.maxLength(20) , Validators.minLength(5)]]
    })
  }


  onSubmit(){
    this.gridDataservice.addData(this.contactForm.value);
    //console.log('123')
  }
}
