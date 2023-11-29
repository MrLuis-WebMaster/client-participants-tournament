
import { useCallback } from 'react';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';

const useNavigation = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();


  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const navigateWithQueryParam = useCallback(
    (name: string, value: string) => {
      const queryString = createQueryString(name, value);
      const url = `${pathname}?${queryString}`;
      router.push(url);
    },
    [createQueryString, pathname, router]
  );

  return {
    pathname,
    searchParams,
    createQueryString,
    navigateWithQueryParam,
  };
};

export default useNavigation;
