export const isBarnMessageValid = (message) => {
  if (
    message === 'You just unlocked your barn! Watch out for strangers!'
      || message === "The barn is already wide open! Let's throw a party!"
  ) {
    return true;
  }
  return false;
};

export const isToiletSeatMessageValid = (message) => {
  if (
    message === "You just put the toilet seat down. You're a wonderful roommate!"
      || message === 'Yea, the toilet seat is already down... you slob!'
  ) {
    return true;
  }
  return false;
};

export const isChickenFeedMessageValid = (message) => {
  if (
    message === 'Your chickens are now full and happy'
      || message === 'You just fed them! Do you want them to explode??'
  ) {
    return true;
  }
  return false;
};
