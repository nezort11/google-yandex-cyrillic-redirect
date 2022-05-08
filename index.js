browser.webRequest.onBeforeRequest.addListener(
  redirectCyrillic,
  // Request filter
  {
    urls: ["https://www.google.com/search*"],
  },
  // Modify the request
  ["blocking"]
);

function redirectCyrillic(requestDetails) {
  const url = new URL(requestDetails.url);
  const query = url.searchParams.get("q");

  if (query) {
    for (const c of Array.from(query)) {
      const charCode = c.charCodeAt(0);
      if (charCode >= 1024 && charCode <= 1279) {
        return {
          redirectUrl: `https://yandex.ru/search/?text=${query}`,
        };
      }
    }
  }
}
