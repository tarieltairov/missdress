const REQUIRED_FIELD = 'Обязательно для заполнения'

export const userNameValidation = {
	required:REQUIRED_FIELD,
	validate: (value : string) => {
		
		 if(value.length < 2){
			return 'Имя должно быть длиннее 1 буквы'
		}
		else if(value.length >= 20) {
			return 'Имя не должно быть длиннее 20 букв'
		}
		else if(value.length >= 20) {
			return 'Имя не должно быть длиннее 20 букв'
		}
		return true
	},
	pattern : {
		value: /^[a-zA-Zа-яА-Я]+$/,
		message: "Only letters",
}
}
export const userSurnameValidation = {
	required:REQUIRED_FIELD,
	validate: (value : string) => {

		
		 if(value.length <= 2){
			return 'Фамилия должна быть длиннее 2 букв'
		}
		else if(value.length >= 20) {
			return 'Фамилия не должна быть длиннее 20 букв'

		}
		return true
	},
	pattern : {
		value: /^[a-zA-Zа-яА-Я]+$/,
		message: "Only letters",}
}
export const telNumberValidation = {
	required:REQUIRED_FIELD,
	pattern : {
			value: /^(\+\996)\s(701|700|702|703|704|705|312|313|770|555|777|505|550|500|997|998)\s\d{3}\s\d{3}$/,
			message: "Please enter a valid Kyrgyzstan phone number",
	}
}

export const selectCategoriesValidation = {
	required:REQUIRED_FIELD,
}