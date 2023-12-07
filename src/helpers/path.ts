export const usePathnameWithoutSlash = (pathname: string) => {
  return pathname.replace(/^\/+/g, '')
}
