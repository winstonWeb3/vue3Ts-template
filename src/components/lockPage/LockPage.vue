<template>
	<div class="lock-container">
		<div class="lock-icon" v-show="showLock" @click="unlock">
			<div>
				<el-icon><Unlock /></el-icon>
						</div>
			<div>点击解锁</div>
		</div>
		<div class="unlock" v-show="!showLock">
			<div class="unlock-main">
				<div class="info">
					<div class="avator"></div>
					<div class="name">szw</div>
				</div>
				<div>
					<el-input style="height: 30px" v-model="inputPassward" type="password" placeholder="请输入锁屏密码" show-password />
				</div>
				<div class="contorl">
					<div class="contorl-name" @click="comeBack">返回</div>
					<div class="contorl-name" @click="comeLogin">返回登录</div>
					<div class="contorl-name" @click="goSytem">进入系统</div>
				</div>
			</div>
		</div>
		<div class="lock-time">
			<div class="time-left">
				{{ hour }}<span>{{ meridiem }}</span>
			</div>
			<div class="time-right">{{ minute }}</div>
		</div>
		<div class="lock-footer">{{ year }}/{{ month }}/{{ day }} {{ week }}</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useNow } from "./useNow";
import { GlobalStore } from "@/stores/index";
import { useRouter } from "vue-router";
import { ElMessage } from "element-plus";

const { hour, month, minute, meridiem, year, day, week } = useNow(true);
let showLock = ref(true);
const router = useRouter();
const globalStore = GlobalStore();
const inputPassward = ref("");
function unlock() {
	showLock.value = false;
}
function comeBack() {
	showLock.value = true;
}
function comeLogin() {
	globalStore.logout();
	setTimeout(() => {
		router.push({ name: "login" });
	}, 100);
}
function goSytem() {
	if (!inputPassward.value) {
		ElMessage({
			type: "warning",
			message: "请输入锁屏密码"
		});
		return;
	}
	let pwd = inputPassward.value;
	// let oldPwd = localStorage.getItem("lockPasswd");
	let oldPwd = sessionStorage.getItem("lockPasswd");
	console.log(oldPwd, pwd);
	if (pwd !== oldPwd) {
		ElMessage({
			type: "warning",
			message: "请输入相同锁屏密码"
		});
		return;
	} else {
		// globalStore.isLock = false;
		sessionStorage.removeItem('lockPasswd');
		router.push({ name: "home" });
	}
}
</script>

<style lang="scss" scoped>
.lock-container {
	display: flex;
	flex-direction: column;
	align-content: center;
	justify-content: center;
	width: 100vw;
	height: 100vh;
	color: #ffffff;
	background-color: black;
	.lock-icon {
		margin: 20px 0;
		font-size: 26px;
		text-align: center;
		cursor: pointer;
	}
	.lock-time {
		display: flex;
		flex: 1;
		justify-content: center;
		.time-left {
			position: relative;
			display: flex;
			align-items: center;
			justify-content: center;
			width: 40%;
			margin-right: 40px;
			font-size: 200px;
			font-weight: bold;
			background-color: pink;
			background-color: rgb(15 38 67 / 46%);
			border-radius: 30px;

			// opacity: 0.5;
			span {
				position: absolute;
				top: 20px;
				left: 20px;
				font-size: 20px;
			}
		}
		.time-right {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 40%;
			font-size: 200px;
			font-weight: bold;
			background-color: pink;
			background-color: rgb(15 38 67 / 46%);

			// opacity: 0.5;
			border-radius: 30px;
		}
	}
	.unlock {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 11;
		display: flex;
		flex: 1;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
		background-color: rgb(21 23 26 / 70%);
		&-main {
			width: 30%;
			text-align: center;
		}
		.info {
			display: flex;
			flex-direction: column;
			align-items: center;
			.avator {
				width: 100px;
				height: 100px;
				background: url("../../assets/images/avatar.png");
				border-radius: 50%;
			}
			.name {
				margin: 20px 0;
				font-size: 18px;
				color: rgb(126 122 122);
			}
		}
		.contorl {
			display: flex;
			justify-content: space-between;
			margin-top: 20px;
			color: #09386a;
			.contorl-name {
				cursor: pointer;
				&:hover {
					color: #2f6299;
				}
			}
		}
	}
	.lock-footer {
		margin: 20px 0;
		font-size: 30px;
		text-align: center;
	}
}
</style>
