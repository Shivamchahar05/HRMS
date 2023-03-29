import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JobDetailsService {

  constructor() { }
  job_detals:any
  dsr_details:any
  count_images:any

  convert(str:any) {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
  }
}
