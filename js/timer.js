export const gameTimer = (val) => {
  return {
    val,
    tick() {
      return (this.val > 0) ? gameTimer(--this.val) : false;
    }
  };
};
