const NativeUI = require("nativeui");
const Menu = NativeUI.Menu;
const UIMenuItem = NativeUI.UIMenuItem;
const UIMenuListItem = NativeUI.UIMenuListItem;
const UIMenuCheckboxItem = NativeUI.UIMenuCheckboxItem;
const UIMenuSliderItem = NativeUI.UIMenuSliderItem;
const BadgeStyle = NativeUI.BadgeStyle.Crown;
const Point = NativeUI.Point;
const ItemsCollection = NativeUI.ItemsCollection;
const Color = NativeUI.Color;
const ListItem = NativeUI.ListItem;

mp.gui.cursor.visible = false;
mp.gui.chat.show(true);

const menu = new Menu("sevtixRAGE", "Menu", new Point(25, 25));
menu.AddItem(new UIMenuItem("Repair","Here you can repair your vehicle"));
menu.ItemSelect.on(item => {
	if (item instanceof UIMenuItem) {
		switch(item.Text) {
			case "Repair":
					mp.events.callRemote("repair");
				break;
		}
		//console.log(item.SelectedItem.DisplayText, item.SelectedItem.Data);
	}
});
menu.Close();
mp.keys.bind(0x71, false, () => {
	if(!menu.Visible) {
		menu.Open();
		return;
	}

	if(menu.Visible) {
		menu.Close();
		return;
	}
});

const car_menu = new Menu("sevtixRAGE", "Save / load vehicles", new Point(250, 250));
car_menu.AddItem(new UIMenuListItem(
	"Load",
	"Loads a car from storage",
	new ItemsCollection(["1", "2", "3"])
));

car_menu.AddItem(new UIMenuListItem(
	"Save",
	"Saves a car to storage",
	new ItemsCollection(["1", "2", "3"])
));

car_menu.AddItem(new UIMenuItem(
	"Close",
	"Close the menu"
));
car_menu.ItemSelect.on(item => {
	if (item instanceof UIMenuListItem) {

		//mp.gui.chat.push(item.Text+":"+item.SelectedValue);

		if(item.Text == "Load") {
			mp.events.callRemote("loadPlayerVehicle", parseInt(item.SelectedValue));
		}

		if(item.Text == "Save") {
			mp.events.callRemote("savePlayerVehicle", mp.game.vehicle.getDisplayNameFromVehicleModel(mp.players.local.vehicle.model), parseInt(item.SelectedValue));
		}
	}

	if(item instanceof UIMenuItem) {
		car_menu.Close();
	}
});
car_menu.Close();

/*mp.events.add("playerCreateWaypoint", (player, position) => {
	//mp.events.callRemote("waypoint", position);
    mp.gui.chat.push("You have placed a waypoint at " + position.x + ',' + position.y + ',' + position.z);
});*/
  
mp.events.add('playerEnterColshape', (shape) => {
	  switch(shape.getVariable("id")) {
		  case "garageColshape":
				car_menu.Open();
			  break;
	  }
});

mp.events.add('playerExitColshape', (shape) => {
	switch(shape.getVariable("id")) {
		case "garageColshape":
			if(car_menu.Visible) {
				car_menu.Close();
			}
			break;
	}
});