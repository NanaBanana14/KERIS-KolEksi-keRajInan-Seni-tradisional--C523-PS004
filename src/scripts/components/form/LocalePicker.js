/* eslint-disable */
import { html } from 'lit';
import { allLocales } from '../../../generated/locale-codes';
import { updateWhenLocaleChanges } from '@lit/localize';
import { getLocale, localeNames, setLocale, setLocaleFromUrl } from '../../localization.js';
import LitWithoutShadowDom from '../base/LitWithoutShadowDom';

class LocalePicker extends LitWithoutShadowDom {
  constructor() {
    super();
    updateWhenLocaleChanges(this);
  }

  connectedCallback() {
    super.connectedCallback();
    this._setInitialLocale();
  }

  _setInitialLocale() {
    const storedLocale = localStorage.getItem('selectedLocale');
    const currentLocale = getLocale();

    if (storedLocale && storedLocale !== currentLocale) {
      setLocale(storedLocale);
    } else {
      setLocaleFromUrl();
    }
  }

  render() {
    return html`
      <select class="form-select w-auto m-auto" @change=${this._localeChanged}>
        ${allLocales.map((locale) => {
          return html`
            <option value=${locale} ?selected=${locale === getLocale()}>
              ${localeNames[locale]}
            </option>
          `;
        })}
      </select>
    `;
  }

  _localeChanged(event) {
    const newLocale = event.target.value;

    if (newLocale !== getLocale()) {
      const url = new URL(window.location.href);
      url.searchParams.set('lang', newLocale);

      window.history.pushState(null, '', url.toString());
      setLocale(newLocale);
      localStorage.setItem('selectedLocale', newLocale);
    }
  }
}

customElements.define('locale-picker', LocalePicker);
