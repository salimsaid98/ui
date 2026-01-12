import { Component } from '@angular/core';

@Component({
  selector: 'app-accounting',
  templateUrl: './accounting.component.html',
  styleUrls: ['./accounting.component.css']
})
export class AccountingComponent {
features = [
  {
    title: 'Chart of Accounts',
    desc: 'Manage your accounts structure and categories.',
    icon: 'fas fa-sitemap',
    link: '/accounting/chart-of-accounts'
  },
  {
    title: 'Journal Entries',
    desc: 'Record and manage all financial transactions.',
    icon: 'fas fa-book',
    link: '/accounting/journal-entries'
  },
  {
    title: 'General Ledger',
    desc: 'View and analyze your general ledger.',
    icon: 'fas fa-book-open',
    link: '/accounting/general-ledger'
  },
  {
    title: 'Accounts Payable',
    desc: 'Track and manage your payables and vendor bills.',
    icon: 'fas fa-file-invoice-dollar',
    link: '/accounting/accounts-payable'
  },
  {
    title: 'Accounts Receivable',
    desc: 'Track and manage your receivables and customer invoices.',
    icon: 'fas fa-file-invoice',
    link: '/accounting/accounts-receivable'
  },
  {
    title: 'Bank & Cash Management',
    desc: 'Reconcile bank accounts and manage cash flow.',
    icon: 'fas fa-university',
    link: '/accounting/bank-cash'
  },
  {
    title: 'Financial Reports',
    desc: 'Generate balance sheets, income statements, and more.',
    icon: 'fas fa-chart-line',
    link: '/accounting/reports'
  },
  {
    title: 'Budgeting',
    desc: 'Set and track budgets for your business.',
    icon: 'fas fa-coins',
    link: '/accounting/budgeting'
  },
  {
    title: 'Tax Management',
    desc: 'Manage tax rates, calculations, and reports.',
    icon: 'fas fa-percent',
    link: '/accounting/tax'
  }
];
}
