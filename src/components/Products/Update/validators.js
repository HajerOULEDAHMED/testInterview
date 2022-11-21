import { timestampToDays } from '../../../utils';

export const isNameValid = (value) => {
  return value.trim().length > 0 && value.trim().length <= 200;
};

export const isCategoriesValid = (value) => {
  return value.length > 0 && value.length <= 5;
};
export const istimestampToDays = (dateE) => {
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  let yyyy = today.getFullYear();

  today = yyyy + '-' + mm + '-' + dd;
  let dateR = today.split('-');
  // console.log(dateR);
  let newDatR = new Date(dateR[0], dateR[1] - 1, dateR[2]);
  dateE = dateE.split('-');
  let newDatE = new Date(dateE[0], dateE[1] - 1, dateE[2]);
  return Math.abs(
    timestampToDays(newDatE.getTime()) - timestampToDays(newDatR.getTime())
  ) < 30 &&
    Math.abs(
      timestampToDays(newDatE.getTime()) - timestampToDays(newDatR.getTime())
    ) > 0
    ? false
    : true;
};
