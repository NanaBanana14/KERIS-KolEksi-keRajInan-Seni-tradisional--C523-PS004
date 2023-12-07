Feature('Pengujian Kalender Budaya');

Scenario('Melakukan Interaksi dengan Kalender', async ({ I }) => {
    I.amOnPage('http://172.20.10.2:9000/menu/kalendarbudaya.html'); 
    const iframeSelector = 'iframe.calendar';
    I.switchTo(iframeSelector); 

  });