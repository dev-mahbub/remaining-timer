const daysElement = document.querySelector(".days");
const hoursElement = document.querySelector(".hours");
const minutesElement = document.querySelector(".minutes");
const secondsElement = document.querySelector(".seconds");
const heading = document.querySelector("h1");
const counterTimer = document.querySelector(".counterTimer");

const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

const timerFunction = () => {
    let now = new Date(),
        dd = String(now.getDate()).padStart(2, "0"),
        mm = String(now.getMonth() + 1).padStart(2, "0"),
        yyyy = now.getFullYear();

    const enterDay = prompt("Enter Day").padStart(2, "0");
    const enterMonth = prompt("Enter Month").padStart(2, "0");

    now = `${mm}/${dd}/${yyyy}`;
    let targetDate = `${enterMonth}/${enterDay}/${yyyy}`;

    if (now > targetDate) targetDate = `${enterMonth}/${enterDay}/${yyyy + 1}`;

    const intervalID = setInterval(() => {
        const timer = new Date(targetDate).getTime();
        const today = new Date().getTime();

        const difference = timer - today;
        const leftDay = Math.floor(difference / day);
        const leftHour = Math.floor((difference % day) / hour);
        const leftMinute = Math.floor((difference % hour) / minute);
        const leftSecond = Math.floor((difference % minute) / second);

        daysElement.innerHTML = leftDay;
        hoursElement.innerHTML = leftHour;
        minutesElement.innerHTML = leftMinute;
        secondsElement.innerHTML = leftSecond;

        if (difference < 0) {
            counterTimer.style.display = "none";
            heading.innerText = "Time's UP";
            clearInterval(intervalID);
        }



    }, 0)

}

timerFunction();