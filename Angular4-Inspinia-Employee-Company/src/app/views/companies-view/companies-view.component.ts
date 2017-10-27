import { Component, OnInit } from '@angular/core';
import { CompanyService } from './companies-view.service';

@Component({
    selector: 'companiesView',
    templateUrl: 'companies-view.template.html',
    styleUrls: ['./companies-view.template.css']
})
export class companiesViewComponent implements OnInit {
  companies: any;
  errorMsg: any;
  loading: boolean;
  queryString: string;

  // pagination
  total: number;
  p: any;
  pageSize: number;

  constructor(private companyService: CompanyService) { }

  ngOnInit() {
    this.getCompaniesPage(1);
  }

  getCompaniesPage(page: number) {
    this.loading = true;
    this.companyService.getCompanies(page, this.queryString).then((companies) => {
      this.loading = false;
      this.companies = companies.items;
      this.total = companies.total;
      this.pageSize = companies.pageSize;
      this.p = page;
    }).catch((errorMessage) => {
      this.loading = false;
      this.errorMsg = errorMessage;
    });
  }

}
