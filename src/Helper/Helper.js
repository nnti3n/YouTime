function toStringTime(currentTime) {
  var currentTimeInSec = Math.floor(currentTime / 1000);
  var currentTimeInHour = (Math.floor(currentTimeInSec / 3600) + ":") || "";
  if (currentTimeInHour.length == 2) {
    currentTimeInHour = "0" + currentTimeInHour;
  }
  var currentTimeInMinute = Math.floor((currentTimeInSec % 3600) / 60).toString() || "00";
  if (currentTimeInMinute.length == 1) {
    currentTimeInMinute = "0" + currentTimeInMinute;
  }
  currentTimeInSec = (currentTimeInSec % 60).toString();
  if (currentTimeInSec.length == 1) {
    currentTimeInSec = "0" + currentTimeInSec;
  }
  return (currentTimeInHour == "00:" ? "" : currentTimeInHour) + currentTimeInMinute + ":" + currentTimeInSec;
}

export default toStringTime
