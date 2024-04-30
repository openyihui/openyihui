<script setup lang="ts">
import { ref } from 'vue'
import type { TabsPaneContext } from 'element-plus'

const activeName = ref('first')

const handleClick = (tab: TabsPaneContext, event: Event) => {
    console.log(tab, event)
}
</script>

<template>

    <div class="userpage-nav">
        <el-row justify="center">
            <el-col :xs="20" :sm="18" :md="16" :lg="12" :offset="0" class="userpage-col">
                <el-tabs v-model="activeName" class="userpage-tabs" @tab-click="handleClick">
                    <el-tab-pane label="拼图制作" name="first">
                        <GetImage></GetImage>
                    </el-tab-pane>
                    <el-tab-pane label="联系定制" name="second">
                        <LianXi></LianXi>
                    </el-tab-pane>
                </el-tabs>
            </el-col>
        </el-row>
    </div>

</template>

<style scoped>
.el-text {
    color: white;
    font-size: 30px;
}
.el-col {
    margin-top: 50px;
    height: 40px;
}
.el-tab-pane{
    text-align: center;
}

.userpage-nav {
    padding: 0px 12px;
    background-color: #070515;
}
.userpage-nav :deep(.el-tabs__header){
    margin: 0px;
}


.userpage-nav :deep(.el-tabs__item) {
    font-size: 15px;
    color: darkgray;
}

.userpage-nav :deep(.el-tabs__item.is-active) {
    color: white;
}

.userpage-nav :deep(.el-tabs__item:hover) {
    color: white;
}

.userpage-nav :deep(.el-tabs__nav-wrap:after) {
    height: 0;
}
:deep(.el-tabs__active-bar){
 background-color: #a17cff; 
 height: 3px;  
}
</style>