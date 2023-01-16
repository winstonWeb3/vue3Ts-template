<template>
	<div class="home">
		<!-- <Lottie width="100%" height="100%" class="Lottie" src="https://assets3.lottiefiles.com/packages/lf20_puciaact.json" /> -->
		<div class="card_group">
			<div class="card_one">
				<el-icon color="#999" :size="20" class="avator_icon">
					<Avatar />
				</el-icon>
				<!-- <img src="@/assets/images/msg03.png" class="not-img" alt="404" /> -->
				<div class="bold_size">74.5K</div>
				<div>Users</div>
				<div>
					<span style="color:green;padding-right: 6PX;"><el-icon>
							<Top />
						</el-icon>22%</span>Incresessed
				</div>
			</div>
			<div class="card_one">
				<el-icon color="#d5adb0" :size="20" class="serch_icon">
					<Search />
				</el-icon>
				<!-- <img src="@/assets/images/msg03.png" class="not-img" alt="404" /> -->
				<div class="bold_size">74.5K</div>
				<div>Search</div>
				<div>
					<span style="color:green;padding-right: 6PX;"><el-icon>
							<Top />
						</el-icon>22%</span>Incresessed
				</div>
			</div>
			<div class="card_one">
				<el-icon color="#f8bf64" :size="20" class="start_icon">
					<Star />
				</el-icon>
				<!-- <img src="@/assets/images/msg03.png" class="not-img" alt="404" /> -->
				<div class="bold_size">74.5K</div>
				<div>Start</div>
				<div>
					<span style="color:green;padding-right: 6PX;"><el-icon>
							<Top />
						</el-icon>22%</span>Incresessed
				</div>
			</div>
			<div class="card_one">
				<el-icon color="#afd6bb" :size="20" class="start_icon" style="background-color: #d9f9e5;">
					<Message />
				</el-icon>
				<!-- <img src="@/assets/images/msg03.png" class="not-img" alt="404" /> -->
				<div class="bold_size">74.5K</div>
				<div>Massage</div>
				<div>
					<span style="color:green;padding-right: 6PX;"><el-icon>
							<Top />
						</el-icon>22%</span>Incresessed
				</div>
			</div>

		</div>
	</div>
</template>

<script setup lang="ts" name="home"></script>

<style scoped lang="scss">
@import "./index.scss";
</style>
