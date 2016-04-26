document.addEventListener("DOMContentLoaded", function(){
	new Vue ({
		el: "#calc",
		data: function() {
			return {firstNumberText: "Введите первое число",
			secondNumberText: "Введите второе число",
			firstNumber: "",
			secondNumber: "",
			resultText: "Ответ",
			results: []
			};
		},
		methods: {
			sum: function() {
				var value = parseInt(this.firstNumber)+parseInt(this.secondNumber);
				this.results.push({value: value});
			},
			subtr: function() {
				var value = this.firstNumber-this.secondNumber;
				this.results.push({value: value});
			},
			multipl: function() {
				var value = this.firstNumber*this.secondNumber;
				this.results.push({value: value});
			},
			degree: function() {
				var value = this.firstNumber/this.secondNumber;
				this.results.push({value: value});
			}
		}
	})
});