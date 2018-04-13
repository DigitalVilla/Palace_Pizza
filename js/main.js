$(document).ready(function() {
    var itemList = $("#amount").val();






    function addItem() {
        let li = document.createElement('li');
        li.setAttribute('class', "side-nav_order_list_item");
        let html = ['<span class="bullet"></span>',
            '<span class="item">' + itemName + '</span>',
            '<input id="' + (itemId) + '" class="QTY" type="number" placeholder="1" min="0">',
            '<span class="cost">' + prices[itemId++].toFixed(2) + '</span>'
        ].join('');
        li.innerHTML = html;
        itemList.appendChild(li);
    }

    
    <li class="side-nav_order_list_item">
    <span class="description">
        <span class="bullet"></span>
        1 Hawaian Large
    </span>
    <span class="cost">$23.00</span>
</li>


});