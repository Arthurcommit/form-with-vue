<template>
    <div>
		<head>
			<link type="text/css" rel="stylesheet" />
			<meta name="viewport" content="minimum-scale=1.0, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, width=device-width, shrink-to-fit=no"/>
		</head>
		<body>
			<div id="form4" >
				<div> 
					<div class="center-element">
						<div id="intro2">Inscription</div> 
					</div>
					<FormulateForm v-model="formValues" @submit="handleSubmit" style="text-align:center">
						<FormulateInput placeholder="First name" type="text" id="firstname" name="firstname" validation="required" style="margin:auto"  />
						<FormulateInput placeholder="Last name" type="text" id="lastname" name="lastname" validation="required" style="margin:auto"  />
						<FormulateInput placeholder="Email" type="text" id="mail" name="Email" validation="required|email" style="margin:auto" />
						<FormulateInput placeholder="Confirm Email" type="text" id="confirm_mail" name="Confirm" validation="required" style="margin:auto" />
						<FormulateInput placeholder="New Password" type="password" id="mdp" name="Password" validation="required" style="margin:auto" /><br>
							<p id="intro4">En cliquant sur inscription, vous acceptez nos Conditions 
							et indiquez que vous avez lu notre Politique d'utilisation des données, y compris notre Utilisation des Cookies.
							Vous pourrez recevoir des notifications par texto de la part de Facebook et pouvez vous désabonner à tout moment.
							</p>
						<FormulateInput type="submit" class="button2" name="bouton" value="Inscription" label="Sign-up" style="margin:auto"  />
					</FormulateForm>
				</div>
			</div>
		</body>
	</div>
</template>



<script>
export default {
  data: () => ({
    formValues: {}
  }),
  methods: {
    handleSubmit() {
        console.log(this.formValues)
    }
  }
};
</script>



<style scoped>

@import './style.css';

</style>
