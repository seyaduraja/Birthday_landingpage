const scriptURL = 'https://script.google.com/macros/s/AKfycbxlW2zQUdVZ0K_5GZ1B5nmJ-DpKad-FMpR9UkfndHGWI9HmspeLzqU8Yy6YF9NTO7bv-w/exec'
			const form = document.forms['birthdayform']
		  
			form.addEventListener('submit', e => {
			  e.preventDefault()
			  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
				.then(response => alert("Thank you! your form is submitted successfully." ))
				.then(() => {  window.location.reload(); })
				.catch(error => console.error('Error!', error.message))
			})