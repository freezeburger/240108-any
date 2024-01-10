import { Pipe, PipeTransform } from '@angular/core';
import { Routes } from '@angular/router';
import { MenuItems } from '../components/header/header.component';

@Pipe({
  name: 'fromRootConfig'
})
export class FromRootConfigPipe implements PipeTransform {

  transform( config: Routes, exclude = '**' ): MenuItems {
    return config.filter( route => route.path != exclude && route.path != undefined)
                 .map( route => ({path:route.path as string, label: (route.title|| route.path) as string }));
  }

}
