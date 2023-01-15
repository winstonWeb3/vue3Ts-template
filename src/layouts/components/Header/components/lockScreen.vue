<template>
	<el-dialog v-model="dialogVisible" :title="$t('header.lockScreen')" width="500px" draggable @close="closeDialog">
		<el-form ref="formRef" :model="FromData">
			<el-form-item label="锁屏密码" prop="lockPassword" :rules="[{ required: true, message: '锁屏密码不能为空' }]">
				<el-input v-model="FromData.lockPassword" show-password />
			</el-form-item>
		</el-form>
		<template #footer>
			<span class="dialog-footer">
				<el-button @click="closeDialog">取消</el-button>
				<el-button type="primary" @click="confrin">确认</el-button>
			</span>
		</template>
	</el-dialog>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import type { FormInstance } from "element-plus";
// import { GlobalStore } from "@/store/index";
import { useRouter } from "vue-router";
// const store = GlobalStore();
const router = useRouter();
const dialogVisible = ref(false);
const formRef = ref<FormInstance>();
const FromData = reactive<{
	lockPassword: string;
}>({ lockPassword: "" });
// openDialog
const openDialog = () => {
	dialogVisible.value = true;
};
function closeDialog() {
	dialogVisible.value = false;
	formRef.value?.resetFields();
}
async function confrin() {
	await formRef.value?.validate();
	dialogVisible.value = false;
	// store.SET_LOCK_PASSWD(md5(FromData.lockPassword)); 先不加密
	// store.SET_LOCK_PASSWD(FromData.lockPassword);
	sessionStorage.setItem('lockPassword', FromData.lockPassword);
	// store.SET_LOCK();
	setTimeout(() => {
		router.push({ name: "lockPage" });
	}, 100);
}
defineExpose({
	openDialog
});
</script>
