
(function () {
  var withChrome = document.getElementById('with-chrome')
    , getIt = document.getElementById('get-it')
    , worksBetter = document.getElementById('works-better')
    , getItNow = document.getElementById('get-it-now')
    , defaultData = {
        better: 'Google works better with Chrome',
        link:   'Yes, get Chrome now',
      }
    , data
  ;
  try {
    data = JSON.parse(location.query.replace(/^\?/, ''));
  }
  catch (e) {
    data = defaultData;
  }
  console.log(data);
  worksBetter.value = data.better || defaultData.better;
  getItNow.value = data.link || defaultData.link;



})();
