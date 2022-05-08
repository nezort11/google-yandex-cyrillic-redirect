const urlParams = new URLSearchParams(window.location.search);
const query = urlParams.get("q");

if (query) {
  Array.from(query).forEach((c) => {
    const charCode = c.charCodeAt(0);
    if (charCode >= 1024 && charCode <= 1279) {
      window.location = `https://yandex.ru/search/?text=${query}`;
    }
  });
}
