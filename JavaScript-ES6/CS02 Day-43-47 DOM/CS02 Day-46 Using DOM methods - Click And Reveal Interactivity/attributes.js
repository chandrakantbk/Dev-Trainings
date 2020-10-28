function showTab(param_num) {

    var all_tabs = document.getElementsByClassName('data-box');

    // all_tabs[0].classList.add('hiden');
    // all_tabs[1].classList.add('hiden');
    // all_tabs[2].classList.add('hiden');

    for (var i = 0; i < all_tabs.length; i++) {
        all_tabs[i].classList.add('hiden');
    }

    var my_id = 'data-' + param_num;

    var data_tab = document.getElementById(my_id);
    data_tab.classList.remove('hiden');

}