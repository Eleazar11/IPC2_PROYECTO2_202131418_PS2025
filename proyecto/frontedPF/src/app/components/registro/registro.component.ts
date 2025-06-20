import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UsuariosService } from '../../services/usuarios/usuarios.service';
import { Router } from '@angular/router';
import { Usuario } from '../../models/Usuario';
import { TipoUsuario } from '../../models/TipoUsuario';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  mensaje: string | null = null; // Propiedad para mostrar un mensaje

  // Constructor con la inyección de dependencias
  constructor(private usuariosService: UsuariosService, private router: Router) { }

  // Método para mostrar un mensaje al hacer clic en el botón
  mostrarMensaje() {
    this.mensaje = "Le diste click al botón de registrar.";
    //console.log('Usuario registrado:');
    setTimeout(() => this.mensaje = null, 3000); // El mensaje desaparece después de 3 segundos
  }

  // Método para manejar el envío del formulario
  onRegister(form: any) {
    if (form.valid) {
      // Obtener datos del formulario
      const formValue = form.value;
      

      // Mapear los datos del formulario al objeto Usuario
      const usuario: Usuario = {
        dpi: formValue.nombreUsuario,
        correo: formValue.correo,
        contrasena: formValue.contrasena,
        rol: TipoUsuario[formValue.tipoUsuario as keyof typeof TipoUsuario] // Convertir el tipoUsuario a TipoUsuario
      };

      // Llamar al servicio para registrar el usuario
      this.usuariosService.registrarUsuario(usuario).subscribe(response => {
        //console.log('Usuario registrado:', response);
        // Redirigir a la vista principal después de un registro exitoso
        this.router.navigate(['/home']);
      }, error => {
        console.error('Error al registrar el usuario:', error);
      });

    } else {
      console.log('El formulario es inválido');
    }
  }

  fotoPerfilBase64: string | null = null;

  convertirABase64(event: any): void {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      this.fotoPerfilBase64 = reader.result as string; // Convertimos el archivo a base64
    };

    if (file) {
      reader.readAsDataURL(file); // Inicia la conversión a base64
    }
  }


}
