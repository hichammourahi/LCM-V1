/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';
import { Translation } from '../translations';

interface FooterProps {
  t: Translation;
  lang: 'fr' | 'en';
}

export default function Footer({ t, lang }: FooterProps) {
  return (
    <footer className="bg-white py-12 border-t border-gray-100 text-center text-sm text-gray-400">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 mb-6">
          <Link to="/cgv" className="hover:text-sage transition-colors">{t.footer.cgv}</Link>
          <Link to="/mentions-legales" className="hover:text-sage transition-colors">{t.footer.legal}</Link>
          <Link to="/confidentialite" className="hover:text-sage transition-colors">{t.footer.privacy}</Link>
        </div>
        <p>© {new Date().getFullYear()} LCM Cosmétique. {lang === 'fr' ? 'Tous droits réservés.' : 'All rights reserved.'}</p>
      </div>
    </footer>
  );
}
