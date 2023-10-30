import { MESSAGE_LIST } from "./mock/messageList";
import { NAME_LIST } from "./mock/nameList";

export function generateRandomNames() {
  return NAME_LIST[Math.floor(Math.random() * NAME_LIST.length)];
}

export function generateRandomMessage() {
  return MESSAGE_LIST[Math.floor(Math.random() * MESSAGE_LIST.length)];
}

export function abbreviateNumber(value) {
  let newValue = value;
  if (value >= 1000) {
    let suffixes = ["", "K", "M", "B", "T"];
    let suffixNum = Math.floor(("" + value).length / 3);
    let shortValue = "";
    for (let precision = 2; precision >= 1; precision--) {
      shortValue = parseFloat(
        (suffixNum !== 0
          ? value / Math.pow(1000, suffixNum)
          : value
        ).toPrecision(precision)
      );
      let dotLessShortValue = (shortValue + "").replace(/[^a-zA-Z 0-9]+/g, "");
      if (dotLessShortValue.length <= 2) {
        break;
      }
    }
    if (shortValue % 1 !== 0) shortValue = shortValue.toFixed(1);
    newValue = shortValue + suffixes[suffixNum];
  }
  return newValue;
}

export function getDifferenceBetweenDates(startDate) {
  let statement = "";
  startDate = new Date(startDate);
  let endDate = new Date();
  const diff = endDate - startDate;
  const years = Math.floor(diff / (365.25 * 24 * 60 * 60 * 1000));
  const months = Math.floor(diff / (30 * 24 * 60 * 60 * 1000));
  const days = Math.floor(diff / (24 * 60 * 60 * 1000));

  if (months === 0 && years === 0) {
    days >= 1 ? (statement = `${days} days ago`) : (statement = `today`);
    return statement;
  } else if (months !== 0 && years === 0) {
    months > 1
      ? (statement = `${months} months ago`)
      : (statement = `${months} month ago`);
    return statement;
  } else if (years !== 0) {
    years > 1
      ? (statement = `${years} years ago`)
      : (statement = `${years} year ago`);
    return statement;
  }
}
