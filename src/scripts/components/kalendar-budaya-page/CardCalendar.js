import { html } from 'lit';
import { msg, updateWhenLocaleChanges } from '@lit/localize';
import LitWithoutShadowDom from '../base/LitWithoutShadowDom';

class CardCalendar extends LitWithoutShadowDom {
  constructor() {
    super();
    updateWhenLocaleChanges(this);
  }

  render() {
    return html`
        <div class="shadow mt-5 p-3 mb-5 bg-body rounded position-relative">
            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                    <div class="p-2">
                        <div class="d-flex flex-column shadow">
                        <div class="p-2">
                            <h3 class="text-center p-3 mb-2 bg-brown text-white rounded">${msg('Kalendar Budaya')}</h3>
                            <p class="text-center text-wrap mt-5">${msg('Untuk mengetahui jadwal detail dari event, kamu dapat klik salah satu eventnya.')}</p>
                        </div>
                        <div class="p-2">
                            <img class="w-100" src="https://firebasestorage.googleapis.com/v0/b/keris-api.appspot.com/o/images%2Fassets%20kalendar%2FDate%20picker-bro.png?alt=media&token=4843d750-427c-4e94-bdb3-1fb1ed4916b6" alt="Calendar" />
                        </div>
                        </div>
                    </div>
                    </div>
                    <div class="col-md-6">
                    <div class="p-2 embed-responsive embed-responsive-16by9">
                        <iframe
                        class="embed-responsive-item shadow calendar"
                        title="calendarBudaya"
                        src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=Asia%2FJakarta&showTitle=0&src=a2VyaXNhcHB0ZWFtcDAwNEBnbWFpbC5jb20&color=%23039BE5"
                        ></iframe>
                    </div>
                    </div>
                </div>
                <div class="position-absolute top-0 start-0 translate-middle">
                    <img
                    class="mt-5 flower-icon-img"
                    src="https://firebasestorage.googleapis.com/v0/b/keris-api.appspot.com/o/images%2Fassets%20kalendar%2Fpola%20batik.png?alt=media&token=7bf81c17-7e03-41a2-99ba-4a34926f18a8"
                    alt="Motif batik"
                    />
                </div>
            </div>
        </div>
        `;
  }
}

customElements.define('card-calendar', CardCalendar);
