import { Injectable } from '@angular/core';
import Swal from 'sweetalert2'
import { Observable } from 'rxjs';
import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor() { }

  // Variables globales

  public static WS_URL: string =  "http://localhost/backend_matriculas_jag/public/";

  // Mensajes de alerta
  public static ABRIR_CONFIRMACION(): any {
    const observable = new Observable(observer => {
      Swal.fire({
        title: '¿Está seguro?',
        text: "",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: '¡Cancelar!',
        confirmButtonText: '¡Confirmar!'
      }).then((result) => {
        if (result.value) {
          observer.next(true);
        }
      });
    });
    return observable;
  }

  public static ABRIR_MENSAJE(msg, type) {
    let title = "Mensaje";
    if (type == "success")
      title = "MATRICULA COMPLETA"
    else
      title = "Error"

    Swal.fire(
      title,
      msg,
      type
    );
  }

  public static ELIMINAR_MENSAJE(msg, type) {
    let title = "Mensaje";
    if (type == "success")
      title = "ALUMNO ELIMINADO"
    else
      title = "Error"

    Swal.fire(
      title,
      msg,
      type
    );
  }

  public static HEADERS(contenttype: any): any {
    let json;
    if (contenttype == null) {
      json = {
        //'Token': JSON.parse(localStorage.getItem("logindata"))['token'],
      };
    } else {
      json = {
        //'Token': JSON.parse(localStorage.getItem("logindata"))['token'],
        'Content-Type': contenttype
      };
    }
    return json;
  }

  public exportAsExcelFile(json: any[]): void {
    let excelFileName = "" + Math.floor(Math.random() * 999999999999);
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
    console.log('worksheet', worksheet);
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    //const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'buffer' });
    this.saveAsExcelFile(excelBuffer, excelFileName);
  }

  private saveAsExcelFile(buffer: any, fileName: string): void {
    const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const EXCEL_EXTENSION = '.xlsx';
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE
    });
    FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
  }
}
