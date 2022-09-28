import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ROUTES_CONST } from '@core/const';
import { of } from 'rxjs';

@Component({
  selector: 'nmt-booking',
  templateUrl: './booking.component.html',
  styles: [``],
})
export class BookingComponent implements OnInit {
  ROUTES_CONST = ROUTES_CONST;

  services$ = of([
    {
      id: 1,
      imageUrl:
        'https://gaspa.vn/wp-content/uploads/2022/04/3in1b-08-scaled.jpg',
      name: 'Liệu trình Điều trị chuyên sâu 3IN1',
    },
    {
      id: 2,
      imageUrl:
        'https://gaspa.vn/wp-content/uploads/2021/10/trimun-thaidoc-1-1-scaled.jpg',
      name: 'Dịch vụ thải độc da thảo dược',
    },
    {
      id: 3,
      imageUrl:
        'https://gaspa.vn/wp-content/uploads/2021/10/jqjqjqjq-1-1-scaled.jpg',
      name: 'Liệu trình điều trị Mụn lưng – viêm nang lông với công nghệ IPL ',
    },
    {
      id: 4,
      imageUrl:
        'https://gaspa.vn/wp-content/uploads/2021/11/hinh-bs-3-scaled.jpg',
      name: 'Liệu trình da nhiễm Corticoid ',
    },
    {
      id: 1,
      imageUrl:
        'https://gaspa.vn/wp-content/uploads/2022/04/3in1b-08-scaled.jpg',
      name: 'Liệu trình Điều trị chuyên sâu 3IN1',
    },
    {
      id: 2,
      imageUrl:
        'https://gaspa.vn/wp-content/uploads/2021/10/trimun-thaidoc-1-1-scaled.jpg',
      name: 'Dịch vụ thải độc da thảo dược',
    },
  ]);

  form: FormGroup = this.fb.group({
    name: ['', Validators.required],
    phone: ['', Validators.required],
    serviceId: ['', Validators.required],
    time: ['', Validators.required],
    message: '',
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  showPicker(el: any) {
    el?.showPicker();
  }
}
