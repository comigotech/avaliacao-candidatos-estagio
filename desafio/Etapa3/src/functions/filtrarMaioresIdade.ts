import { Usuario } from '../interfaces/Usuario';

export function filtrarMaioresDeIdade(usuarios: Usuario[]): Usuario[] {
    return usuarios.filter(usuario => usuario.idade >= 18);
}