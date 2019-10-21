
const partyHeader = document.getElementById('party');

export const htmlGenerator = (string, htmlElement) => {
  let el = document.createElement('p');
  el.textContent = string;
  if (htmlElement.hasChildNodes()){
    let children = Array.from(htmlElement.children);
    children.forEach(function(child){
      htmlElement.removeChild(child);
    });
  }
  htmlElement.appendChild(el);

};

htmlGenerator('Party Time.', partyHeader);
