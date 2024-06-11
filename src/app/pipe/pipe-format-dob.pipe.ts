import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeFormatDob'
})
export class PipeFormatDobPipe implements PipeTransform {

  transform(value: number, ...args: any[]) {
    if (!value) return ''
    const date = new Date(value * 1000).toLocaleString().split(",");
    return date[0];
  }
}
