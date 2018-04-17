export const setGameTimer = (val) => {
  return {
    val,
    tick() {
      return (this.val > 0) ? setGameTimer(--this.val) : false;
    }
  };
};
