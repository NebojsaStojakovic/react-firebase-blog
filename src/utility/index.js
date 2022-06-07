export const excerpt = (str, count) => {
  const newAr = str[0].length;
  const newSentence = str[0];
  if (newAr > count) {
    str = newSentence.substring(0, count) + " ... ";
  }
  return str;
};
