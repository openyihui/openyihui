<script setup lang="ts">
const openError = () => {
    ElMessage({
        duration: 5000,
        message: '无法访问（正在建设中）',
        type: 'error'
    })
}
const openMessage = () => {
    ElMessage({
        duration: 5000,
        message: '5-1内测 6-1正式版投放',
        type: 'info'
    })
}

</script>

<template>
    <div class="header-nav">
        <el-row justify="center">
            <el-col :xs="20" :sm="18" :md="16" :lg="12" :offset="0">
                <div class="nav-logo">
                    <img src="/yihuilogo.svg" :width="72">
                </div>
                <div class="nav-right">
                    <el-space :size="20">
                        <el-link :underline="false" @click="openError">
                            使用教程
                        </el-link>
                        <el-link :underline="false" @click="openMessage">
                            v1.0beta
                        </el-link>
                    </el-space>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<style scoped>
.header-nav {
    background-color: #070515;
}

.el-link {
    --el-color-primary: white;
}

.nav-logo {
    float: left;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.nav-logo>.el-text {
    font-size: 20px;
}

.nav-right {
    float: right;
    height: 60px;
    line-height: 60px;
}
</style>
