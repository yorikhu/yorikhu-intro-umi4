export function implementDebounce<T extends (...args: any[]) => any>(
  callBack: T,
  during: number,
) {
  let timer: NodeJS.Timeout;

  const debounceFunction: unknown = (...args: unknown[]) => {
    if (!!timer) clearTimeout(timer);
    timer = setTimeout(() => callBack(...args), during);
  };

  return debounceFunction as T;
}
