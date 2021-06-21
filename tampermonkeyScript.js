// ==UserScript==
// @name         Melvoridle Script
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Melvoridle script
// @author       p0p3yee
// @match        https://melvoridle.com*
// @icon         https://www.google.com/s2/favicons?domain=melvoridle.com
// @require      https://code.jquery.com/ui/1.12.1/jquery-ui.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/html2canvas/0.4.1/html2canvas.min.js
// @grant        none
// ==/UserScript==

const myScripts = `
  <script>
    const getGemsInBank = () => bank.filter(obj => items[obj.id].type == "Gem")
    const getJunkInBank = () => bank.filter(obj => items[obj.id].type == "Junk" || (items[obj.id].name.includes("Burnt") && items[obj.id].type == "Cooked Fish"))

    const sellItems = (items) => {
      if (!sellItemMode) {
        toggleSellItemMode()
      }
      items.forEach(v => selectBankItem(v.id))
      confirmSellModeSelection(true)
      setTimeout(() => {
        if (sellItemMode) {
          toggleSellItemMode()
        }
      }, 500)
    }
  </script>
`

const scriptUI = `
<div id="scriptUI" style="left: 0px; top: 0px; z-index: 9999999999; width: 200px; height: auto; position:fixed; background-color: #232a35; border: 1px solid #c2b6b8; color: white">
  <center>
    <p style="color: #30c78d">Melvor Idle Script</p>
    <hr>
    <button onClick="sellItems(getJunkInBank())">Sell Junks</button>
    <button onClick="sellItems(getGemsInBank())">Sell Gems</button>
    <hr>
    <span>Author: <b>p0p3yee</b></span>
  </center>
</div>`;


(function() {
  'use strict';
  $("body").append(myScripts)
  $("body").append(scriptUI)
  $("#scriptUI").draggable()
})();