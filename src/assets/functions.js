export function setCardImageWidth(displayWidth) {
  if (displayWidth > 1500) return 3;
  else if (displayWidth > 1300 && displayWidth <= 1500) return 3;
  else if (displayWidth > 1000 && displayWidth <= 1300) return 3;
  else if (displayWidth <= 1000) return 2;
}


export const fetchDataAsync =async function (url) {
  const data = await fetch(url, {
    method: "GET",
  });
  const json = await data.json();
  return json;
};