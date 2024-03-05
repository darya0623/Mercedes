const listz = document.querySelectorAll('.feature-sub')
const btnz = document.querySelectorAll('.feature__link')

const openTab = (tab, idx) => {
    tab.classList.add('feature__link_active')
    listz[idx].classList.remove('hidden')
}

const closeTab = (tab, idx) => {
    tab.classList.remove('feature__link_active')
    listz[idx].classList.add('hidden')
}

btnz.forEach((btnItem, index) => {
    btnItem.addEventListener('click', () => {
       if (btnItem.classList.contains('feature__link_active')) {
        closeTab(btnItem, index)
       } else {
        openTab(btnItem, index)
       }

    //    btnz.forEach((btnItem, idx) => {
    //     if (index !== idx) {
    //         btnItem.classList.remove('feature__link_active')
    //     }
    //    })

    //    listz.forEach((listItem, idx) => {
    //     if (index !== idx) {
    //         listItem.classList.add('feature__link_active')
    //     }
    //    })

        // btnItem.classList.add('feature__link_active')

        // listz.forEach((listItem) => {
        //     listItem.classList.add('hidden')
        // })

        // listz[index].classList.remove('hidden')
    })
})
