export function sortArrayByProp(array: any[], prop: string) {
  return array.sort((a, b) => {
    const val1 = a?.[prop].toUpperCase();
    const val2 = b?.[prop].toUpperCase();
    if (val1 < val2) {
      return -1;
    } else if (val1 > val2) {
      return 1;
    }
    return 0;
  });
}
