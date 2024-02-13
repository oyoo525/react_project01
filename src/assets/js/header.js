import $ from 'jquery';

export function searchSelect() {
	let option = $(".searchOption");

	if(option.css("display") === "none") {
		option.css("display", "block");
	} else {
		option.css("display", "none");
	}

}