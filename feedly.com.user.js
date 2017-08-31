// ==UserScript==
// @name         feedly.com
// @namespace    https://github.com/Fiberlu/userscripts
// @version      0.1
// @author       映阶碧草
// @match        https://feedly.com/*
// @grant        none
// ==/UserScript==

{
    var feelyTabsArea = document//.querySelector('#feedlyTabs')
    feelyTabsArea.addEventListener('click', collapseAllSiblingCategories)

    function collapseAllSiblingCategories(event) {
        let clickedCategory
        if (event.target.matches('[id^="user/"][id$=tab_label]')) {
            event.stopPropagation()
            clickedCategory = event.target.parentNode.querySelector('.handle')
            clickedCategory.click()
            return
        }
        if (event.target.matches('.handle')) {
            clickedCategory = event.target
        } else {
            return
        }

        const categories = feelyTabsArea.querySelectorAll('.handle')
        for (var category of categories) {
            if (category == clickedCategory || !category.classList.contains('expanded')) {
                continue
            }
            category.click()
        }
    }
}
