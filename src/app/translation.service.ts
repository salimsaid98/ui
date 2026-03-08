import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface TextMap { sw: string; en: string; }

const TRANSLATIONS: { [key: string]: TextMap } = {
  'hero.headline': { sw: 'Rahisisha Hesabu za Biashara Yako Leo', en: 'Simplify Your Business Accounting Today' },
  'hero.subtext': { sw: 'Simamia mauzo, matumizi na faida bila kutumia daftari.', en: 'Manage sales, expenses and profits without a ledger.' },
  'hero.startFree': { sw: 'Anza Bure', en: 'Start Free' },
  'hero.viewPricing': { sw: 'Angalia Bei', en: 'View Pricing' },
  'problem.title': { sw: 'Changamoto Zako', en: 'Your Pain Points' },
  'problem.p1': { sw: 'Kupoteza kumbukumbu za mauzo', en: 'Losing sales records' },
  'problem.p2': { sw: 'Kukosa kujua faida halisi', en: 'Not knowing real profit' },
  'problem.p3': { sw: 'Hesabu kuchanganyika', en: 'Confusing accounts' },
  'solution.title': { sw: 'Suluhisho Letu', en: 'Our Solution' },
  'solution.li1': { sw: 'Record mauzo kwa sekunde chache', en: 'Record sales in seconds' },
  'solution.li2': { sw: 'Ona faida papo hapo', en: 'See profit instantly' },
  'solution.li3': { sw: 'Ripoti za kila siku', en: 'Daily reports' },
  'features.title': { sw: 'Vipengele', en: 'Features' },
  'features.item1': { sw: 'Dashboard rahisi', en: 'Easy dashboard' },
  'features.item2': { sw: 'Record Mauzo', en: 'Record Sales' },
  'features.item3': { sw: 'Record Matumizi', en: 'Record Expenses' },
  'features.item4': { sw: 'Stock Tracking', en: 'Stock Tracking' },
  'features.item5': { sw: 'Ripoti', en: 'Reports' },
  'pricing.title': { sw: 'Bei', en: 'Pricing' },
  'pricing.free.title': { sw: 'FREE', en: 'FREE' },
  'pricing.free.price': { sw: 'Bure', en: 'Free' },
  'pricing.free.user': { sw: 'User 1', en: '1 User' },
  'pricing.free.sales': { sw: 'Record Mauzo', en: 'Record Sales' },
  'pricing.free.expenses': { sw: 'Record Matumizi', en: 'Record Expenses' },
  'pricing.free.dashboard': { sw: 'Basic Dashboard', en: 'Basic Dashboard' },
  'pricing.basic.title': { sw: 'BASIC', en: 'BASIC' },
  'pricing.basic.price': { sw: '25,000 TZS / mwezi', en: '25,000 TZS / month' },
  'pricing.basic.feature1': { sw: 'Unlimited transactions', en: 'Unlimited transactions' },
  'pricing.basic.feature2': { sw: 'Users 3', en: '3 Users' },
  'pricing.basic.feature3': { sw: 'Stock tracking', en: 'Stock tracking' },
  'pricing.basic.feature4': { sw: 'Reports', en: 'Reports' },
  'pricing.basic.feature5': { sw: 'Usimamizi wa wateja', en: 'Customer management' },
  'pricing.basic.feature6': { sw: 'Ankara za mauzo', en: 'Invoice' },
  'pricing.basic.feature7': { sw: 'Ripoti zote za kimahesabu', en: 'All accounting reports' },
  'pricing.pro.title': { sw: 'PRO', en: 'PRO' },
  'pricing.pro.price': { sw: '60,000 TZS / mwezi', en: '60,000 TZS / month' },
  'pricing.pro.feature1': { sw: 'Multi branch', en: 'Multi branch' },
  'pricing.pro.feature2': { sw: 'Advanced reports', en: 'Advanced reports' },
  'pricing.pro.feature3': { sw: 'Role management', en: 'Role management' },
  'pricing.pro.feature4': { sw: 'Export Excel', en: 'Export Excel' },
  'pricing.pro.feature5': { sw: 'Usimamizi wa wateja', en: 'Customer management' },
  'pricing.pro.feature6': { sw: 'Ankara za mauzo', en: 'Invoice' },
  'pricing.pro.feature7': { sw: 'Ripoti zote za kimahesabu', en: 'All accounting reports' },
  'pricing.pro.feature8': { sw: 'Mipango ya bajeti', en: 'Budget planning' },
  'pricing.free.button': { sw: 'Anza Bure', en: 'Start Free' },
  'pricing.basic.button': { sw: 'Chagua Basic', en: 'Choose Basic' },
  'pricing.pro.button': { sw: 'Chagua Pro', en: 'Choose Pro' },
  'faq.title': { sw: 'Maswali ya Mara kwa Mara', en: 'Frequently Asked Questions' },
  'faq.q1': { sw: 'Je, naweza kuanza kwa bure?', en: 'Can I start for free?' },
  'faq.a1': { sw: 'Ndiyo, kuna mpango wa bure kwa watumiaji mmoja.', en: 'Yes, there is a free plan for one user.' },
  'faq.q2': { sw: 'Je, naweza kubadili mpango bila kukataza hati?', en: 'Can I switch plans anytime?' },
  'faq.a2': { sw: 'Ndiyo, unaweza kubadilisha mpango wakati wowote kupitia mipangilio.', en: 'Yes, you can change plans anytime via settings.' },
  'faq.q3': { sw: 'Ripoti zinaweza kuondolewa kwa Excel?', en: 'Can reports be exported to Excel?' },
  'faq.a3': { sw: 'Ndio, mpango wa PRO una kipengele cha Excel export.', en: 'Yes, the PRO plan includes Excel export.' },
  'faq.q4': { sw: 'Je, data zangu zitakuwa salama?', en: 'Will my data be secure?' },
  'faq.a4': { sw: 'Tunatumia usimbaji fiche na backups mara kwa mara.', en: 'We use encryption and regular backups.' },
  'cta.text': { sw: 'Anza kutumia mfumo leo – jaribu bure', en: 'Start using the system today – try for free' },
  'cta.button': { sw: 'Anza Bure', en: 'Start Free' },
  'navbar.signin': { sw: 'Ingia', en: 'Sign In' },
  'navbar.signup': { sw: 'Jiunge', en: 'Sign Up' }
};

@Injectable({ providedIn: 'root' })
export class TranslationService {
  private langSubject = new BehaviorSubject<'sw' | 'en'>('sw');
  lang$ = this.langSubject.asObservable();

  currentLang() {
    return this.langSubject.value;
  }

  toggleLanguage() {
    const next = this.langSubject.value === 'sw' ? 'en' : 'sw';
    this.langSubject.next(next);
  }

  translate(key: string): string {
    const entry = TRANSLATIONS[key];
    if (!entry) {
      return key;
    }
    return entry[this.langSubject.value];
  }
}
