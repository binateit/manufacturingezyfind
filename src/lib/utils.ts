export function detectMobileOS(): 'Huawei' | 'Android' | 'Unknown' {
  const userAgent = navigator.userAgent || navigator.vendor;

  if (/huawei/i.test(userAgent)) {
    return 'Huawei';
  }

  if (/android/i.test(userAgent)) {
    return 'Android';
  }

  return 'Unknown';
}
