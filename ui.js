class UI {
	constructor() {
		this.uiContainer = document.getElementById('content');
		this.errorContainer = document.getElementById('error');
		this.city;
	}

	populateUI(data) {
		// De-Structure Variables
		// Add Veriables to HTML

		this.uiContainer.innerHTML = `
        
        <div class="card mx-auto mt-5" style="width: 18rem;">
              <div class="card-body justify-content-center">
                  <h4 class="card-title text-center text-primary">${data.name}</h4>
                  <br></br>
                  <h6 class="card-subtitle mb-2 text-muted">Current Tempreture <span class="text-primary">${data.main.temp}</span></h6>
                  <h6 class="card-subtitle mb-2 text-muted">Highs of <span class="text-primary">${data.main.temp_max}</span></h6>
                  <h6 class="card-subtitle mb-2 text-muted">Lows of <span class="text-primary">${data.main.temp_min}</span></h6>
                  <br></br>
                  <p class="card-text ">Weather condition: <span class="text-primary">${data.weather[0].description}</span></p>
                  
              </div>
          </div>`;
	}
}
