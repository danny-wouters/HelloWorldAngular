import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }

  logError(error:string) {
    console.error(error);
  }

  logInfo(info:string) {
    console.info(info);
  }
}
