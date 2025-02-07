function updateTime() {
  const utcTime = new Date().toUTCString();
  document.getElementById(
    'utc-time'
  ).textContent = `Current UTC Time: ${utcTime}`;
}

updateTime();
setInterval(updateTime, 1000);
