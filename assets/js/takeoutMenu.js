function parseMenu() {
	Papa.parse("takeout.csv", {
		header: true,
		download: true,
		complete: function(results) {
		var curCol = 0;
		for (var i = 0; i < results.data.length; i++) {
			var menuItem = results.data[i];
			if(menuItem.price == "header" && (menuItem.item == "Soup" || menuItem.item == "Beef" || menuItem.item == "Luncheon Specials" )) {
			curCol++;
			}
			var menuList = document.getElementById("menu-list-" + curCol.toString());
			var listItem = document.createElement("dl");
			var sepItem = document.createElement("dt");
			if(menuItem.price == "description") {
			listItem.className = "desc";
			listItem.innerHTML = "<p class=\"listing\">" + menuItem.item + "</p>";
			} else if(menuItem.price == "header") {
			sepItem.innerHTML = "<h3 class=\"header\">" + menuItem.item + "</h3>";
			menuList.appendChild(sepItem);
			continue;
			} else {
			listItem.innerHTML = "<p class=\"listing\"><strong>" + menuItem.item + " - " + menuItem.price + "</strong></p>";
			}
			menuList.appendChild(listItem);
		}
		}
	});
}