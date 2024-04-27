const regx = /^[0-9]+$/;
const phoneChecker = (phone: string) =>
  regx.test(phone) &&
  phone.length == 11 &&
  (phone.startsWith("010", 0) ||
    phone.startsWith("012", 0) ||
    phone.startsWith("011", 0));

export default phoneChecker;
