import { Component, TemplateRef } from '@angular/core';
import { EmployeeDetailService } from './employeeinfo-view.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';

@Component({
  selector: 'app-employeeinfo-view',
  templateUrl: './employeeinfo-view.component.html'
})
export class EmployeeinfoViewComponent {
  private employee : any = {};
  private errorMsg: any;
  private sub: any;
  private loading: boolean;
  public modalRef: BsModalRef;

  constructor(private employeeDetailService: EmployeeDetailService,
    private route: ActivatedRoute,
    private location: Location,
    private modalService: BsModalService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.getEmployeeDetail(+params['id']);
    });
  }

  getEmployeeDetail(id) {
    this.loading = true;
    this.employeeDetailService.getEmployeeDetail(id).then((employee) => {
      this.employee = employee;
      this.loading = false;
    }).catch((errorMessage) =>{
      this.errorMsg = errorMessage;
    });
  }

  openDeleteDialog(template: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(template);
  }

  deleteEmployee() {
    this.loading = true;
    this.employee.delete().then(() => {
      this.modalRef.hide();
      this.location.back();
      this.loading = false;
    });
  }

  editEmployee(employee) {
    this.loading = true;
    employee.save().then(() => {
      this.location.back();
      this.loading = false;
    });
  }

  // uploadImage(fileInput: any) {
  //   let files = fileInput.target.files;
  //   if(files && files[0]) {
  //     this.employee.photo.upload(files[0]).then(() => {
  //       //done
  //     });
  //   }
  // }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}


