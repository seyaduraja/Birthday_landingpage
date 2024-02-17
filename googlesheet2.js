const scriptURL = 'https://script.google.com/macros/s/AKfycbzfoPAZn8cmwVcf8lSoJ2oFmdx_irKIGAyPSX9MALvBdOHy7kQhK_T5XaschCQd1esvBg/exec'
			const form = document.forms['instantform']
		  
			form.addEventListener('submit', e => {
			  e.preventDefault()
			  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
				.then(response => alert("Thank you! we'll contact you soon." ))
				.then(() => {  window.location.reload(); })
				.catch(error => console.error('Error!', error.message))
			})