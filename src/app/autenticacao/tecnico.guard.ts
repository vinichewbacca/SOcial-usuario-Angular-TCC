import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from '../usuario/service/usuario.service';

@Injectable({
  providedIn: 'root',
})
export class TecnicoGuard implements CanActivate {
  constructor(private usuarioService: UsuarioService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {

    let perfil!: string;
    this.usuarioService.retornaUsuario().subscribe((dado: any) => {
      perfil = dado.perfil;
    });

    if(perfil !== 'ROLE_USUARIO'){
      this.router.navigate(['atendimento','tecnico']);
      return false;
    }
    return true;
  }
}
