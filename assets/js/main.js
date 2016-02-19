(function() {
  // Clicking menubar toggles "dark menu bar"
  document.querySelector('.js-toggle-dark-menubar').addEventListener('click', function() {
    this.classList.toggle('menubar-dark');
  });

  var timer = document.querySelector('.js-aware-timer');
  var pageLoad = new Date() - (Math.random() * 1000 * 60 * 30);
  function updateTimer() {
    var now = new Date();
    var min = Math.floor((now - pageLoad) / (1000 * 60));
    var text = min + "m";

    timer.textContent = text;
  }

  var clock = document.querySelector('.js-clock');
  function updateClock() {
    var now = new Date();
    var day = now.toUTCString().split(",")[0];
    var hour = (now.getHours() % 12);
    var min = ("0" + now.getMinutes()).slice(-2);
    var meridian = now.getHours() > 12 ? "PM" : "AM";
    var text = day + " " + hour + ":" + min + " " + meridian;

    clock.textContent = text;
  }

  setInterval(function() {
    updateTimer();
    updateClock();
  }, 30000);

  updateTimer();
  updateClock();
})();

(function() {
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-74056549-2', 'auto');
  ga('send', 'pageview');
})();