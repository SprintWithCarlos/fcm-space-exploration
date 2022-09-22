/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */

export const capitalize = (str: any) => {
  if (str && typeof str === "string") {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  return "";
};

export const formatter = (currency: string, amount: string | number) => {
  let cleanedAmount: number;
  const hasDecimal = amount.toString().slice(-3).charAt(0).match(/,|\./gm);
  const transform = amount.toString().replace(/[^a-zA-Z0-9 ]/g, "");
  if (hasDecimal) {
    cleanedAmount = parseInt(transform, 10) / 100;
  } else {
    cleanedAmount = parseInt(transform, 10);
  }

  const result = Intl.NumberFormat(undefined, {
    style: "currency",
    currency,
  }).format(cleanedAmount);
  return result;
};
const mobile = 375;
const tablet = 768;
const desktop = 1440;
enum Device {
  mobile = "mobile",
  tablet = "tablet",
  desktop = "desktop",
}
export const getDevice = (width: number): Device => {
  if (width <= mobile) return Device.mobile;
  if (width > mobile && width < tablet) return Device.tablet;
  if (width >= tablet) return Device.desktop;
  throw new Error();
};
