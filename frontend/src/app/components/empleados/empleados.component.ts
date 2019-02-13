import { Component, OnInit } from '@angular/core';
import {EmpleadoService} from '../../services/empleado.service'
import { NgForm } from '@angular/forms';
import { Empleado } from 'src/app/model/empleado';


declare var M: any


@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css'],
  providers:[EmpleadoService]
})
export class EmpleadosComponent implements OnInit {

  constructor(private empleadoService: EmpleadoService ) { }

  ngOnInit() {
    this.getEmpleado();
  }
  addEmpleado(form: NgForm){
    if(form.value._id){
      this.empleadoService.putEmpleado(form.value)
      .subscribe(res =>{
        this.restForm(form);
        this.getEmpleado();
        M.toast({html:'updated sucessfuly'})
      })
    }  else{
      this.empleadoService.postEmpleado(form.value)
      .subscribe(res=>{
        console.log(res)
        this.restForm(form);
        this.getEmpleado();
         M.toast({html:'save sucessfuly'})
       });
      }
    
  }
   getEmpleado(){
     this.empleadoService.getEmpleados()
    .subscribe(res =>{
      this.empleadoService.empleados = res as Empleado[];
      console.log(res);
    })
  }
  restForm(form?: NgForm){
     if(form){
       form.reset();
       this.empleadoService.selectedEmpleado = new Empleado();
     }
  }
  editEmpleado(empleado: Empleado){
    this.empleadoService.selectedEmpleado = empleado;

  }
  deleteEmpleado(_id: string){
    if(confirm('are you sure you want to delete')){
      this.empleadoService.deleteEmpleado(_id)
      this.getEmpleado();
    }
    this.empleadoService.deleteEmpleado(_id)
    .subscribe(res =>{
      M.toast({html:'deleted sucessfuly'})
    });
  }
}
