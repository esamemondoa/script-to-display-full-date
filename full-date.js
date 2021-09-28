<script>
  var Today = new Date();
  var Days = new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
  var Months = new Array("January","February","March","April","May","June","July","August","September","October","November","December");
  var Year = Today.getYear();
    if (Year < 1000) { Year += 1900; }
      var Day = Today.getDate();
      var DateEnding = "th";
    if (Day == 1 || Day == 21 || Day == 31) { DateEnding = "st"; }
      else if (Day == 2 || Day == 22) { DateEnding = "nd"; }
      else if (Day == 3 || Day == 23) { DateEnding = "rd"; }
document.write( Days[Today.getDay()] + " " + Day + DateEnding + " " + Months[Today.getMonth()] + " " + Year );
</script>
