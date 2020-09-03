import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { GeneralService } from 'src/services/general.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { InstitucionesService } from 'src/services/instituciones.service';
import { CapacidadesService } from 'src/services/capacidades.service';
import { DanneService } from 'src/services/danne.service';
import { GeneroService } from 'src/services/genero.service';
import { JornadasService } from 'src/services/jornadas.service';
import { LimitacionesService } from 'src/services/limitaciones.service';
import { SedesService } from 'src/services/sedes.service';
import { TipoColegioService } from 'src/services/tipo-colegio.service';
import { TipoDocumentoService } from 'src/services/tipo-documento.service';
import { CursoService } from 'src/services/curso.service';
import { SituacionService } from 'src/services/situacion.service';
import { MatriculaService } from 'src/services/matricula.service';
import { departamentoService } from 'src/services/departamento.service';
import { MunicipiosService } from 'src/services/municipios.service';
import { CalleService } from 'src/services/calle.service';
import { LetraService } from 'src/services/letra.service';
import { BisService } from 'src/services/bis.service';


@Component({
  selector: 'app-sexto-agregar',
  templateUrl: './sexto-agregar.component.html',
  styleUrls: ['./sexto-agregar.component.scss']
})
export class SextoAgregarComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private departamentoService: departamentoService,
    private matriculaService : MatriculaService,
    private institucionesService : InstitucionesService,
    private capacidadesService : CapacidadesService,
    private cursoService : CursoService,
    private danneService : DanneService,
    private generoService: GeneroService,
    private jornadasService: JornadasService,
    private limitacionesService: LimitacionesService,
    private sedesService: SedesService,
    private tipoColegioService: TipoColegioService,
    private tipoDocumentoService: TipoDocumentoService,
    private situacionService: SituacionService,
    private location: Location,
    private router: Router,
    private generalService: GeneralService,
    private municipiosSerivce: MunicipiosService,
  ) { }
  public formulario: FormGroup;
  private instituciones: any = [];
  private jornadas: any = [];
  private danes: any = [];
  private sedes: any = [];
  private documentos: any = [];
  private colegios: any = [];
  private generos: any = [];
  private limitaciones: any = [];
  private situaciones: any = [];
  private cursos: any = [];
  private capacidades: any = [];
  private departamentos: any = [];
  private municipios: any = [];




  ngOnInit() {

    this.listardepartamentos();
    this.listarinstituciones();
    this.listardane();
    this.listarcursos();
    this.listarsedes();
    this.listarjornada();
    this.listardocumento();
    this.listargenero();
    this.listarcolegio();
    this.listarlimitaciones();
    this.listarsituacion();
    this.listarcapacidades();
    this.listarmunicipios();

      this.formulario = this.formBuilder.group({
        instituciones: ['', Validators.required],
        dane: ['', Validators.required],
        cursos: ['', Validators.required],
        sedes: ['', Validators.required],
        jornada: ['', Validators.required],
        primer_nombre: ['', Validators.required],
        segundo_nombre: ['', Validators.nullValidator],
        primer_apellido: ['', Validators.required],
        segundo_apellido: ['', Validators.required],
        tipo_documento: ['', Validators.required],
        documento: ['', Validators.required],
        fecha_nacimiento: ['', Validators.required],
        tipo_genero: ['', Validators.required],
        cual: ['', Validators.nullValidator],
        edad: ['', Validators.required],
        municipio_nacimiento: ['', Validators.required],
        departamento_nacimiento: ['', Validators.required],
        calles: ['', Validators.required],
        numero: ['', Validators.required],
        letra: ['', Validators.required],
        bis: ['', Validators.nullValidator],
        letras: ['', Validators.nullValidator],
        orientacion: ['', Validators.required],
        numeros: ['', Validators.required],
        letras2: ['', Validators.nullValidator],
        numeros2: ['', Validators.required],
        orientacion2: ['', Validators.required],
        barrio: ['', Validators.required],
        correo: ['', Validators.required],
        telefono: ['', Validators.required],
        estrato: ['', Validators.required],
        localidad: ['', Validators.required],
        puntaje_sisben: ['', Validators.nullValidator],
        nivel_sisben: ['', Validators.nullValidator],
        anio: ['', Validators.required],
        grado: ['', Validators.required],
        institucion: ['', Validators.required],
        tipo_colegio: ['', Validators.required],
        anio2: ['', Validators.nullValidator],
        grado2: ['', Validators.nullValidator],
        institucion2: ['', Validators.nullValidator],
        tipo_colegio2: ['', Validators.nullValidator],
        situacion_academica: ['', Validators.required],
        departamento_expulsor: ['', Validators.nullValidator],
        municipio_expulsor: ['', Validators.nullValidator],
        limitaciones: ['', Validators.required],
        capacidades: ['', Validators.required],
        nombre_madre: ['', Validators.required],
        cedula_madre: ['', Validators.required],
        telefono_madre: ['', Validators.required],
        nombre_padre: ['', Validators.required],
        cedula_padre: ['', Validators.required],
        telefono_padre: ['', Validators.required],
        nombre_acudiente: ['', Validators.required],
        cedula_acudiente: ['', Validators.required],
        telefono_acudiente: ['', Validators.required],
        otro_telefono: ['', Validators.nullValidator],
        eps: ['', Validators.required],
        ars: ['', Validators.required],
        sangre: ['', Validators.required],
        ips: ['', Validators.required],
        rh: ['', Validators.required],
      });
    }

  agregar() {
    let data = {
      'instituciones': this.formulario.value.instituciones,
      'dane': this.formulario.value.dane,
      'cursos': this.formulario.value.cursos,
      'sedes': this.formulario.value.sedes,
      'jornada': this.formulario.value.jornada,
      'primer_nombre': this.formulario.value.primer_nombre,
      'segundo_nombre': this.formulario.value.segundo_nombre,
      'primer_apellido': this.formulario.value.primer_apellido,
      'segundo_apellido': this.formulario.value.segundo_apellido,
      'tipo_documento': this.formulario.value.tipo_documento,
      'documento': this.formulario.value.documento,
      'fecha_nacimiento': this.formulario.value.fecha_nacimiento,
      'tipo_genero': this.formulario.value.tipo_genero,
      'cual': this.formulario.value.cual,
      'edad': this.formulario.value.edad,
      'municipio_nacimiento': this.formulario.value.municipio_nacimiento,
      'departamento_nacimiento': this.formulario.value.departamento_nacimiento,
      'calles': this.formulario.value.calles,
      'numero': this.formulario.value.numero,
      'letra': this.formulario.value.letra,
      'bis': this.formulario.value.bis,
      'letras': this.formulario.value.letras,
      'orientacion': this.formulario.value.orientacion,
      'numeros': this.formulario.value.numeros,
      'letras2': this.formulario.value.letras2,
      'numeros2': this.formulario.value.numeros2,
      'orientacion2': this.formulario.value.orientacion2,
      'barrio': this.formulario.value.barrio,
      'correo': this.formulario.value.correo,
      'telefono': this.formulario.value.telefono,
      'estrato': this.formulario.value.estrato,
      'localidad': this.formulario.value.localidad,
      'nivel_sisben': this.formulario.value.nivel_sisben,
      'puntaje_sisben': this.formulario.value.puntaje_sisben,
      'anio': this.formulario.value.anio,
      'grado': this.formulario.value.grado,
      'institucion': this.formulario.value.institucion,
      'tipo_colegio': this.formulario.value.tipo_colegio,
      'anio2': this.formulario.value.anio2,
      'grado2': this.formulario.value.grado2,
      'institucion2': this.formulario.value.institucion2,
      'tipo_colegio2': this.formulario.value.tipo_colegio2,
      'situacion_academica': this.formulario.value.situacion_academica,
      'departamento_expulsor': this.formulario.value.departamento_expulsor,
      'municipio_expulsor': this.formulario.value.municipio_expulsor,
      'limitaciones': this.formulario.value.limitaciones,
      'capacidades': this.formulario.value.capacidades,
      'nombre_madre': this.formulario.value.nombre_madre,
      'cedula_madre': this.formulario.value.cedula_madre,
      'telefono_madre': this.formulario.value.nombre_padre,
      'nombre_padre': this.formulario.value.nombre_padre,
      'cedula_padre': this.formulario.value.cedula_padre,
      'telefono_padre': this.formulario.value.telefono_padre,
      'nombre_acudiente': this.formulario.value.nombre_acudiente,
      'cedula_acudiente': this.formulario.value.cedula_acudiente,
      'telefono_acudiente': this.formulario.value.telefono_acudiente,
      'otro_telefono': this.formulario.value.otro_telefono,
      'eps': this.formulario.value.eps,
      'ars': this.formulario.value.ars,
      'sangre': this.formulario.value.sangre,
      'ips': this.formulario.value.ips,
      'rh': this.formulario.value.rh,
    };
    this.matriculaService.agregar(data).subscribe(
      response => {
        GeneralService.ABRIR_MENSAJE("ALUMNO CREADO", "success");
        this.router.navigate(['/administracion']);
      },
      error => {
        GeneralService.ABRIR_MENSAJE("Ha ocurrido un error", "error");
        console.log(<any>error);
        console.log(data)
      }
    );
  }


  listarinstituciones() {
    this.institucionesService.listar().subscribe(
      response => {
        this.instituciones = response['data']

      }
    )
  }

  listarcursos() {
    this.cursoService.listar().subscribe(
      response => {
        this.cursos = response['data']

      }
    )
  }
  listarcapacidades() {
    this.capacidadesService.listar().subscribe(
      response => {
        this.capacidades = response['data']

      }
    )
  }
  listardane() {
    this.danneService.listar().subscribe(
      response => {
        this.danes = response['data']

      }
    )
  }
  listarsedes() {
    this.sedesService.listar().subscribe(
      response => {
        this.sedes = response['data']

      }
    )
  }
  listarjornada() {
    this.jornadasService.listar().subscribe(
      response => {
        this.jornadas = response['data']

      }
    )
  }
  listardocumento() {
    this.tipoDocumentoService.listar().subscribe(
      response => {
        this.documentos = response['data']

      }
    )
  }
  listargenero() {
    this.generoService.listar().subscribe(
      response => {
        this.generos = response['data']

      }
    )
  }
  listarcolegio() {
    this.tipoColegioService.listar().subscribe(
      response => {
        this.colegios = response['data']

      }
    )
  }
  listarlimitaciones() {
    this.limitacionesService.listar().subscribe(
      response => {
        this.limitaciones = response['data']

      }
    )
  }
  listarsituacion() {
    this.situacionService.listar().subscribe(
      response => {
        this.situaciones = response['data']
      }
    )
  }
  listardepartamentos()
  {
    this.departamentoService.listar().subscribe(
      response => {
        this.departamentos = response['data']
        console.log(this.departamentos);
      }
    )
  }
  listarmunicipios() {
    this.municipiosSerivce.listar().subscribe(
      response => {
        this.municipios = response['data']

      }
    )
  }


}


