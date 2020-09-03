import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/services/general.service';
import { MatriculaService } from 'src/services/matricula.service';

@Component({
  selector: 'app-administracion',
  templateUrl: './administracion.component.html',
  styleUrls: ['./administracion.component.scss']
})
export class AdministracionComponent implements OnInit {

  constructor(
    private matriculaService: MatriculaService,
    private generalService: GeneralService,
  ) { }

  ngOnInit() {
    this.listar();
  }
  public matricula: any = [];

  listar() {
    this.matriculaService.listar().subscribe(
      response => {
        this.matricula = response;
        if (this.matricula == null) {

        } else {
          this.matricula = response['data'];
          console.log(this.matricula);
        }
      },
      error => {
        console.log(<any>error);
      }
    )
  }

  exportar()
  {
    console.log("exportar");
    let json: any = [];
    let x = 0;
    this.matricula.forEach(element => {
      let data: any = {};
      data['instituciones'] = element.instituciones.descripcion;
      data['dane'] = element.dane.descripcion;
      data['curso'] = element.cursos.descripcion;
      data['sedes'] = element.sedes.descripcion;
      data['jornada'] = element.jornada.descripcion;
      data['primer_nombre'] = element.primer_nombre;
      data['segundo nombre'] = element.segundo_nombre;
      data['primer apellido'] = element.primer_apellido;
      data['segundo apellido'] = element.segundo_apellido;
      data['tipo documento'] = element.tipo_documento.descripcion;
      data['documento'] = element.documento;
      data['fecha de nacimiento'] = element.fecha_nacimiento;
      data['genero'] = element.tipo_genero.descripcion;
      data['cual'] = element.cual;
      data['edad'] = element.edad;
      data['departamento de nacimiento'] = element.departamento_nacimiento.departamento;
      data['municipio de nacimiento'] = element.municipio_nacimiento.municipio;
      data['calles'] = element.calles;
      data['numero'] = element.numero;
      data['letra'] = element.letra;
      data['bis'] = element.bis;
      data['bis_letras'] = element.letras;
      data['orientacion'] = element.orientacion
      data['numeros'] = element.numeros;
      data['num_letra '] = element.letras2
      data['num_numero'] = element.numeros2
      data['segunga_orientacion'] = element.orientacion2;
      data['barrio'] = element.barrio;
      data['correo'] = element.correo;
      data['estrato'] = element.estrato;
      data['localidad'] = element.localidad;
      data['telefono'] = element.telefono;
      data['nivel del sisben'] = element.nivel_sisben
      data['puntaje del sisben'] = element.puntaje_sisben
      data['año pasado'] = element.anio;
      data['grado pasado'] = element.grado;
      data['institucion pasada'] = element.institucion;
      data['colegio anterio'] = element.tipo_colegio.descripcion;
      data['año antepasado'] = element.anio2;
      data['grado antepasado'] = element.grado2;      
      data['institucion antepasada'] = element.institucion2;
      data['colegio anterios'] = element.tipo_colegio2.descripcion;
      data['situacion academica'] = element.situacion_academica.descripcion;
      data['departamento expulsor'] = element.departamento_expulsor;
      data['municipio expulsor'] = element.municipio_expulsor;
      data['limitaciones'] = element.limitaciones.descripcion;
      data['capacidades/mejoras'] = element.capacidades.descripcion;
      data['nombre de la madre'] = element.nombre_madre;
      data['cedula de la madre'] = element.cedula_madre;
      data['telefono madre'] = element.telefono_madre;
      data['nombre del padre'] = element.nombre_padre;
      data['telefono padre'] = element.telefono_padre;
      data['cedula del padre'] = element.cedula_padre;
      data['nombre del acudiente'] = element.nombre_acudiente;
      data['cedula del acuciente'] = element.cedula_acudiente;
      data['telefono acudiente'] = element.telefono_acudiente;
      data['otro contacto'] = element.otro_telefono
      data['eps'] = element.eps;
      data['ars'] = element.ars;
      data['sangre'] = element.sangre;
      data['ips'] = element.ips;
      data['rh'] = element.rh;
      json[x] = data;
      x++;
    });
    json = <JSON>json;
    this.generalService.exportAsExcelFile(json);
  }
}
