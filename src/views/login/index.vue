<template>
	<div class="login-container flx-center">
		<SwitchDark class="dark" />
		<div class="login-box">
			<div class="login-left">
				<!-- <img src="@/assets/images/login_left0.png" alt="login" /> -->
				<Lottie width="100%" height="100%" class="Lottie" src="https://assets6.lottiefiles.com/packages/lf20_ucbyrun5.json" />
			</div>
			<div class="login-form">
				<div class="login-logo">
					<h2 class="logo-text" v-show="loginRef">登录</h2>
					<h2 class="logo-text" v-show="!loginRef">注册</h2>
				</div>
				<LoginForm />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts" name="login">
import { ref } from "vue";
import SwitchDark from "@/components/SwitchDark/index.vue";
import LoginForm from "./components/LoginForm.vue";
import Lottie from "@/components/lottie/index.vue";
const loginRef = ref(true)
</script>

<style scoped lang="scss">
@import "./index.scss";

.remenber {
	display: flex;
	justify-content: space-between;

	// padding: 20px 0;
}
.other-login {
	display: flex;
	justify-content: space-between;
	margin-top: 20px;
	.child-login {
		padding: 15px 20px;
	}
}
</style>
