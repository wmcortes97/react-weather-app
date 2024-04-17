import { daysOfWeek, months } from "../constants/contants";

export const getDate = () => {
  const nextSevenDays = [];
  const dateInfo = new Date();
  const day = daysOfWeek[dateInfo.getDay()];
  const date = dateInfo.getDate();
  const month = months[dateInfo.getMonth()];
  const year = dateInfo.getFullYear();

  for (let i = 0; i < 7; i++) {
    const nextDate = new Date();
    nextDate.setDate(dateInfo.getDate() + i + 1); // Increment date by i + 1
    nextSevenDays.push(daysOfWeek[nextDate.getDay()]);
  }

  return { day, date, month, year, nextSevenDays };
};

export const getNextSevenDays = () => {
  const { day: todaysDate } = getDate();
};

export function convertToF(celsius) {
  return (celsius * 9) / 5 + 32;
}

export function convertToC(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

export const getTime = () => {
  let timeInfo = new Date();
  let hour = timeInfo.getHours();
  let minutes = timeInfo.getMinutes();
  let time;

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hour === 12) {
    time = `${hour}:${minutes} PM`;
  } else if (hour > 13) {
    time = `${hour - 12}:${minutes} PM`;
  } else {
    time = `${hour}:${minutes} AM`;
  }
  return time;
};
