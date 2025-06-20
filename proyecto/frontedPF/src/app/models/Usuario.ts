import { TipoUsuario } from "./TipoUsuario";

export interface Usuario {
    dpi: string;
    correo: string;
    contrasena: string;
    rol: TipoUsuario;
}
