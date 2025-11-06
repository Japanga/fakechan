// colortext.js
export function colorTexting() {
   const wordToReplace = "$DESU$";
  const replacementHTML = '<h1 class="desu-text">$DESU$</h1>';
  document.body.innerHTML = document.body.innerHTML.replaceAll(wordToReplace, replacementHTML);
    const wordToReplace2 = "$DOUBLERAINBOW$";
   const replacementHTML2 = '<h1 class="rainbow-text">$DOUBLERAINBOW$</h1>';
  document.body.innerHTML =
  document.body.innerHTML.replaceAll(wordToReplace2, replacementHTML2); 
}          

colorTexting();
