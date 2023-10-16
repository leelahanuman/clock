function getTime() {
  document.getElementById("date").innerHTML = new Date().getDate();

  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const d = new Date();
  let monthName = month[d.getMonth()];
  document.getElementById("month").innerHTML = monthName;

  document.getElementById("year").innerHTML = new Date().getFullYear();

  const day = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Satursday",
  ];

  let dayName = day[d.getDay()];
  document.getElementById("day").innerHTML = dayName;

  let hrs = d.getHours();
  document.getElementById("hrs").innerHTML = String(hrs).padStart(2, "0");

  let mins = d.getMinutes();
  document.getElementById("mins").innerHTML = String(mins).padStart(2, "0");

  let secs = d.getSeconds();
  document.getElementById("secs").innerHTML = String(secs).padStart(2, "0");
}
setInterval(() => {
  getTime();
}, 1000);
