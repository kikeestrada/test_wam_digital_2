import {topNav} from './modules/topNav'
import {swDetecter} from './modules/swDetecter';
(()=>{
	swDetecter();
	topNav();
	if (document.body.classList.contains('home')) {
		// functions here
	}else if (document.body.classList.contains('page2')) {
		// functions here
	}else if (document.body.classList.contains('page3')) {
		// functions here
	}
})();
