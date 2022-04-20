import {Plugin} from 'obsidian';

export default class AutoAddLastLine extends Plugin {
	
	async onload() {

		this.registerDomEvent(document, 'keydown', (evt: KeyboardEvent) => {
			if(evt.key==='ArrowDown'){
				
				const maxLength = document.querySelectorAll('.cm-line').length;
				[].forEach.call(document.querySelectorAll('.cm-line'),function(item:any,index:any){
					if(item===document.querySelector('.cm-active.cm-line')){
						console.log(item,index);
						if((maxLength-index)<10){
							const ele=document.createElement('div');
							ele.className +='cm-line';
							ele.innerHTML='<br/>';
							document.querySelectorAll('.cm-line')[document.querySelectorAll('.cm-line').length-1].after(ele)
						}

					}
				})
			}
		});

	}

	onunload() {

	}

}
